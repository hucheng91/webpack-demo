module.exports = (env) => ({
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ["babel-loader"]
            }
        ]
    }
})