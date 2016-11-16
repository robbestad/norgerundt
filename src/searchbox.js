const Component = require('../svenjs/packages/svenjs/dist/svenjs-component');
const t = require('../svenjs/packages/svenjs/dist/svenjs-create-element');
const eFetch = require('./eFetch');

const delay = (() => {
	var timer = 0;
	return function (callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();

class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			hits: []
		};
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
						onKeyUp: e => delay(() => {
							eFetch(e.target.value)
								.then(data => {
										try {
											this.setState({
												hits: data.hits.hits
											})
										} catch (e) {
											console.error(e)
										}
									}
								)
						}, 600)
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
