const Svenjs = require("../svenjs/es5/index");
const SearchBox = require('./searchbox');

const todoMVCApp = Svenjs.create({
	displayName: "Norge Rundt",
	initialState: {},
	_didUpdate(){
	},
	_didMount(){
	},

	render(){
		return (<section class="svenapp">
			<SearchBox />
		</section>);
	}

});
module.exports = todoMVCApp;
