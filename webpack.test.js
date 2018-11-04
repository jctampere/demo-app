var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
    //   {
    //     test: /\.css$/,
    //     exclude: helpers.root('src', 'app'),
    //     loader: 'null-loader'
    //   },
    { test: /\.css$/, loader: "css-to-string-loader!style-loader!css-loader" },
    {
        test: /\.(css|scss)$/,
        include: helpers.root('src', 'app'),
        loader: ['to-string-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
			// global app config object
			config: JSON.stringify({
				apiUrl: 'http://localhost:4000',
			}),
		}),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    )
  ]
}