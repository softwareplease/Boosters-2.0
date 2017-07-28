var root = 'wwwroot',
    distFolder = '/dist',
    styleFolder = '/style',
    libFolder = '/lib',
    contentFolder = '/content',
    bootstrapFolder = '/github/twbs/bootstrap-sass@3.3.6/assets',
    fontAwesomeFolder = '/npm/font-awesome@4.5.0';

module.exports = {
    appRoot: root,
    style: root + styleFolder,
    dist: root + distFolder,
    lib: root + libFolder,
    sass: root + styleFolder + '/*.scss',
    css: root + styleFolder + '/*.css',
    files: root + contentFolder + '/files/**/*',
    distCss: root + distFolder + '/css',
    distJs: root + distFolder + '/js',
    distAurelia: root + distFolder + '/aurelia',
    distImages: root + distFolder + '/images',
    distFiles: root + distFolder + '/files',
    images: [
        root + contentFolder + '/images/*' 
    ],
    js: [
        root + libFolder + bootstrapFolder + '/javascripts/bootstrap.js'
    ],
    icons: [
        root + libFolder + bootstrapFolder + '/fonts/bootstrap/*',
        root + libFolder + fontAwesomeFolder + '/fonts/*'
    ]
}
//root + libFolder + '/github/components/jquery@2.2.0/jquery.js',