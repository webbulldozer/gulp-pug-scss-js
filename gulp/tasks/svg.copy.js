"use strict";

module.exports = function(){
  $.gulp.task('svg:copy', () => {
    return $.gulp.src($.config.source + '/images/icon/*.svg')
      .pipe($.gp.newer($.config.root + '/images'))
      .pipe($.gulp.dest($.config.root + '/images/icon/'))
  });
};