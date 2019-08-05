"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("pages/scss/styles.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("pages/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "pages/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("pages/scss/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("pages/html/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));
