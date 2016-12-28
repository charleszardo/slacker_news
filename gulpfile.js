var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('serve', () => {
  browserSync.init({
    server: './'
  })
  gulp.watch('index.html').on('change', reload)
  gulp.watch('js/app.js').on('change', reload)
})
