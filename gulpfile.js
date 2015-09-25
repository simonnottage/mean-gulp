/**
 * Module dependencies.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var server = require('./app/server.js');

/**
 * Configure the gulp tasks.
 */
var angular_components = [
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js'
];

var bootstrap_components = [
    'bower_components/bootstrap/dist/css/bootstrap.css'
];

var module_components = [
    'public/*.js',
    'public/modules/**/*.js'
];

gulp.task('concat-js', function () {
    return gulp.src(angular_components)
        .pipe(concat('angular-all.js'))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('concat-css', function () {
   return gulp.src(bootstrap_components)
       .pipe(concat('bootstrap-all.css'))
       .pipe(gulp.dest('public/dist'));
});

gulp.task('inject-js', function () {
    return gulp.src('./public/index.html')
        .pipe(inject(gulp.src(module_components, {read: false}), {relative: true}))
        .pipe(gulp.dest('./public'));
});

gulp.task('run-server', ['concat-css', 'concat-js', 'inject-js'], function () {
    server.run();
});

gulp.task('default', ['run-server']);