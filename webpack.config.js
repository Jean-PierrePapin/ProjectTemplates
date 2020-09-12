const path = require('path');

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundled.js'        
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                    {
                                        stage: 4,
                                        features: {
                                            'nesting-rules': true
                                        }, 
                                        browsers: 'last 2 versions'
                                    }
                                ],
                                
                            }
                        }
                    }
                ]
            }
        ]
    },
    
};