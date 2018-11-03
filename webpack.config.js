const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const _root = path.resolve(__dirname, '.');
function getRoot(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [_root].concat(args));
}

module.exports = {
	entry: {
    app: './src/main.ts',
    polyfill: './src/polyfills.ts',
    vendor: './src/vendor.ts'
  } ,
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader', 'angular2-template-loader'],
				exclude: /node_modules/,
			},
			{ test: /\.css$/, loader: "css-to-string-loader!style-loader!css-loader" },
			// { test: /\.(css|scss)$/, loaders: ['to-string-loader', 'css-loader', 'sass-loader'] },
    //   {
    //     test: /\.css$/,
    //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    // },
			{
				test: /\.(html)$/,
				loader: 'raw-loader',
			},
			{ test: /\.(png|jpg|JPG|jpeg|gif|svg|ico)$/, use: ['url-loader?limit=25000'] },
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
		new webpack.DefinePlugin({
			// global app config object
			config: JSON.stringify({
				apiUrl: 'http://localhost:4000',
			}),
		}),
		new CopyWebpackPlugin([
			{
				from: getRoot('src', 'assets'),
				to: getRoot('dist', 'assets'),
			},
			{
				from: getRoot('src', 'styles.css'),
				to: getRoot('dist', 'styles.css'),
			},
			{
				from: getRoot('src', 'dna.ico'),
				to: getRoot('dist', 'dna.ico'),
			},
    ]),
   //new ExtractTextPlugin('styles.css')
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: true,
	},
	devServer: {
		historyApiFallback: true,
	},
};
