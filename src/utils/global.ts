
let Global = {
    MODE_PRODUCTION: true,
    JS_COMPRESS_OPTIONS: {
        preserveComments: 'license',
        compress: {
            drop_console: true
        }
    },
    JS_BABEL_CONFIG: {
        presets: ['@babel/env']
    },
    JS_BABELIFLY_CONFIG: {
        presets: ['@babel/env']
    },
    SASS_CONFIG: {
        outputStyle: "compressed"
    }
}

module.exports = Global;