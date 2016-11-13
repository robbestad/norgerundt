const Svenjs = require('svenjs');
const SearchBox = require('./searchbox');

const todoMVCApp = Svenjs.create({
	displayName: "Norge Rundt",
	initialState: {},
	_didUpdate(){
	},
	_didMount(){
	},

	render(){
		return (<section class="todoapp">
			<SearchBox />
		</section>);
	}

});
module.exports = todoMVCApp;
