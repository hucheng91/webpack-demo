module.exports = (api) => {
    api.cache(false);
    return {
        "presets": [
            [
                "@babel/preset-env"
            ]
        ],
        "plugins": [
            [
                "@babel/plugin-proposal-class-properties",
                {
                    "loose": true
                }
            ],
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-optional-chaining"
        ]
    }

}