var gulp = require("gulp"),
    bundler = require("aurelia-bundler"),
    bundles = require("../bundles.json");

var config = {
    force: true,
    packagePath: '',
    bundles: bundles.bundles
};

gulp.task('bundle-aurelia', function () {
    return bundler.bundle(config);
});

gulp.task('unbundle-aurelia', function () {
    return bundler.unbundle(config);
});