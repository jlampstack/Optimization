/**
 * Step 1
 * 
 * Tells gulp where our CSS file is and processing it to a dist directory.
 */
var gulp = require('gulp');

gulp.task('process-css', function() {
  return gulp.src('./styles/*.css')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['process-css']);


// Step 2
// var gulp = require('gulp');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');

// gulp.task('process-css', function() {
//   var plugins = [
//     autoprefixer({
//       browsers: ['last 3 version']
//     })
//   ];
//   return gulp.src('./styles/*.css')
//     .pipe(postcss(plugins))
//     .pipe(gulp.dest('./dist'));
// });

// gulp.task('default', ['process-css']);

// Step 3
// var gulp = require('gulp');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var postcssZindex = require('postcss-zindex');

// gulp.task('process-css', function() {
//   var plugins = [
//     autoprefixer({
//       browsers: ['last 3 version']
//     }),
//     postcssZindex({startIndex: 1})
//   ];
//   return gulp.src('./styles/*.css')
//     .pipe(postcss(plugins))
//     .pipe(gulp.dest('./dist'));
// });

// gulp.task('default', ['process-css']);

// Step 4
// var gulp = require('gulp');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var postcssZindex = require('postcss-zindex');
// var concat = require('gulp-concat');
// var cleanCSS = require('gulp-clean-css');

// gulp.task('process-css', function() {
//   var plugins = [
//     autoprefixer({
//       browsers: ['last 3 version']
//     }),
//     postcssZindex({startIndex: 1})
//   ];
//   return gulp.src('./styles/*.css')
//     .pipe(postcss(plugins))
//     .pipe(cleanCSS())
//     .pipe(concat('prod.min.css'))
//     .pipe(gulp.dest('./dist'));
// });

// gulp.task('default', ['process-css']);

// Step 5
// var gulp = require('gulp');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var postcssZindex = require('postcss-zindex');
// var concat = require('gulp-concat');
// var cleanCSS = require('gulp-clean-css');

// gulp.task('process-css', function() {
//   var plugins = [
//     autoprefixer({
//       browsers: ['last 3 version']
//     }),
//     postcssZindex({startIndex: 1})
//   ];
//   return gulp.src('./styles/*.css')
//     .pipe(postcss(plugins))
//     .pipe(cleanCSS({
//       level: {
//         1: {},
//         2: {}
//       }
//     }))
//     .pipe(concat('prod.min.css'))
//     .pipe(gulp.dest('./dist'));
// });

// gulp.task('default', ['process-css']);

// Step 6
// var gulp = require('gulp');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var postcssZindex = require('postcss-zindex');
// var concat = require('gulp-concat');
// var cleanCSS = require('gulp-clean-css');
// var inlinesource = require('gulp-inline-source');
// var wait = require('gulp-wait');

// gulp.task('process-css', function() {
//   var plugins = [
//     autoprefixer({
//       browsers: ['last 3 version']
//     }),
//     postcssZindex({startIndex: 1})
//   ];
//   return gulp.src('./styles/*.css')
//     .pipe(postcss(plugins))
//     .pipe(cleanCSS({
//       level: {
//         1: {},
//         2: {}
//       }
//     }))
//     .pipe(concat('prod.min.css'))
//     .pipe(gulp.dest('./dist'));
// });

// gulp.task('inlinesource', function () {
//     return gulp.src('*.html')
//         .pipe(wait(100))
//         .pipe(inlinesource())
//         .pipe(gulp.dest('./dist'));
// });

// gulp.task('default', ['process-css', 'inlinesource']);
