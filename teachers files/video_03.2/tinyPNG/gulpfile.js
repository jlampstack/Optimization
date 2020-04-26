var gulp = require('gulp');
var tingpng = require('gulp-tinypng');

gulp.task('tinypng', function () {
    gulp.src('./src/images/*')
        .pipe(tingpng('2zx4kaT2LbShfgxlj_h8Xj_y4bZKJ7NN'))
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('default', ['tinypng']);
