module.exports = (env) => {
  return {
    entry: ["./src/main.js"],
    mode:env.mode,
    output: {
      filename: "bundle.js"
    },
    devServer: {
      compress: true
    }
  };
};
