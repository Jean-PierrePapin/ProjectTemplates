const path = require('path');

module.exports = {
    entry: './app/assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundled.js'        
    },
    mode: 'development',
    watch: true
}