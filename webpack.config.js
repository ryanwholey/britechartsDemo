var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		path.resolve(__dirname, 'src/index.js')
	],
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.s?css$/,
				loaders:  ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.ttf$/,
				loader: 'file-loader?name=[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: 'favicon.ico',
			filename: 'index.html',
			template: 'src/index.html',
		})
	]
};
