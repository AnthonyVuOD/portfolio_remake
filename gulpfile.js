var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//scss --> sass --> css
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


// live reloading
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});


// watch scss, html, and js files and live-reloading
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('app/index.html', browserSync.reload);
  gulp.watch('app/js/portfolio.js', browserSync.reload);
});
