var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var cssFiles = [
  './css/reset.css',
  './css/lanes.css',
  './css/style.css',
  '!./css/style.min.css'
]

var jsFiles = [
  './js/jquery.js',
  './js/imagesloaded.js',
  './js/isotope.js',
  './js/portfolio.js',
  '!./js/portfolio.min.js'
]

gulp.task('uglifyJS', function() {
  return gulp.src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('portfolio.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js/'))
});

gulp.task('jsWatch', ['uglifyJS'], browserSync.reload);

gulp.task('minifyCSS', function() {
  return gulp.src(cssFiles)
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['minifyCSS', 'uglifyJS'], function() {
    browserSync.init({
      server: { baseDir: './' }
    });

    gulp.watch(cssFiles, ['minifyCSS']);
    gulp.watch(jsFiles, ['jsWatch']);
});

gulp.task('default', ['serve']);