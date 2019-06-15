const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// merge webpack config like Object.assign(a,b)
const webpackMerge = require("webpack-merge"); 

const modeConfig = env => require(`./build/webpack.${env.mode}.js`)(env);
console.log('tag', modeConfig)
module.exports = env => {
  console.log(env);

  return webpackMerge(
    {
      entry: {
        main: "./src/index.js",
      },
      mode: env.mode,
      module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' }
        ]
      },
      devServer: {
        compress: true
      },
      plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()]
    },
    modeConfig(env)
  );
};
