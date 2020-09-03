const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");



function styles() {

    return(
        gulp.src("css/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("css"))
    );

}

function watch(){
    gulp.watch("css/*.scss", styles);
}

exports.styles = styles;
exports.watch = watch;