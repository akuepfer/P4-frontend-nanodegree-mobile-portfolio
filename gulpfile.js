'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var print = require('gulp-print');
var request = require('request');
var source = require('vinyl-source-stream')
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var critical = require('critical').stream;
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var replace = require('gulp-replace-task');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var del = require('del');

var psi = require('psi');
var site = 'http://188.60.34.5:8778/index.html';
var key = '';


gulp.task('clean:dist', function (cb) {
    del([
        'dist/css/*.css',
        'dist/img/*',
        'dist/js/*',
        'dist/*.html',
        'dist/*.gzip',
    ], cb);
});

//
// Donload Google font file
// To support embeding by 'critical' plugin, file must be local stored
//
gulp.task('download:font', function () {
    return request('http://fonts.googleapis.com/css?family=Open+Sans:400,700')
        .pipe(source('font_googleapis_com_open_sans_400_700.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('css'))
});

//
// Download analytics.js file.
// For 100% page insight resorce must be served with at least one week cache life time
//
gulp.task('download:analytics', function () {
    return request('http://www.google-analytics.com/analytics.js')
        .pipe(source('analytics.js'))
        .pipe(gulp.dest('js'))
});

//
// Optimize Images
//
gulp.task('minify:image', function() {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));

});

//
// Minify JavaScript
//
gulp.task('minify:js', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//
// Minify CSS
//
gulp.task('minify:css', function () {
    return gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css'));
});

//
// Process HTML files
// - replace remote files references with references to local downloaded
// - minify HTML
// - generate & inline critical-path CSS
//
gulp.task('critical', function () {

    return gulp.src('*.html')
         // 'http://fonts.googleapis.com/css?family=Open+Sans:400,700', 'css/font_googleapis_com_open_sans_400_700.css'
        .pipe(replace({patterns: [
            {
                match: 'http://fonts.googleapis.com/css?family=Open+Sans:400,700',
                replacement: 'css/font_googleapis_com_open_sans_400_700.css'
            },
            {
                match: 'src="http://www.google-analytics.com/analytics.js"',
                replacement: 'async src="js/analytics.js"'
            },
            {
                match: 'src="//www.google-analytics.com/analytics.js"',
                replacement: 'async src="js/analytics.js"'
            },
            {
                match: '<script src="js/perfmatters.js">',
                replacement: '<script async src="js/perfmatters.js">'
            },
            {
                match: '<link href="css/print.css" rel="stylesheet">',
                replacement: '<link href="css/print.css" rel="stylesheet" media="print">'
            },
            {
                match: 'src="http://cameronwp.github.io/udportfolio/img/2048.png"',
                replacement: 'src="img/2048.png"'
            }
        ],
            usePrefix: false
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(critical({base: 'dist', css: ['dist/css/style.css', 'dist/css/print.css', 'css/font_googleapis_com_open_sans_400_700.css']}))
        .pipe(print())
        .pipe(gulp.dest('dist'))
});

//
// Remove files downloaded, wihich where used by critical to inline and
// are minfied and writen to dest
//
gulp.task('clean:download', function (cb) {
    del([
        'css/font_googleapis_com_open_sans_400_700.css',
        'js/analytics.js'
    ], cb);
});



gulp.task('psi:mobile', function () {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});

gulp.task('psi:desktop', function () {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});





//
// build - single task to execute all of the tasks above at once
//
gulp.task('build', function(done) {
    runSequence(
        'clean:dist',
        ['download:font', 'download:analytics'],
        ['minify:image', 'minify:js', 'minify:css'],
        'critical',
        'clean:download',
        done);
});

//
// default task, executed when gulp is called without a task argument.
//
gulp.task('default', ['build']);




