var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
	css: ['public/sass/**/*.scss']
}

gulp.task('sass', function () {
	gulp.src('public/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function(){
	gulp.watch(paths.css, ['sass']);
});

gulp.task('default',['sass', 'watch']);
