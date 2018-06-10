"use strict";

module.exports = function(){
  $.gulp.task('copy:image', () => {
    return $.gulp.src($.config.source + '/images/**/*.{jpg,png,gif}')
      .pipe($.gp.newer($.config.root + '/images'))
      .pipe($.gp.debug({
        title: 'src'
      }))
      // .pipe($.gp.tinypng('YOUR_API_KEY'))
      .pipe($.gp.imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5
      }))
      .pipe($.gp.debug({
        title: 'minify'
      }))
      .pipe($.gp.filesize())
      .pipe($.gulp.dest($.config.root + '/images'));
  });
};