var path = require('path');
var webpack = require('webpack');
console.log('** Configuring app using webpack dev config');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	module: {
		options: {
			noInfo: true,
			quiet: true
		},
		preLoaders: [
			{test: /\.js$/, loaders: ['svenjsx-loader'], exclude: /node_modules/}
		],
		loaders: [
			{
				tests: /\.js?$/,
				loader: 'babel',
				exclude: /(node_modules)/,
				query: {
					presets: [
						'es2015',
						'stage-0'
					],
					cacheDirectory: true,
					plugins: [
						'transform-runtime',
						'add-module-exports',
						'transform-decorators-legacy'
					]
				}
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			}
		]
	},
	resolve: {
		extensions: ['', '.js'],
		root: path.resolve(__dirname, '..', 'src')
	}
};

