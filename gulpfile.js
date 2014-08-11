/**
 * gulpfile.js
 */

var gulp        = require("gulp"),
    sass        = require("gulp-sass")
    browserSync = require("browser-sync")
    cp          = require('child_process'),
    prefix      = require("gulp-autoprefixer"),
    plumber     = require("gulp-plumber"),
    header      = require("gulp-header"),
    imagemin    = require("gulp-imagemin"),
    cssmin      = require("gulp-cssmin"),
    concat      = require("gulp-concat"),
    uglify      = require('gulp-uglify'),
    clean       = require('gulp-clean'),
    pkg         = require("./package.json");


var paths = {
  src: {
    sass: './assets/styles/',
    sassAll: './assets/styles/**',
    js: './assets/js/views/**',
    images: './assets/images/*',
    html: './'
  },
  dist: {
    css: './',
    js: './assets/js/min/',
    images: './assets/images/',
    html: './'
  }
};

var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');



/**
 *  SASS TASK
 */
gulp.task('sass', function() {
  gulp.src(paths.src.sass + 'style.scss')
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('./_site/'))
    .pipe(header(banner, {
      package: pkg
    }))
    .pipe(cssmin())
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(paths.dist.css));
});


/**
 * JS TASK
 */
gulp.task('js', function() {
  gulp.src([
    paths.src.js
  ])
  .pipe(plumber())
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(header(banner, {
    package: pkg
  }))
  .pipe(gulp.dest(paths.dist.js))
  .pipe(browserSync.reload({stream:true}));
});

// Cleanjs
gulp.task('cleanjs', function() {
  return gulp.src('./assets/js/views/*.js', {
      force: true
    })
    .pipe(clean());
});


/**
 *  IMAGEMIN
 */
gulp.task('imagemin', function() {
  return gulp.src(paths.src.images)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }]
    }))
    .pipe(gulp.dest(paths.dist.images));
});





/**
 * BUILD THE JEKYLL SITE
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify();
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});


/**
 * REBUILD JEKYLL & DO PAGE RELOAD
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});


/**
 * WAIT FOR jekyll-build, THEN LAUNCH THE SERVER
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(paths.src.sassAll, ['sass']);
    gulp.watch(paths.src.js, ['js'], ['cleanjs', 'js']);
    gulp.watch(['_config.yml', './**/*.html', 'index.html', '_layouts/*.html', '_posts/*', '_includes/*', 'assets/images/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
