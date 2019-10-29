require("@babel/polyfill");

const path = require('path');

module.exports = {
  context: path.join(__dirname, 'client/src'),
  devtool: '#eval-source-map',
  entry: [
    "@babel/polyfill",
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.jsx.html', '.json'],
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }
};
