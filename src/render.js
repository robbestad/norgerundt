const SvenDOM = require('../svenjs/packages/svenjs/dist/svenjs-dom');
const rootNode = document.getElementById('myapp');
const app = require('./app');

exports.mount = () => SvenDOM.render(
	app,
	rootNode
);

exports.dispose = () => SvenDOM.unmount(
	app, rootNode
);
