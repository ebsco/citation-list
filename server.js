var webpack = require('webpack'),
	webpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.config.js');
config.entry.unshift('webpack-dev-server/client?http://localhost:8080');
var compiler = webpack(config);
var server = new webpackDevServer(compiler);
server.listen(8080);