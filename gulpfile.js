'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

const { parallel } = require('gulp');

// compile scss and run autoprefixer:

function prepCSS() {
  del('all.min.css*');
  return gulp.src('css/scss/all.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('all.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css/'));
}

// minify javascript:

function prepJS() {
  del('all.min.js*');
  return gulp.src('js/partials/all.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('js/'));
}

// watch for changes:

function watchFiles() {
  gulp.watch('css/scss/**/*.scss', ['prepCSS']);
  gulp.watch('js/partials/**/*.js', ['prepJS']);
}

// cli calls:

exports.default = watchFiles;
exports.build = parallel(prepCSS, prepJS);
