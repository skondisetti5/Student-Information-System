var gulp=require('gulp');
var concat = require('gulp-concat');
 const minify = require('gulp-minify');
gulp.task('scripts', function() {
  return gulp.src(['./scripts/view.js', './scripts/filter.js', './scripts/sort.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
    ;
});

 
gulp.task('compress', function() {
    setTimeout(function(){gulp.src(['./dist/all.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
                         },3000)
  
});
gulp.task('watch', ['scripts', 'compress']);