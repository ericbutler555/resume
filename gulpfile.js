'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

// compile scss and run autoprefixer:

gulp.task('prepCSS', function(){
  del('all.min.css*');
  return gulp.src('css/scss/all.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 3 versions', '>1%'] }))
    .pipe(rename('all.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css/'));
});

// minify javascript:

gulp.task('prepJS', function(){
  del('all.min.js*');
  return gulp.src('js/partials/all.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('js/'));
});

gulp.task('watchFiles', function(){
  gulp.watch('css/scss/**/*.scss', ['prepCSS']);
  gulp.watch('js/partials/**/*.js', ['prepJS']);
});

gulp.task('default', ['watchFiles']);

gulp.task('build', ['prepCSS', 'prepJS']);
