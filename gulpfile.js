'use strict';
let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let browserSync = require('browser-sync').create();

gulp.task('copy-index', () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-css', () => {
    return gulp.src('./src/styles/styles.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('build-jsx', () => {
    return browserify({
            entries: './src/scripts/index.jsx',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build-jsx', 'copy-index', 'copy-css'], () => {
    gulp.watch('./src/**/*.jsx', ['build-jsx']);
    gulp.watch('./src/**/*.css', ['copy-css']);
    gulp.watch('./src/index.html', ['copy-index']);
});

gulp.task('default', ['watch'], () => {
    browserSync.init({
        server: { baseDir: 'dist', directory: false },
        startPath: '/'
    });
    gulp.watch('dist/**/*').on('change', browserSync.reload);
});