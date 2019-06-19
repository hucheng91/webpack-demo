const path = require("path")
module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader",'sass-loader']
      }
    ]
  },
  output: {
    path: path.resolve('dist', env.mode)
  }
});
