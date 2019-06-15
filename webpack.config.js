module.exports = (env) => {
  return {
    entry: {
      main: "./src/main.js",
      index: "./src/index.js"
    },
    mode:env.mode,
    output: {
      filename: "[name].js"
    },
    module: {
      rules: [
        { test: /\.css$/, use: 'css-loader' }
      ]
    },
    devServer: {
      compress: true
    }
  };
};
