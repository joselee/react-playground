'use strict';
let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let connect = require('gulp-connect');

gulp.task('copy-index', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('build-jsx', function () {
    return browserify({entries: './src/scripts/index.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build-jsx', 'copy-index'], function () {
    gulp.watch('./src/**/*.jsx', ['build-jsx']);
    gulp.watch('./src/index.html', ['copy-index']);
});

gulp.task('default', ['watch'], function() {
    connect.server({root: 'dist', port: 8080});
});