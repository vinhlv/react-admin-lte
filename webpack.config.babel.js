var path = require('path');
import autoprefixer from 'autoprefixer';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';

var config = {
  context: path.join(__dirname),
  entry: {
    app: [
      './node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
      './node_modules/admin-lte/dist/css/AdminLTE.min.css',
      './node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
      'global_styles/_global.scss',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(ico|jpg|jpeg|png|eot|ttf|woff|svg|less)/,
        loader: 'file'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.(scss|css)$/,
        include: /components\/partials\//,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[local]!sass?sourceMap")
      }, {
        test: /\.(scss|css)$/,
        exclude: /components\/partials\//,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[local]!sass?sourceMap")
      }, {
        test: /\.(md)$/,
        loader: ExtractTextPlugin.extract('html!highlight!markdown')
      }, {
        test: /modernizr\.min\.js$/,
        loader: "imports?this=>window,html5=>window.html5!exports?window.Modernizr"
      }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    extensions: [
      '', '.scss', '.js', '.json', '.md'
    ],
    packageMains: [
      'browser', 'web', 'browserify', 'main', 'style'
    ],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ],
    alias: {
      'base': path.resolve(__dirname, './src/'),
      'components': path.resolve(__dirname, './src/components/'),
      'assets': path.resolve(__dirname, './src/assets/'),
      'global_styles': path.resolve(__dirname, './src/assets/styles/'),
      'constants': path.resolve(__dirname, './src/constants'),
      'api': path.resolve(__dirname, './src/api/'),
      'app': path.resolve(__dirname, './src/components/app'),
      'pages': path.resolve(__dirname, './src/components/pages'),
      'layout': path.resolve(__dirname, './src/components/layout'),
      'modules': path.resolve(__dirname, './src/components/modules')
    }
  },
  postcss: () => [autoprefixer({browsers: 'last 2 versions'})],
  plugins: ([
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/', 'index.html'),
      favicon: path.resolve('./src/', 'assets/images/favicon.ico'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.ProvidePlugin({$: "jquery", jquery: "jQuery", "windows.jQuery": "jquery"})
    // new webpack.HotModuleReplacementPlugin()
  ]).concat(ENV === 'production'
    ? [
      new webpack.optimize.OccurenceOrderPlugin()
    ]
    : []),
  stats: {
    colors: true
  },
  node: {
    global: true,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },
  devtool: ENV === 'production'
    ? 'source-map'
    : 'source-map',
  devServer: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    colors: true,
    publicPath: '/',
    contentBase: './',
    historyApiFallback: true,
    proxy: [
      // OPTIONAL: proxy configuration:
      // {
      //  path: '/optional-prefix/**',
      //  target: 'http://target-host.com',
      //  rewrite: req => { req.url = req.url.replace(/^\/[^\/]+\//, ''); }   // strip first path segment
      // }
    ]
  }
};
module.exports = config;
