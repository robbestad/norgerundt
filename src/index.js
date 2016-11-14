const Svenjs = require("../svenjs/es5/index");
const App = require("./app");
const rootNode = document.getElementById('myapp');
Svenjs.render(
	App,
	rootNode
);

if (module.hot) {
	module.hot.accept(() => {
		Svenjs.render(
			App,
			rootNode
		);
	})
}
