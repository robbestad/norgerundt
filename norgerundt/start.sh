#!/usr/bin/env bash
ADDRESS=$1
INDEX="norgerundt"
ACINDEX="norgerundt_autocomplete"
HEADER=" -H \"Authorization: Basic YWRtaW46Y2hhbmdl\" "

if [ -z $ADDRESS ]; then
  ADDRESS="localhost:9200"
fi

# Check that Elasticsearch is running
curl -s -u admin:change "http://$ADDRESS" 2>&1 > /dev/null
if [ $? != 0 ]; then
    echo "Unable to contact Elasticsearch on port 9200."
    echo "Please ensure Elasticsearch is running and can be reached at http://localhost:9200/"
    exit -1
fi

echo "WARNING, this script will delete the 'norgerundt' and the 'norgerundt-autocomplete' indices and re-index all data!"
echo "Press Control-C to cancel this operations."
echo
echo "Press [Enter] to continue."
read

# Delete the old index, swallow failures if it doesn't exist
curl -s -u admin:change -XDELETE "$ADDRESS/$INDEX" > /dev/null
curl -s -u admin:change -XDELETE "$ADDRESS/$ACINDEX" > /dev/null

# Create the next index using mapping.json
echo "Creating 'norgerundt' index..."
curl -s -u admin:change -XPOST "$ADDRESS/$INDEX/index" -d@$(dirname $0)/mapping.json

# Wait for index to become yellow
curl -s -u admin:change "$ADDRESS/$INDEX/_health?wait_for_status=yellow&timeout=10s" > /dev/null
echo
echo "Done creating '$INDEX' index."

echo
echo "Indexing data..."
sh transform.sh

echo
echo "Mapping autocomplete..."

curl -s -u admin:change  -XPUT $ADDRESS/$ACINDEX -d'{
   "settings": {
      "analysis": {
         "filter": {
            "edge_ngram_filter": {
               "type": "edge_ngram",
               "min_gram": 2,
               "max_gram": 20
            }
         },
         "analyzer": {
            "edge_ngram_analyzer": {
               "type": "custom",
               "tokenizer": "standard",
               "filter": [
                  "lowercase",
                  "edge_ngram_filter"
               ]
            }
         }
      }
   },
   "mappings": {
      "item": {
         "properties": {
            "text_field": {
               "type": "text",
               "analyzer": "edge_ngram_analyzer",
               "search_analyzer": "standard"
            }
         }
      }
   }
}'

echo
echo "Indexing autocomplete..."
sh autocomplete.sh

