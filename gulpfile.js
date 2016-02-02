var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({pattern:['*']});

gulp.task('clean', function(cb) {
  plugins.del('./site.min.css');
  plugins.del('./app.min.js');
});

gulp.task('css', function(cb) {
  return gulp.src('./site.less')
    .pipe(plugins.less())
    .pipe(plugins.cssnano())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('./'))
    .pipe(plugins.livereload());
});

gulp.task('js', function(cb) {
  return gulp.src(['./app.js','./controllers/*.js'])
    .pipe(plugins.uglify())
    .pipe(plugins.concat('app.min.js'))
    .pipe(gulp.dest('./'))
    .pipe(plugins.livereload());
});

//plugins.livereload.listen();

gulp.task('watch', function(cb){
  plugins.livereload.listen();
  gulp.watch('*.less', ['css']);
});

gulp.task('default', ['clean','css','js','watch']);
