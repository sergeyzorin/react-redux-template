const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  context: path.resolve(__dirname, "src/frontend"),

  entry: {
    bundle: "./index.jsx",
    "tests-bundle": "./tests.js"
  },

  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "[name].js",
    publicPath: "assets/"
  },

  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "react-hot!babel"
      },
      {
        test: /\.less$/,
        loader: "style!css!postcss-loader!less"
      },
      {
        test: /\.gif$/,
        loader: "file?name=[path][name].[ext]"
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ],

  postcss: function() {
    return [autoprefixer];
  }
};
