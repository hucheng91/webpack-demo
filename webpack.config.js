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
    devServer: {
      compress: true
    }
  };
};
