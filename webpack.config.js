module.exports = env => {
  return {
    entry: ["./src/main.js"],
    model:env.model,
    output: {
      filename: "bundle.js"
    },
    devServer: {
      compress: true
    }
  };
};
