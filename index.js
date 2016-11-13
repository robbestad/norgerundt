'use strict';

const Hapi = require('hapi');
const path = require('path');
const Inert = require('inert');

const server = new Hapi.Server();
server.connection({host: '0.0.0.0', port: 1995});

const isProd = false;
const plugins = [];

if (!isProd) {
	console.log('*** Adding webpack hot/dev middleware');
	plugins.push({
			register: require('hapi-webpack-dev-middleware'),
			options: {
				config: require(path.join(__dirname, 'config', 'webpack.config.dev.js')),
				options: {
					noInfo: true
				}
			}
		},
		{
			register: require('hapi-webpack-hot-middleware')
		});
}

// static paths
server.register(Inert, () => {
	server.route({
		method: 'GET',
		path: '/assets/{param*}',
		handler: {
			directory: {
				path: './assets',
				redirectToSlash: true,
				index: false
			}
		}
	});
});


if (!module.parent) {
	server.start((err) => {

		if (err) {
			throw err;
		}

		server.register(plugins, (err) => {

			if (err) {
				throw err;
			}


			server.route({
				method: 'GET',
				path: '/',
				handler: function (request, reply) {
					reply.file('./build/index.html');
				}
			});

		});

		console.log(`Server running at: ${server.info.uri}`);
	});
}
