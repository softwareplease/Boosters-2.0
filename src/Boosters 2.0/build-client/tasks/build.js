var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify"),
    minifyCss = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    bundler = require("aurelia-bundler"),
    runSequence = require("run-sequence"),
    del = require('del'),
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

gulp.task('build-js', function () {
    return gulp.src(paths.js)
           .pipe(concat('site.js'))
           .pipe(gulp.dest(paths.distJs))
           .pipe(rename('site.min.js'))
           .pipe(uglify())
           .pipe(gulp.dest(paths.distJs));
});

gulp.task('clean-glyphicons', function () {
    del(paths.distCss + '/!(*.css)');
});

gulp.task('copy-glyphicons', function () {
    gulp.src(paths.bootstrap.icons)
        .pipe(gulp.dest(paths.distCss));
});

gulp.task('clean-images', function () {
    del(paths.distImages + '/*');
});

gulp.task('copy-images', function () {
    gulp.src(paths.images)
        .pipe(gulp.dest(paths.distImages))
});

gulp.task('clean', function () {
    gulp.src([paths.distJs, paths.distCss, paths.distImages])
        .pipe(clean({ force: true }));
    del([paths.distAurelia + '/*.js']);
});

gulp.task('build-app', function () {
    run('clean', ['bundle-aurelia', 'build-css', 'build-js', 'copy-glyphicons', 'copy-images']);
});

gulp.task('build', function () {
    return runSequence(['unbundle-aurelia', 'build-css', 'build-js', 'copy-glyphicons', 'copy-images']);
});

gulp.task('default', ['watch-sass']);