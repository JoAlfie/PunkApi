const { src, dest, task, watch, parallel } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

task('doLess', function() {
	watch('**/**.less', function compileLess(cb) {
		return src('**/styles.less')
			.pipe(less())
			.pipe(
				autoprefixer({
					cascade: false
				})
			)
			.pipe(cssnano())
			.pipe(rename('styles.min.css'))
			.pipe(dest('./dist/stylesheets'));
		cb();
	});
});

task('vendorScripts', function() {
	watch('./src/scripts/vendor/**.js', function compileVendorScripts(cb) {
		return src(['./src/scripts/vendor/*.js'])
			.pipe(concat('vendor-scripts.js'))
			.pipe(dest('./public/scripts'))
			.pipe(rename('vendor-scripts.min.js'))
			.pipe(uglify())
			.pipe(dest('./dist/scripts'));
		cb();
	});
});
task('appScripts', function() {
	watch('./src/scripts/main/*.js', function compileAppScripts(cb) {
		return src('./src/scripts/main/*.js')
			.pipe(babel({ presets: ['@babel/preset-env'] }))
			.pipe(
				rename(function(path) {
					path.extname = '.min.js';
				})
			)
			.pipe(uglify())
			.pipe(dest('./dist/scripts'))
			.pipe(concat('main.js'))
			.pipe(dest('./dist/scripts'));
		cb();
	});
});

task('doScripts', parallel('appScripts', 'vendorScripts'));

task('dev', parallel('doLess', 'appScripts', 'vendorScripts'));
