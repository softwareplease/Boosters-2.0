var gulp = require("gulp"),
    bundler = require("aurelia-bundler"),
    bundles = require("../bundles.json");

var config = {
    force: true,
    baseUrl: '.',
    configPath: './config.js',
    bundles: bundles.bundles
};

gulp.task('bundle-aurelia', ['unbundle-aurelia'], function () {
    return bundler.bundle(config);
});

gulp.task('unbundle-aurelia', function () {
    return bundler.unbundle(config);
});