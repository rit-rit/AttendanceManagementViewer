const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = env => {
  return {
    entry: './src/ts/main.ts',
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/dist',
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {}
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      modules: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../node_modules')
      ],
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true
    },
    performance: {
      hints: false
    },
    devtool: '#eval-source-map',
    plugins: [new VueLoaderPlugin()]
  };
};
