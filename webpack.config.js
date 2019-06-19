const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// merge webpack config like Object.assign(a,b)
const webpackMerge = require("webpack-merge"); 

const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
      resolve:{
        alias:{
          myAxios: './utils/MyAxios'
        },
        extensions: [".ts",".js"]
      },
      module: {
        rules: [
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
          },
          {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
            test: /\.vue$/,
            use: ['vue-loader'],
          },
        ]
      },
      devServer: {
        compress: true
      },
      output: {
        chunkFilename: "[id].[name].[chunkhash].js"
      },
      plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin(),new VueLoaderPlugin()]
    },
    modeConfig({ mode, presets }),
    loadPresets({ mode, presets })
  );
};
