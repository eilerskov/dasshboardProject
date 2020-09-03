const gulp = require("gulp");
const sass = require("gulp-sass");


function styles() {

    return(
        gulp.src("")
            .pipe(sass())
            .pipe(gulp.dest("css"))
    );

}

function watch(){
    gulp.watch("css/*.scss", styles);
}

exports.styles = styles;
exports.watch = watch;