import {rollup} from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import * as p from 'path';
import * as fs from 'fs';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import filesize from 'rollup-plugin-filesize';
import pack from '../package.json';
//
// const plugins = [
// 	nodeResolve({
// 		// use "module" field for ES6 module if possible
// 		module: true, // Default: true
//
// 		// use "jsnext:main" if possible
// 		// – see https://github.com/rollup/rollup/wiki/jsnext:main
// 		jsnext: true,  // Default: false
//
// 		// use "main" field or index.js, even if it's not an ES6 module
// 		// (needs to be converted from CommonJS to ES6
// 		// – see https://github.com/rollup/rollup-plugin-commonjs
// 		main: true,  // Default: true
//
// 		// if there's something your bundle requires that you DON'T
// 		// want to include, add it to 'skip'. Local and relative imports
// 		// can be skipped by giving the full filepath. E.g.,
// 		// `path.resolve('src/relative-dependency.js')`
// 		skip: [],  // Default: []
//
// 		// some package.json files have a `browser` field which
// 		// specifies alternative files to load for people bundling
// 		// for the browser. If that's you, use this option, otherwise
// 		// pkg.browser will be ignored
// 		browser: true,  // Default: false
//
// 		// not all files you want to resolve are .js files
// 		extensions: ['.js', '.json'],  // Default: ['.js']
//
// 		// whether to prefer built-in modules (e.g. `fs`, `path`) or
// 		// local ones with the same names
// 		preferBuiltins: false  // Default: true
//
// 	}),
// 	uglify()
//
// ];
//
// // if (process.env.NODE_ENV === 'production') {
// // 	plugins.push(
// // 		uglify({
// // 			warnings: false,
// // 			compress: {
// // 				screw_ie8: true,
// // 				dead_code: true,
// // 				unused: true,
// // 				drop_debugger: true,
// // 				booleans: true
// // 			},
// // 			mangle: {
// // 				screw_ie8: true
// // 			}
// // 		})
// // 	);
// // }
// //
//
// rollup({
// 	entry: 'src/index.js',
// 	plugins: plugins
// }).then(bundle => bundle.write({dest: 'bundle.js', format: 'iife'}));
//
// rollup({
// 	entry: 'src/index.js',
// 	plugins: [
// 		nodeResolve({jsnext: true, main: true}),
// 		commonjs()
// 	]
// }).then(bundle => bundle.write({
// 	dest: 'bundle.js',
// 	moduleName: 'MyModule',
// 	format: 'iife'
// })).catch(err => console.log(err.stack));

import eslint from 'rollup-plugin-eslint';

export default {
	entry: '../src/index.js',
	dest: '../bundle.min.js',
	format: 'iife',
	sourceMap: 'inline',
	plugins: [
	nodeResolve({
		// use "module" field for ES6 module if possible
		module: true, // Default: true

		// use "jsnext:main" if possible
		// – see https://github.com/rollup/rollup/wiki/jsnext:main
		jsnext: true,  // Default: false

		// use "main" field or index.js, even if it's not an ES6 module
		// (needs to be converted from CommonJS to ES6
		// – see https://github.com/rollup/rollup-plugin-commonjs
		main: true,  // Default: true

		// if there's something your bundle requires that you DON'T
		// want to include, add it to 'skip'. Local and relative imports
		// can be skipped by giving the full filepath. E.g.,
		// `path.resolve('src/relative-dependency.js')`
		skip: [],  // Default: []

		// some package.json files have a `browser` field which
		// specifies alternative files to load for people bundling
		// for the browser. If that's you, use this option, otherwise
		// pkg.browser will be ignored
		browser: true,  // Default: false

		// not all files you want to resolve are .js files
		extensions: ['.js', '.json'],  // Default: ['.js']

		// whether to prefer built-in modules (e.g. `fs`, `path`) or
		// local ones with the same names
		preferBuiltins: false  // Default: true

	}),
		commonjs(),
		eslint({
			exclude: [
				'src/styles/**',
			]
		}),
		buble({
			objectAssign: 'Object.assign'
		}),
		// babel({
		// 	exclude: 'node_modules/**',
		// }),
		replace({
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		(process.env.NODE_ENV === 'production' && uglify()),
	],
};


// const pkg = JSON.parse(fs.readFileSync('./package.json'));
// const external = Object.keys(pkg.peerDependencies || {}).concat(Object.keys(pkg.dependencies || {}));
//
// const plugins = [
// 	buble({
// 		objectAssign: 'Object.assign'
// 	}),
// 	nodeResolve({
// 		jsnext: true,
// 		main: true,
// 		skip: external
// 	}),
// 	commonjs({
// 		include: 'node_modules/**',
// 		exclude: ['node_modules/symbol-observable/**', '**/*.css']
// 	}),
// 	replace({
// 		'process.env.NODE_ENV': JSON.stringify('production'),
// 		VERSION: pack.version
// 	})
// ];
//
// if (process.env.NODE_ENV === 'production') {
// 	plugins.push(
// 		uglify({
// 			warnings: false,
// 			compress: {
// 				screw_ie8: true,
// 				dead_code: true,
// 				unused: true,
// 				drop_debugger: true, //
// 				booleans: true // various optimizations for boolean context, for example !!a ? b : c → a ? b : c
// 			},
// 			mangle: {
// 				screw_ie8: true
// 			}
// 		})
// 	);
// }
//
// // Filesize plugin needs to be last to report correct filesizes when minified
// plugins.push(filesize());
//
// const bundles = [
// 	{
// 		moduleGlobal: 'App',
// 		moduleName: 'app',
// 		moduleEntry: './src/index.js',
// 		path: './src'
// 	}
// ];
//
// function createBundle({moduleGlobal, moduleName, moduleEntry }, path) {
// 	const copyright =
// 		'/*!\n' +
// 		' * ' + moduleName + ' v' + pack.version + '\n' +
// 		' * (c) ' + new Date().getFullYear() + ' ' + pack.author.name + '\n' +
// 		' * Released under the ' + pack.license + ' License.\n' +
// 		' */';
// 	const entry = p.resolve(moduleEntry);
// 	const dest  = p.resolve(`${ path }${ moduleName }.${ process.env.NODE_ENV === 'production' ? 'min.js' : 'js' }`);
//
// 	const bundleConfig = {
// 		dest,
// 		format: 'umd',
// 		moduleName: moduleGlobal,
// 		globals: {
// 			moduleGlobal: moduleGlobal
// 		},
// 		banner: copyright,
// 		sourceMap: false
// 	};
//
// 	return rollup({entry, plugins}).then(({write}) => write(bundleConfig)).catch(err => {
// 		console.log(err)
// 	});
// }
//
// Promise.all(bundles.map(bundle => createBundle(bundle, './ndist/')));
