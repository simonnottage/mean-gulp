/**
 * Module dependencies.
 */
var gulp = require('gulp');
var server = require('./app/server.js');

/**
 * Configure the gulp tasks.
 */
gulp.task('concat-js', function () {
    console.log('running gulp...');
});

gulp.task('run-server', ['concat-js'], function () {
    server.run();
});

gulp.task('default', ['concat-js', 'run-server']);