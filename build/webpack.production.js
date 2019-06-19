const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(),new CleanWebpackPlugin()],
  output: {
    path: path.resolve('dist', env.mode)
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
});
