var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat');

var env, 
	jsSources, 
	sassSources,
	outputDir,
	sassStyle;

env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	outputDir = 'builds/development/';
	sassStyle = 'expanded';
} else {
	outputDir = 'builds/production/';
	sassStyle = 'compressed';
}

jsSources = ['components/script/*.js'];
sassSources = ['components/sass/style.scss'];

gulp.task('js', function (){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest( outputDir + 'js'));
});

gulp.task('compass', function (){
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: outputDir + 'images',
			style: sassStyle
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest( outputDir + 'css'));
});

gulp.task('watch', function (){
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
});

gulp.task('default', ['js', 'compass', 'watch']);

