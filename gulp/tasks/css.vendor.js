"use strict";

module.exports = function () {
  $.gulp.task('css:vendor', () => {
    return $.gulp.src($.path.cssVendor)
      .pipe($.gp.debug({
        title: 'src'
      }))
      .pipe($.gp.filesize())
      .pipe($.gp.concat('vendor.css'))
      .pipe($.gp.csso())
      .pipe($.gp.debug({
        title: 'dist'
      }))
      .pipe($.gp.filesize())
      .pipe($.gulp.dest($.config.root + '/css'))
  });
};