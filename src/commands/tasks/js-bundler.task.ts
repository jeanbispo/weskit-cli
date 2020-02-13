const yargs = require('yargs').argv;
// const gulp = require('gulp');
// const gulpif = require('gulp-if');
// const babel = require('gulp-babel');
// const concat = require('gulp-concat');
// const gutil = require('gulp-util');
// const uglify = require('uglify-js');
// const bsync = require('browser-sync').create();
// const sourcemaps = require('gulp-sourcemaps');
// const fs = require('fs');
// var babelify = require('babelify');
// var browserify = require("browserify");
// const functions = require('./../../utils/functions');

// const globalVariable = require('./../../utils/global');
// var source = require('vinyl-source-stream');




import fs from 'fs'
import browserify from 'browserify'
import {Functions as functions} from './../../utils/functions'
const babelify = require('babelify');


export let jsBundler: Function = async function () {


    let paths = require('./../../utils/paths');

    functions.listBundle("js", yargs.bundle).forEach( (bundle:any) => {

        let bundleItem = paths.js[bundle];
        // console.log(bundleItem);
        // return 
        let proc = browserify({ debug: true })
        proc.transform(babelify, {sourceMaps: !bundleItem.skipSourceMapGeneration})
            .require(bundleItem.bundle, { entry: true })
            .bundle()
            .on("error", function (err: any) { console.log("Error: " + err.message); })
            .pipe(fs.createWriteStream(bundleItem.buildTo + "/bundle.js"));
        // uglify.minify(globalVariable.JS_COMPRESS_OPTIONS)


        // browserify(bundleItem.bundle)
        //     .transform("babelify", globalVariable.JS_BABELIFLY_CONFIG)
        //     .bundle()
        //     .pipe(source(`${bundle}.js`))
        //     .pipe(gulp.dest(bundleItem.buildTo));
            // .pipe(gulpif(!bundleItem.skipSourceMapGeneration, sourcemaps.init()))
            // .pipe(concat(`${bundle}.js`))
            // .pipe(gulpif(globalVariable.MODE_PRODUCTION, uglify(globalVariable.JS_COMPRESS_OPTIONS)))
            // .pipe(gulpif(!bundleItem.skipSourceMapGeneration, sourcemaps.write('.')))
            // .pipe(bsync.stream({match: '**/*.js'}))
            // .pipe(gulp.dest(`${bundleItem.buildTo}`))
            // .on('error', (err: any) => gutil.log(gutil.colors.red('[Error]'), err.toString()))
            // .on('end', (_:any) => gutil.log(gutil.colors.green(`\t[JS] Bundle ${bundleItem.buildTo}/${bundle}.js has been generated`)));

        // gulp.src(bundleItem.bundle)
        //     .pipe(gulpif(!bundleItem.skipSourceMapGeneration, sourcemaps.init()))
        //     .pipe(concat(`${bundle}.js`))
        //     .transform("babelify", globalVariable.JS_BABELIFLY_CONFIG)
        //     .bundle()
        //     // .pipe(babel(globalVariable.JS_BABEL_CONFIG))
        //     .pipe(gulpif(globalVariable.MODE_PRODUCTION, uglify(globalVariable.JS_COMPRESS_OPTIONS)))
        //     .pipe(gulpif(!bundleItem.skipSourceMapGeneration, sourcemaps.write('.')))
        //     .pipe(bsync.stream({match: '**/*.js'}))
        //     .pipe(gulp.dest(`${bundleItem.buildTo}`))
        //     .on('error', (err: any) => gutil.log(gutil.colors.red('[Error]'), err.toString()))
        //     .on('end', (_:any) => gutil.log(gutil.colors.green(`\t[JS] Bundle ${bundleItem.buildTo}/${bundle}.js has been generated`)));
	});

	return true;
}