const Component = require('../svenjs/packages/svenjs/dist/svenjs-component');
const t = require('../svenjs/packages/svenjs/dist/svenjs-create-element');
const eFetch = require('./eFetch');
const counter = require('./utils/pageCounter');
const getQueryParam = require('./utils/getQueryParam');
const replaceQueryParam = require('./utils/replaceQueryParam');
const updateLocation = require('./utils/updateWindowLocation');

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
			acInput: '',
			currentPage: 1,
			acIndex: -1,
			searchVal: q ? q : ''
		};
		this.updateStart = this.updateStart.bind(this);
		this.performQuery = this.performQuery.bind(this);
		this.putState = this.putState.bind(this);
	}

	updateStart(page) {
		this.setState({
			currentPage: page
		});
		const currentQuery = getQueryParam('q', window.location);
		updateLocation(currentQuery, page);
	}


	componentDidMount() {
		const currentPage = getQueryParam('page', window.location);

		const q = getQueryParam('q', window.location);
		this.putState('currentPage', currentPage);
		this.putState('searchVal', q);
		if (q) {
			this.performQuery(q, currentPage);
		}
		if(this.refs.inputfield) this.refs.inputfield.focus();
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
					try {
						this.setState({
							acInput: value,
							ac: data.hits.hits
						})
					} catch (e) {
						console.error(e)
					}
				}
			)
	}

	performQuery(value, page = 1) {
		if (!value) return;
		let val = value;
		val = val.replace(":", "");
		val = val.replace(",", "");
		val = val.replace(".", "");

		eFetch(val)
			.then(data => {
					try {
						// if(!this.state.searchVal)
							updateLocation(value, page);
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

		const {searchVal, hits, currentPage, ac, acInput, acIndex} = this.state;

		const acArr = ac.map(item => {
			return item._source.text_field.filter(item => item)
		}).reduce((previousValue, currentValue) => `${previousValue},${currentValue}`, '').split(',')
			.filter(item => {
				const regex = new RegExp('^' + acInput, 'i');
				return item.match(regex);
			});

		let prediction = ac.length > 0 ? 'undefined' !== typeof acArr[0] ? acArr[0] : '' : '';
		prediction = `${acInput}${prediction.substr(acInput.length, prediction.length - acInput.length)}`;

		const pages = (hits, currentPage, hitsPerPage = 10) => {
			const max = Math.ceil(hits.length / hitsPerPage);
			let out = [];
			let hrefLocation = replaceQueryParam('page', '1', location);
			for (let i = 0; i < max; i++) {
				hrefLocation = replaceQueryParam('page', i + 1, location);
				out.push(t('li', null,
					(i + 1 !== Number(currentPage)) && t('a', {
						href: hrefLocation
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
							class: 'header',
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
								class: 'header',
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
							t('div', {class: 'bi-input'},
								t('input', {class: 'prediction', ref: 'predictionField', value: prediction}),
								// searchVal && t('input', {
								// 	ref: 'inputfield',
								// 	type: 'text',
								// 	class: 'suggest',
								// 	value: searchVal,
								// 	onKeyDown: e => {
								// 		if (e.keyCode === 8) {
								// 			this.refs.predictionField.value = '';
								// 			this.setState({
								// 				acIndex: 0,
								// 				acInput: '',
								// 				searchVal: '',
								// 				ac: []
								// 			});
								// 		}
                                //
								// 		if (e.keyCode === 40) {
								// 			this.setState({
								// 				acIndex: ++this.state.acIndex
								// 			});
								// 			e.preventDefault();
								// 		}
								// 		if (e.keyCode === 38) {
								// 			this.setState({
								// 				acIndex: acIndex > 0 ? --this.state.acIndex : 0
								// 			});
								// 			e.preventDefault();
								// 		}
								// 	},
								// 	onKeypress: e => {
								// 		if (e.charCode === 13) {
								// 			this.performQuery(e.target.value);
								// 		}
								// 	},
								// 	onKeyUp: e => delay(() => {
								// 		this.performAcQuery(e.target.value);
								// 	}, 400)
								// }),
								!searchVal && t('input', {
									ref: 'inputfield',
									placeHolder: placeHolder,
									class: 'suggest',
									type: 'text',
									onKeyDown: e => {
										console.log(e.keyCode);
										if (e.keyCode === 8) {
											this.refs.predictionField.value = '';
											this.setState({
												acIndex: 0,
												acInput: '',
												searchVal: '',
												ac: []
											});
										}


										if (e.keyCode === 39) {
											//høyre
											if(prediction) {
												this.refs.inputfield.value = prediction;
											}
											e.preventDefault();
										}

										if (e.keyCode === 40) {
											this.setState({
												acIndex: this.state.acIndex++
											});
											e.preventDefault();
										}
										if (e.keyCode === 38) {
											this.setState({
												acIndex: this.state.acIndex--
											});
											e.preventDefault();
										}
									},
									onKeyPress: e => {
										if (e.charCode === 13) {
											this.performQuery(e.target.value);
										} else {
											this.setState({
												acInput: '',
												ac: []
											});
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
										class: 'hidden',
										onClick: e => {
											this.performQuery(this.refs.inputfield.value);
										}
									}
								))
						),

						// ac.length > 0 && t('ul', {class: 'suggest'},
						// 	acArr.map((item, i) => t('li', {
						// 			class: `item ${acIndex === i ? 'active' : ''}`,
						// 			onClick: () => this.performQuery(item)
						// 		},
						// 		`${item} ${acIndex} ${i}`))
						// )
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
