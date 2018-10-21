
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('css', function(){
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        // .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function(){
    return gulp.src('./scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', ['css', 'js'], function(){
    gulp.watch('./less/*.less', ['css']);
    gulp.watch('./scripts/*.js', ['js']);
});

gulp.task('default', [ 'css', 'js', 'watch' ]);
