const path = require('path');

/* const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]; */

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
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    } 
    
};