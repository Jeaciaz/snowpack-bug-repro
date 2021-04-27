const path= require('path')

module.exports = {
    plugins: [
        [
            '@snowpack/plugin-webpack',
            {
                extendConfig: (config) => {
                    config.module = {
                        rules: [
                            {
                                test: /\.js$/,
                                exclude: [
                                    /\bcore-js\b/,
                                    /\bwebpack\/buildin\b/
                                ],
                                use: {
                                    loader: 'babel-loader',
                                    options: {
                                        babelrc: false,
                                        configFile: path.resolve(__dirname, 'babel.config.js'),
                                        compact: true,
                                        cacheDirectory: true,
                                        sourceMaps: false
                                    }
                                }
                            }
                        ]
                    };
                    config.devtool = false;
                    config.output = {
                        path: path.resolve(__dirname, './build'),
                        filename: 'index.js'
                    };

                    delete config.optimization.splitChunks;
                    return config;
                }
            }
        ]
    ]
}