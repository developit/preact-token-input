import pkg from './package.json';

module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: `${pkg.name}.js`,
		library: pkg.amdName,
		libraryTarget: 'umd'
	},
	externals: Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies)),
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	devtool: 'source-map'
};
