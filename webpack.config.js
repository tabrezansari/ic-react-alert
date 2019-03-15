const webpack = require('webpack');
module.exports = {
  devtool:'source-map',
  entry:'./src/index.js',
  output:{
  path:__dirname + "/dist",
  filename:"bundle.js"
  },
  module: {
    rules:[
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      exclude: /node_modules/,

    },
    ]   
  },
  plugins: [
    new webpack.DefinePlugin({
     'process.env':{
      'NODE_ENV': JSON.stringify('production')
     }
    })
  ]
};