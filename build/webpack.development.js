const path = require("path")
module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve('dist', env.mode)
  }
});
