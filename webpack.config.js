var path = require('path');
var ManifestRevisionPlugin = require('manifest-revision-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './frontend/index.js',
      path.resolve(__dirname, 'assets/styles/main.css'),
    ],
  },

  output: {
    path: __dirname + '/build/',
    filename: 'build.js',
    publicPath: 'http://localhost:8080/static/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: ['es2015', 'stage-0', 'react', 'react-hmre'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg([\?]?.*))$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug',
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },

  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    //hot: true,
    //inline: true,
    //contentBase: "build/public",
    //port: 2992
  },

  plugins: [
    new ManifestRevisionPlugin(path.join('build', 'manifest.json'), {
      rootAssetPath: 'assets/',
      ignorePaths: ['/styles', '/scripts'],
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
  ],
};
