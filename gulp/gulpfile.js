// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function () {
  // ★ style.scssファイルを監視
  return gulp.watch("../src/**/*.scss", function () {
    // style.scssファイルを取得
    return (
      gulp
        .src("../src/scss/**/*.scss")
        // .src("../src/**/*.css")
        .pipe(
          sass({
            outputStyle: "compressed",
          }).on("error", sass.logError)
        )
        .pipe(gulp.dest("../src/css/"))
    );
  });
});

// 参考
// https://youki-takemoto.net/archives/106
