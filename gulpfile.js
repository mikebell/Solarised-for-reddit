'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var del = require('del');
var sequence = require('run-sequence');

gulp.task('default', function() {

});

gulp.task('sass', function() {
    return gulp.src('./src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src'))
});

gulp.task('concat', function() {
  return gulp.src(['./src/naut_src.css', './src/solarized.css'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
  return del([
    'dist/styles.css',
    'src/solarized.css'
  ]);
});

gulp.task('build', function (callback) {
  sequence(
    'clean',
    'sass',
    'concat'
  )
});
