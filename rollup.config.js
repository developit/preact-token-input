import path from 'path';
import fs from 'fs';
import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

let pkg = JSON.parse(fs.readFileSync('./package.json'));

let external = Object.keys(pkg.peerDependencies);

export default {
	entry: 'src/index.js',
	dest: pkg.main,
	// sourceMap: path.resolve(pkg.main),
	moduleName: pkg.amdName,
	format: 'umd',
	external,
	plugins: [
		babel({
			babelrc: false,
			exclude: 'node_modules/**',
			presets: ['es2015-rollup'],
			plugins: [
				['babel-plugin-transform-es2015-classes', { loose:true }],
				['transform-react-jsx', { pragma: 'h' }]
			]
		}),
		npm({
			jsnext: true,
			main: true,
			skip: external
		}),
		commonjs({
			exclude: '**/*.css'
		}),
		postcss()
	]
};
