var project = require("../project.json"),
    root = project.webroot,
    distFolder = '/dist',
    styleFolder = '/style',
    libFolder = '/lib',
    contentFolder = '/content',
    bootstrapFolder = '/github/twbs/bootstrap-sass@3.3.6/assets';

module.exports = {
    appRoot: root,
    style: root + styleFolder,
    dist: root + distFolder,
    lib: root + libFolder,
    sass: root + styleFolder + '/*.scss',
    css: root + styleFolder + '/*.css',
    distCss: root + distFolder + '/css',
    distJs: root + distFolder + '/js',
    distAurelia: root + distFolder + '/aurelia',
    distImages: root + distFolder + '/images',
    images: [
        root + contentFolder + '/images/*' 
    ],
    js: [
        root + libFolder + '/github/components/jquery@2.1.4/jquery.js',
        root + libFolder + bootstrapFolder + '/javascripts/bootstrap.js'
    ],
    bootstrap: {
        icons: root + libFolder + bootstrapFolder + '/fonts/bootstrap/*'
    }
}