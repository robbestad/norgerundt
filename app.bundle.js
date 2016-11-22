/*!
 * app.bundle v0.0.1
 * (c) 2016 Sven A Robbestad
 * Released under the ISC License.
 */
(function () {
'use strict';

var SvenDOM = require('../svenjs/packages/svenjs/dist/svenjs-dom');
var rootNode = document.getElementById('myapp');
var app = require('./app');
var ref = require('./render');
var mount = ref.mount;
var dispose = ref.dispose;
mount();

if (module.hot) {
	module.hot.accept(function () {
		mount();
	});
	module.hot.dispose(function (data) {
		dispose();
	});
}

}());
