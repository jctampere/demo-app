const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require("path");

const _root = path.resolve(__dirname, ".");
function getRoot(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
  }

module.exports = {
  entry:  './src/main.ts',
  output: {
      filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },

      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      // global app config object
      config: JSON.stringify({
        apiUrl: 'http://localhost:4000'
      })
    }),
    new CopyWebpackPlugin([
        { 
          from: getRoot("src", "assets"), to: getRoot("dist", "assets") 
        },
        { 
          from: getRoot("src", "styles.css"), to: getRoot("dist", "styles.css") 
        },
        { 
            from: getRoot("src", "dna.ico"), to: getRoot("dist", "dna.ico") 
        }
       
      ]),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true
  },
  devServer: {
    historyApiFallback: true
  }
};
