const Component = require('../svenjs/packages/svenjs/dist/svenjs-component');
const t = require('../svenjs/packages/svenjs/dist/svenjs-create-element');
const eFetch = require('./eFetch');
const counter = require('./utils/pageCounter');
const getQueryParam = require('./utils/getQueryParam');
const replaceQueryParam = require('./utils/replaceQueryParam');

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
		const q = getQueryParam('q', window.location);
		this.state = {
			hits: [],
			ac: [],
			currentPage: 1,
			searchVal: q ? q : ''
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
			history.pushState(null, null, hrefLocation);
		}
		else {
			location.href = hrefLocation;
		}
		window.scrollTo(0, 0);
	}

	componentDidMount() {
		const currentPage = getQueryParam('page', window.location);

		const q = getQueryParam('q', window.location);
		this.putState('currentPage', currentPage);
		this.putState('searchVal', q);
		if (q) {
			this.performQuery(q, currentPage);
		}
		this.refs.inputfield.focus();
	}

	putState(key, value) {
		if (value) {
			this.setState({
				[key]: value
			})
		}
	}

	performAcQuery(value) {
		eFetch(value, '/ac')
			.then(data => {
					// data.hits.hits.forEach(item => {
					// 	console.log(item._source.text_field[0]);
					// })
					try {
						this.setState({
							ac: data.hits.hits
						})
					} catch (e) {
						console.error(e)
					}
				}
			)
	}

	performQuery(value, page = 1) {
		eFetch(value)
			.then(data => {
					try {
						this.updateLocation(value, page);
						this.setState({
							currentPage: page,
							searchVal: value,
							hits: data.hits.hits
						})
					} catch (e) {
						console.error(e)
					}
				}
			)

	}

	render() {
		const {searchVal, hits, currentPage, ac} = this.state;

		const pages = (hits, currentPage, hitsPerPage = 10) => {
			const max = Math.ceil(hits.length / hitsPerPage);
			let out = [];
			let hrefLocation = replaceQueryParam('page', '1', location);
			for (let i = 0; i < max; i++) {
				hrefLocation = replaceQueryParam('page', i + 1, location);
				out.push(t('li', null,
					(i + 1 !== Number(currentPage)) && t('a', {
						href: hrefLocation
						// onClick: () => this.updateStart(i + 1)
					}, i + 1),
					(i + 1 === Number(currentPage)) && t('a', {
						class: 'nolink'
					}, i + 1),
				))
			}
			return out
		};

		const placeHolderItems = ['Vinter', 'Oslo', 'Hatt', 'Akvarium'];
		const placeHolder = placeHolderItems[Math.floor(Math.random() * placeHolderItems.length)];

		const {startCount, endCount} = counter(currentPage);
		return t('div', null,
			t('div', {class: 'row-head'},
				t('div', {class: 'header-left'},
					t('a', {href: '/'},
						t('img', {class: 'logo', src: '/assets/logo80.png'})
					)
				),
				hits.length > 0 && t('div', {class: 'header-right'},
					t('form', {
							onSubmit: (e) => (e.preventDefault())
						},
						searchVal && t('input', {
							ref: 'inputfield',
							value: searchVal,
							type: 'text',
							onKeypress: e => {
								if (e.charCode === 13) {
									this.performQuery(e.target.value);
								}
							}
						}),
						!searchVal && t('input', {
							ref: 'inputfield',
							placeHolder: placeHolder,
							type: 'text',
							onKeypress: e => {
								if (e.charCode === 13) {
									this.performQuery(e.target.value);
								}
							}
						}),
						t('input',
							{
								type: 'button',
								value: 'Søk',
								onClick: e => {
									this.performQuery(this.refs.inputfield.value);
								}
							}
						)
					)
				)
			),
			!hits.length && t('div', {class: 'row animated fadeIn'},
				t('div', {class: 'frontpage-block'},
					t('h1', null, 'Søk i alle Norge Rundts sendinger'),
					t('img', {src: '/assets/norgerundt.jpg', class: 'frontpage-image'}),
					t('div', {class: 'form-center'},
						t('form', {
								onSubmit: (e) => (e.preventDefault())
							},
							searchVal && t('input', {
								ref: 'inputfield',
								type: 'text',
								value: searchVal,
								onKeypress: e => {
									if (e.charCode === 13) {
										this.performQuery(e.target.value);
									}
								},
								onKeyUp: e => delay(() => {
									this.performAcQuery(e.target.value);
								}, 400)
							}),
							!searchVal && t('input', {
								ref: 'inputfield',
								placeHolder: placeHolder,
								type: 'text',
								onKeypress: e => {
									if (e.charCode === 13) {
										this.performQuery(e.target.value);
									}
								},
								onKeyUp: e => delay(() => {
									this.performAcQuery(e.target.value);
								}, 400)
							}),
							t('input',
								{
									type: 'button',
									value: 'Søk',
									onClick: e => {
										this.performQuery(this.refs.inputfield.value);
									}
								}
							)
						),
						ac.length > 0 && t('ul', {class: 'suggest'},
							ac.map(item => t('li', {class: 'item'}, item._source.text_field[0]))
						)
					)
				)
			),
			searchVal !== '' && !hits.length && t('div', {class: 'row animated fadeIn'},
				t('div', {class: 'search-no-hits-block'},
					t('div', {class: 'search-no-hits'}, `Ingen treff på '${searchVal}'`)
				)
			),
			hits.length > 0 && t('div', {class: 'row'},
				t('ul', {id: 'hits'},
					hits.map((hit, idx)=> {
						const menn = Number(hit._source.antall_menn) === 1 ? 'en mann' : `${hit._source.antall_menn} menn`;
						const kvinner = Number(hit._source.antall_kvinner) === 1 ? 'en kvinne' : `${hit._source.antall_kvinner} kvinner`;
						const kommune = hit._source.kommune === 'Oslokommune' ? 'Oslo' : hit._source.kommune;
						const _a = hit._source.antrekk.toLowerCase().split(',');
						let antrekk = '';
						if (_a.length === 1) {
							antrekk = _a[_a.length - 1];
						} else {
							_a.forEach((a, i) => {
								if (i + 1 === _a.length) antrekk += ' og ';
								antrekk += a;
								if (i + 2 < _a.length) antrekk += ', ';
							});

						}

						return idx >= startCount && idx <= endCount && (t('li', null,
								t('a', {href: hit._source.url},
									t('div', null, `${hit._source.tittel} (${hit._source.year})`)
								),
								hit._source.hovedtema && t('span', null,
									t('small', null, `Tema: ${hit._source.hovedtema}. `),
								),
								t('br', null),
								(hit._source.antall_menn || hit._source.antall_kvinner) && hit._source.kommune && t('span', null, `I dette innslaget fra ${kommune} ser du `),
								hit._source.antall_kvinner && !hit._source.antall_menn && t('span', null, `${kvinner}. `),
								hit._source.antall_menn && hit._source.antall_kvinner && t('span', null, `${menn} og ${kvinner}. `),
								!hit._source.antall_kvinner && hit._source.antall_menn && t('span', null, `${menn}. `),
								hit._source.alder && t('span', null, `Alder på personene i dette innslaget spenner fra ${hit._source.alder} år. `),
								hit._source.antrekk && t('span', null, `Antrekk er ${antrekk}.`),
								t('hr', null)
							))
					})
				)
			),
			hits.length > 0 && t('ul', {class: 'pages'}, pages(hits, currentPage))
		)
	}
}
module.exports = t(SearchBox);
