'use strict';

const gulp              = require('gulp');
const sass              = require('gulp-sass');
const sassGlob          = require('gulp-sass-glob');
const del               = require('del');

gulp.task('css', ['clean:css'], function() {
  return gulp.src('./assets/main.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('clean:css', function() {
    return del(['./dist/css']);
});

gulp.task('css:watch', function () {
    gulp.watch([
        'assets/**/*.scss',
        'components/handlebars/**/*.scss'
    ], ['css']);
});

gulp.task('watch', ['css:watch']);

gulp.task('default', ['css']);
