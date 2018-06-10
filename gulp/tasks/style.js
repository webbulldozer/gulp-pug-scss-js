"use strict";

module.exports = function(){
  $.gulp.task('style', () => {
    return $.gulp.src([$.config.source + '/style/commons.{scss,sass}', $.config.source + '/style/media.{scss,sass}'])
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (err) {
          return {
            title: 'Style',
            message: err.message
          }
        })
      }))
      .pipe($.gp.debug({
        title: 'src'
      }))
      .pipe($.gp.if($.isDev, $.gp.sourcemaps.init()))
      .pipe($.gp.sass())
      .pipe($.gp.debug({
        title: 'sass/scss'
      }))
      .pipe($.gp.autoprefixer({
        browsers: ['last 5 versions']
      }))
      .pipe($.gp.filesize())
      .pipe($.gp.if(!$.isDev, $.gp.csso()))
      .pipe($.gp.debug({
        title: 'minify'
      }))
      .pipe($.gp.filesize())
      .pipe($.gp.if($.isDev, $.gp.sourcemaps.write()))
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.browserSync.stream())
  });
}