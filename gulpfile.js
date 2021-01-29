const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
//--local webserver---
const sync = require("browser-sync").create();

function generateCSS(cb) {
  src("WEBROOT/assets/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("WEBROOT/assets/style"))
    .pipe(sync.stream());
  cb();
}
function minifyCSS(cb) {
  src("WEBROOT/assets/style/main.css")
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("WEBROOT/assets/style-min"))
    .pipe(sync.stream());
  cb();
}

function watchFiles(cb) {
  watch("WEBROOT/**/*.scss", generateCSS);
}
//---web-server
function browserSync(cb) {
  sync.init({
    server: {
      baseDir: "WEBROOT",
    },
  });
  watch("WEBROOT/**/*.scss", generateCSS);
  watch("WEBROOT/assets/style/main.css", minifyCSS);
  watch("WEBROOT/**/*.html").on("change", sync.reload);
}
exports.css = generateCSS;
exports.minify = minifyCSS;
exports.watch = watchFiles;
exports.sync = browserSync;
