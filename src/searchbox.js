// const Svenjs = require("svenjs");
const Svenjs = require("../svenjs/es5/index");
const eFetch = require('./eFetch');

module.exports = Svenjs.create({
	initialState: {
		searchVal: '',
		hits: []
	},
	render() {
		const clickFunc = (data) => {
			let clicks = this.state.clicks;
			this.setState({
				searchVal: data[0].value
			});
			eFetch(data[0].value)
				.then(data => {
					console.log('data.hits.hits', data.hits.hits);

					this.setState({
						...this.state,
						hits: data.hits.hits
					})
				});

		};

		const {hits, searchVal} = this.state;

		// hits && hits.map(hit=>console.log('hit', hit._source.tittel))

		return (<div id="row">
			<div id="app">
				<h3>Søk i Norge Rundt</h3>
				<form onSubmit={e => {
					e.preventDefault();
					clickFunc.call(this, e.target);
				}}>
					<input type="text" placeHolder="Søk etter noe" value={searchVal ? searchVal : ''}/>
					<input type="submit" class="button" value="Søk"/>
				</form>
			</div>
			<ul id="hits">
				{hits && hits.map(hit=> {
					return (<li class="infoblock">
						<span class="infohead">{hit._source.tittel} ({hit._source.year})</span>
						{!hit._source.alder ? '' : <span class="infoline">Alder: {hit._source.alder}</span>}
						{!hit._source.antall_kvinner ? '' : <span class="infoline">Antall kvinner: {hit._source.antall_kvinner}</span>}
						{!hit._source.antall_menn ? '' : <span class="infoline">Antall menn: {hit._source.antall_menn}</span>}
						{!hit._source.antrekk ? '' : <span class="infoline">Antrekk: {hit._source.antrekk}</span>}
						<a target="_blank" class="subdued" href={hit._source.url}>Se video</a></li>)
				})}
			</ul>

		</div>)
	}
});
