const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");
const sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("sass");

gulp.task("html:minify", () =>
  gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("www"))
);
gulp.task("scss", () =>
  gulp
    .src("src/public/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("www/public/css"))
);
gulp.task("js", () => gulp.src("src/**/*.js").pipe(gulp.dest("www")));
gulp.task("php", () => gulp.src("src/**/*.php").pipe(gulp.dest("www")));
gulp.task("assets", () =>
  gulp.src("src/**/*.{gif,ico,jpg,jpeg,png,ttf,woff2}").pipe(gulp.dest("www"))
);
gulp.task("root", () => gulp.src("src/root/**/{*,.*}").pipe(gulp.dest("www")));

gulp.task("watch", () => {
  gulp.watch("src/**/*.html", gulp.parallel("html:minify"));
  gulp.watch("src/**/*.js", gulp.parallel("js"));
  gulp.watch("src/public/scss/*.scss", gulp.parallel("scss"));
  gulp.watch("src/**/*.php", gulp.parallel("php"));
  gulp.watch("src/root/**/{*,.*}", gulp.parallel("root"));
  gulp.watch(
    "src/**/*.{gif,ico,jpg,jpeg,png,ttf,woff2}",
    gulp.parallel("assets")
  );
});

gulp.task(
  "default",
  gulp.parallel("root", "assets", "php", "html:minify", "scss", "js")
);
