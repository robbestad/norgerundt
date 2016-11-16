const Component = require('../svenjs/packages/svenjs/dist/svenjs-component');
const t = require('../svenjs/packages/svenjs/dist/svenjs-create-element');
const eFetch = require('./eFetch');

class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			searchVal: '',
			hits: []
		};
		this.handleChange = this.handleChange.bind(this);
	}


	handleChange(e) {
		const val = e.target.value.trimLeft();
		this.setState({
			searchVal: val
		});
		eFetch(val)
			.then(data => {
				try {
					const hits = data.hits.hits;
					this.setState({
						hits
					})
				} catch (e) {
					console.error('e', e);
				}
			});
	}

	render() {
		const {hits, searchVal} = this.state;
		return t('div', {class: 'row'},
			t('div', {class: 'app'},
				t('h3', null, 'Søk i Norge Rundt'),
				t('form', {class: 'search-form'},
					t('input', {
						class: 'inputfield',
						placeHolder: 'Søk...',
						type: 'text',
						value: searchVal ? searchVal : '',
						onKeyUp: this.handleChange
					})
				),
				t('ul', {id: 'hits'},
					hits && hits.map(hit=> {
						return (t('li', {
								class: 'infoblock'
							},
							t('div', {class: 'infohead'}, `${hit._source.tittel} (${hit._source.year})`),
							hit._source.alder && t('div', null, `Personalder: ${hit._source.alder}`),
							hit._source.antall_kvinner && t('div', null, `Kvinner: ${hit._source.antall_kvinner}`),
							hit._source.antall_menn && t('div', null, `Menn: ${hit._source.antall_menn}`),
							hit._source.antrekk && t('div', null, `Antrekk: ${hit._source.antrekk}`),
							t('div', null,
								t('a', {target: '_blank', class: 'subdued', href: hit._source.url}, 'Se video')
							),
						));
					})
				)
			)
		)
	}
}
module.exports = t(SearchBox);
