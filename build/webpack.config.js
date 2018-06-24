const path = require("path");
const webpack = require("webpack");
const StringReplacePluing = require("string-replace-webpack-plugin");

module.exports = env => {
  return {
    entry: "src/ts/main.ts",
    output: {
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/dist",
      filename: "build.js"
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {}
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true
    },
    performance: {
      hints: false
    },
    devtool: "#eval-source-map"
  };
};
