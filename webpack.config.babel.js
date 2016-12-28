import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/client/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const isProduction = process.env.npm_lifecycle_event === 'build';

const ProdPlugins = [
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress:{
      warnings: true
    }
  })
];

const DevPlugins = [
  new webpack.HotModuleReplacementPlugin()
];

const plugins = isProduction ? ProdPlugins : DevPlugins;
const sourceMap = isProduction ? 'cheap-module-source-map' : 'cheap-module-eval-source-map';

const config = {
  entry: [
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ...plugins
  ],
  devtool: sourceMap
};

if (!isProduction) {
  config.devServer = {
    contentBase: path.join(__dirname, '/dist'),
    hot: true,
    inline: true,
    progress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false
      }
    }
  };
}

export default config;
