var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
	css: ['sass/**/*.scss']
}

gulp.task('sass', function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
	gulp.watch(paths.css, ['sass']);
});

gulp.task('default',['sass', 'watch']);
