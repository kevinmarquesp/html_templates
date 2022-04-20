const gulp = require('gulp');
const browser_sync = require('browser-sync');
const gulp_sass = require('gulp-sass')(require('sass'));

const sass_config = {
    include_files: './src/scss/**/*.scss',
    out_dir: './dist/css/'
}


/*  ---------------------------
 *  Compile the SCSS files once
 *      More info on: https://www.npmjs.com/package/gulp-sass
 */

function sass() {
    return gulp.src(sass_config.include_files)
        .pipe(gulp_sass())
        .pipe(gulp.dest(sass_config.out_dir))
        .pipe(browser_sync.stream());
}


/*  -----------------------------------------
 *  Watch all files and init the local server
 *      More info on: https://browsersync.io/docs/gulp
 */

function watch() {
    browser_sync.init({
        port: 3000,
        server: { baseDir: './' },
        files: [
            './dist/**/*',
            './assets/**/*'
        ]
    });


    gulp.watch(sass_config.include_files, sass);

    gulp.watch('./**/*.html')
        .on('change', browser_sync.reload);

    gulp.watch('./dist/**/*')
        .on('change', browser_sync.reload);
}


/*  ------------------------------------
 *  Export of functions as gulp commands
 */

exports.watch = watch;  // $ gulp watch
exports.sass = sass;    // $ gulp sass
