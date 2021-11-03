"use strict";

// import gulp packages
const { src, dest, watch, parallel, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

// set filePaths
const srcPath = {
  sass: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
};

const destPath = {
  sass: "dist/css/",
  js: "dist/js/",
};

// set functions
function scssMinify() {
  return src(srcPath.sass)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("../sourcemaps/"))
    .pipe(dest(destPath.sass));
}

function jsMinify() {
  return src(srcPath.js)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("../sourcemaps/"))
    .pipe(dest(destPath.js));
}

// watch files
function watchTasks() {
  watch([srcPath.sass, srcPath.js], parallel(scssMinify, jsMinify));
}

// set default task
exports.default = series(parallel(scssMinify, jsMinify), watchTasks);

// minify images
// to use imagemin, comment out above code, uncomment code below, add "type" = module to package.json and run "gulp" in terminal.

// import gulp from "gulp";
// import imagemin from "gulp-imagemin";

// export default () => (
// 	gulp.src('src/images/**/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/images'))
// );
