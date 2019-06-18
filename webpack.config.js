const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// merge webpack config like Object.assign(a,b)
const webpackMerge = require("webpack-merge"); 

const loadPresets = require("./build/loadPresets");
const modeConfig = env => require(`./build/webpack.${env.mode}.js`)(env);
console.log('tag', modeConfig)
module.exports = ({mode ="production",presets = []}) => {
  return webpackMerge(
    {
      entry: {
        main: "./src/index.js"

      },
      mode: mode,
      module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          {
            test: /\.jpeg$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      devServer: {
        compress: true
      },
      plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()]
    },
    modeConfig({ mode, presets }),
    loadPresets({ mode, presets })
  );
};
