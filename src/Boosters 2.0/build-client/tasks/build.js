var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify"),
    minifyCss = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    bundler = require("aurelia-bundler"),
    runSequence = require("run-sequence"),
    flatten = require('gulp-flatten'),
    del = require('del'),
    clean = require('gulp-clean'),
    paths = require("../paths.js");

gulp.task('clean-css', function () {
    del(paths.style + '/*.css');
});

gulp.task('compile-sass', function () {
    return gulp.src(paths.sass)
               .pipe(sass())
               .pipe(gulp.dest(paths.style));
});

gulp.task('watch-sass', function () {
    gulp.watch(paths.sass, ['compile-sass']);
});

gulp.task('build-css', ['compile-sass'], function () {
    return gulp.src(paths.css)
               .pipe(concat('site.css'))
               .pipe(gulp.dest(paths.distCss))
               .pipe(rename('site.min.css'))
               .pipe(minifyCss())
               .pipe(gulp.dest(paths.distCss));
});
//unused
gulp.task('build-js', function () {
    return gulp.src(paths.js)
           .pipe(concat('site.js'))
           .pipe(gulp.dest(paths.distJs))
           .pipe(rename('site.min.js'))
           .pipe(uglify())
           .pipe(gulp.dest(paths.distJs));
});

gulp.task('clean-icons', function () {
    del(paths.distCss + '/!(*.css)');
});

gulp.task('copy-icons', ['clean-icons'], function () {
    gulp.src(paths.icons)
        .pipe(gulp.dest(paths.distCss));
});

gulp.task('clean-images', function () {
    del(paths.distImages + '/*');
});

gulp.task('copy-images', ['clean-images'],  function () {
    gulp.src(paths.images)
        .pipe(gulp.dest(paths.distImages))
});

gulp.task('clean-files', function () {
    del(paths.distFiles + '/*');
});

gulp.task('copy-files', ['clean-files'], function () {
    gulp.src(paths.files)
        .pipe(flatten())
        .pipe(gulp.dest(paths.distFiles));
});

gulp.task('clean', function () {
    del([paths.distAurelia + '/*.js']);
    return gulp.src([paths.distJs, paths.distCss, paths.distImages, paths.distFiles])
        .pipe(clean({ force: true }));
});

gulp.task('build-app', function () {
    runSequence('clean', ['bundle-aurelia', 'build-css', 'copy-icons', 'copy-images', 'copy-files']);
});

gulp.task('build', function () {
    return runSequence('clean', ['unbundle-aurelia', 'build-css', 'copy-icons', 'copy-images', 'copy-files']);
});

gulp.task('default', ['watch-sass']);