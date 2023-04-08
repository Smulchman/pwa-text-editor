const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Added workbox plugins for a service worker and manifest file.
// Added CSS loaders and babel to webpack
// configure workbox plugins for a service worker and manifest file.

module.exports = { 
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
      new MiniCssExtractPlugin(),
      new InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'sw.js'
      }),
      new WebpackPwaManifest({
        // Create a manifest.json:
        name: 'J.A.T.E',
        short_name: 'JATE',
        description: 'Just Another Text Editor',
        background_color: '#000000',
        fingerprints: false,
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          },
        ]
      }),
      
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ],
    },
};
