const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
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
      // added HtmlWebpackPlugin
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      // added WebpackPwaManifest
      new WebpackPwaManifest({
        name: 'My PWA',
        short_name: 'PWA',
        description: 'My Progressive Web App',
        background_color: '#ffffff',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('icons'),
          },
        ],
      }),
      // added InjectManifest
      new InjectManifest({
        swSrc: './src/service-worker.js',  
        swDest: 'service-worker.js',  
      }),
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
