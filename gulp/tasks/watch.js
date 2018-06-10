"use strict";

module.exports = function(){
  $.gulp.task('watch', () => {
    $.gulp.watch($.config.source + '/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch($.config.source + '/style/**/*.{scss, sass}', $.gulp.series('style'));
    $.gulp.watch($.config.source + '/script/*.js', $.gulp.series('js:process'));
    $.gulp.watch($.config.source + '/fonts/**/*.*', $.gulp.series('copy:fonts'));
    $.gulp.watch($.config.source + '/images/**/*.{jpg,png,gif}', $.gulp.series('copy:image'));
    $.gulp.watch($.config.source + '/images/icon/*.svg', $.gulp.series('svg:copy'));
  });
};
