module.exports = function (api) {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                corejs : {
                    version : "2",
                    proposals : true
                },
                useBuiltIns: 'usage',
                targets: {
                    browsers: [
                        "firefox >= 57",
                        "ie >= 11",
                        "chrome >= 49"
                    ]
                }
            }
        ]
    ];
    const plugins= [
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ];
    return {
        presets,
        plugins
    }
}