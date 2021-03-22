const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  devtool: '#cheap-module-source-map',
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  optimization: {
    splitChunks: { chunks: "all" }
  },
};