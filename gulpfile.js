/**
 * Module dependencies.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('./app/server.js');

/**
 * Configure the gulp tasks.
 */
var components = [
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'public/*.js',
    'public/modules/**/*.js'
];

gulp.task('concat-js', function () {
    return gulp.src(components)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('run-server', ['concat-js'], function () {
    server.run();
});

gulp.task('default', ['concat-js', 'run-server']);