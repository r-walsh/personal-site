var gulp = require('gulp'),
	stylus = require('gulp-stylus');

var watcher = gulp.watch('./main/stylus/*.styl', ['stylus']);
watcher.on('change', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('stylus', function() {
	gulp.src('./main/stylus/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['stylus']);