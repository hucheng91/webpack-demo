module.exports = env => {
    console.log(env);
    return {
        entry: ['./src/main.js'],
        mode: env.mode,
        output: {
          filename: 'bundle.js'
        },
        devServer: {
            compress: true
          }
    }
   
  };