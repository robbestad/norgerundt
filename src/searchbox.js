const Component = require('../svenjs/packages/svenjs/dist/svenjs-component');
const t = require('../svenjs/packages/svenjs/dist/svenjs-create-element');
const eFetch = require('./eFetch');
const counter = require('./pageCounter');

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
			hits: [],
			currentPage: 1
		};
		this.updateStart = this.updateStart.bind(this);
	}

	updateStart(page) {
		this.setState({
			currentPage: page
		})
	}

	componentDidMount() {
		let currentPage = 1;

		if (location.href.indexOf("#") != -1) {
			const hash = location.href.substr(location.href.indexOf("#"));
			const page = hash.split('page');
			if (page[1]) {
				currentPage = page[1];
			}
		}

		this.updateStart(currentPage);

		this.refs.inputfield.focus();
	}

	render() {
		const {hits, searchVal, currentPage} = this.state;

		const pages = (hits, currentPage) => {
			const max = Math.ceil(hits.length / 3);
			let out = [];

			for (let i = 0; i < max; i++) {
				out.push(t('li', null,
					(i + 1 !== Number(currentPage)) && t('a', {
						href: `#page${i + 1}`,
						onClick: () => this.updateStart(i + 1)
					}, i + 1),
					(i + 1 === Number(currentPage)) && t('a', {
						onClick: () => this.updateStart(i + 1)
					}, i + 1),
				))
			}
			return out
		};

		const {startCount, endCount} = counter(currentPage);
		return t('div', {class: 'row'},
			t('div', {class: 'app'},
				t('h3', null, 'Søk i Norge Rundt'),
				t('form', {class: 'search-form'},
					t('input', {
						class: 'inputfield',
						ref: 'inputfield',
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
					hits && hits.map((hit, idx)=> {
						return idx >= startCount && idx <= endCount && (t('li', {
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
							))
					}),
					hits.length > 0 && t('ul', {class: 'pages'}, pages(hits, currentPage))
				)
			)
		)
	}
}
module.exports = t(SearchBox);
