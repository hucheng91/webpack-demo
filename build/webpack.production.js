const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
  output: {
    path: path.resolve('dist', env.mode)
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
});
