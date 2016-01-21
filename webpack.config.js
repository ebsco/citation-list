var path = require('path');

module.exports = {
	entry: ['./public/scripts/main'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
		]
	},
}
