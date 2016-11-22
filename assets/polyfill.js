<script type="text/javascript">
if(!window.fetch || !window.Request){
	(function(document, tag) {
		var scriptTag = document.createElement(tag), // create a script tag
			firstScriptTag = document.getElementsByTagName(tag)[0]; // find the first script tag in the document
		scriptTag.src = '//cdnjs.cloudflare.com/ajax/libs/fetch/2.0.0/fetch.min.js'; // set the source of the script to your script
		firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
	}(document, 'script'));
}
</script>
