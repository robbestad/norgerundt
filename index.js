'use strict';

const Hapi = require('hapi');
const path = require('path');
const Inert = require('inert');
const curl = require('curlrequest');
const bodyParser = require('body-parser');
const Joi = require('joi');
const fetch = require('isomorphic-fetch');
const isProd = process.env.NODE_ENV === 'production';

const server = new Hapi.Server();
const PORT = process.env.PORT || 1996;
const HOST = process.env.HOST || '0.0.0.0';
server.connection({host: HOST, port: isProd ? PORT : 1995});

const index = !isProd ? './index.html' : './dist/index.html';
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
				path: !isProd ? './assets' : './dist/assets',
				redirectToSlash: true,
				index: false
			}
		}
	});
});

const getData = (input) => {
	let request;
	// if (isProd) {
	// 	// request = new Request('http://57e71220df27cc6ca6912bfb750b0c4b.eu-west-1.aws.found.io:9200/norgerundt/_search', {
	// 	request = new Request('https://57e71220df27cc6ca6912bfb750b0c4b.eu-west-1.aws.found.io:9243/norgerundt/_search', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			query: {
	// 				query_string: {
	// 					query: input,
	// 					default_operator: "AND"
	// 				}
	// 			}
	// 		}),
	// 		headers: new Headers({
	// 			'Accept': 'application/json, text/plain, */*',
	// 			'Authorization': 'Basic ZWxhc3RpYzpBMzlrN2xWVFJNaUVYdGlhNHpSRUd6bmo=',
	// 			'Content-Type': 'application/json'
	// 		})
	// 	});
	// } else {
	request = new Request('http://localhost:9200/norgerundt/_search', {
		method: 'POST',
		body: JSON.stringify({
			query: {
				query_string: {
					query: input,
					default_operator: "AND"
				}
			}
		}),
		headers: new Headers({
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		})
	});

	return fetch(request)
		.then(res => res.json());
}

const searchHandler = function (request, reply) {
	const input = request.payload.input;
	reply(getData(input).then(res => res));
};
const searchConfig = {
	handler: searchHandler,
	validate: {
		payload: {
			input: Joi.string().min(1).required()
		}
	}
};

if (!module.parent) {
	server.start((err) => {

		if (err) {
			throw err;
		}

		server.register(plugins, (err) => {

			if (err) {
				throw err;
			}


			server.route([
				{
					method: 'GET',
					path: '/',
					handler: function (request, reply) {
						reply.file(index);
					},
				},
				{
					method: 'POST',
					path: '/search',
					config: searchConfig
				}
			]);

		});

		console.log(`Server running at: ${server.info.uri}`);
	});
}
