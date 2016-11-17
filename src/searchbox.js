const Component = require('../svenjs/packages/svenjs/dist/svenjs-component');
const t = require('../svenjs/packages/svenjs/dist/svenjs-create-element');
const eFetch = require('./eFetch');
const counter = require('./pageCounter');
const getQueryParam = require('./getQueryParam');
const replaceQueryParam = require('./replaceQueryParam');

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
			currentPage: 1,
			searchVal: ''
		};
		this.updateStart = this.updateStart.bind(this);
		this.performQuery = this.performQuery.bind(this);
		this.putState = this.putState.bind(this);
		this.updateLocation = this.updateLocation.bind(this);
	}

	updateStart(page) {
		this.setState({
			currentPage: page
		});
		const currentQuery = getQueryParam('q', window.location);
		this.updateLocation(currentQuery, page);
	}

	updateLocation(query, page) {
		let hrefLocation = replaceQueryParam('q', query, location);
		hrefLocation = replaceQueryParam('page', page, {href: hrefLocation});
		if (history.pushState) {
			console.log('pushState', hrefLocation);

			history.pushState(null, null, hrefLocation);
		}
		else {
			location.href = hrefLocation;
		}
	}

	componentDidMount() {
		this.refs.inputfield.focus();

		const currentPage = getQueryParam('page', window.location);
		console.log('currentPage', currentPage);

		const q = getQueryParam('q', window.location);
		this.putState('currentPage', currentPage);
		this.putState('searchVal', q);
		if (q) {
			this.performQuery(q, currentPage);
		}
	}

	putState(key, value) {
		if (value) {
			this.setState({
				[key]: value
			})
		}
	}

	performQuery(value, page = 1) {
		eFetch(value)
			.then(data => {
					try {
						this.updateLocation(value, page);
						this.setState({
							currentPage: page,
							hits: data.hits.hits
						})
					} catch (e) {
						console.error(e)
					}
				}
			)

	}

	render() {
		const {hits, currentPage} = this.state;

		const pages = (hits, currentPage) => {
			const max = Math.ceil(hits.length / 3);
			let out = [];
			let hrefLocation = replaceQueryParam('page', '1', location);
			for (let i = 0; i < max; i++) {
				hrefLocation = replaceQueryParam('page', i + 1, location);
				out.push(t('li', null,
					(i + 1 !== Number(currentPage)) && t('a', {
						// href: hrefLocation,
						onClick: () => this.updateStart(i + 1)
					}, i + 1),
					(i + 1 === Number(currentPage)) && t('a', {
						class: 'nolink'
					}, i + 1),
				))
			}
			return out
		};

		const {startCount, endCount} = counter(currentPage);
		return t('div', {class: 'row'},
			t('div', {class: 'app'},
				t('h3', null, 'Søk i Norge Rundt'),
				t('form', {
						class: 'search-form',
						onSubmit: (e) => (e.preventDefault())
					},
					t('input', {
						class: 'inputfield',
						ref: 'inputfield',
						placeHolder: 'Søk...',
						type: 'text',
						onKeyUp: e => delay(() => {
							this.performQuery(e.target.value);
						}, 400)
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
