"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //run as local devserver
var open = require('gulp-open'); // open the URL in a web browser
var browserify = require('browserify'); // bundles JS
var reactify = require('reactify'); // transforms react JSX to JS
var source = require('vinyl-source-stream'); // use conventional text streams with Gulp
var concat = require('gulp-concat'); // concatenates files
var lint = require('gulp-eslint'); // lint js and jsx files

var config = {
	port: 9005,
	devBaseUrl: 'http:localhost',
	paths: {
		html: "./src/*.html",
		js: './src/**/*.js',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		],
		dist: "./dist",
		mainjs: './src/main.js'
	}
};

//start development server

gulp.task('connect', function(){
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html')
		.pipe(open({url: config.devBaseUrl + ':' + config.port + '/'}));
});

//move the html files from src to dist
gulp.task('html', function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function(){
	browserify(config.paths.mainjs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function(){
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

//default task
gulp.task('default', ['html', 'js', 'css', 'lint','open', 'watch']);