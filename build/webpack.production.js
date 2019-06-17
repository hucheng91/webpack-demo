const path = require("path")
module.exports = (env) => ({
    output: {
        path: path.resolve('dist',env.mode) 
      }
});
