const gulp = require('gulp');
const browser_sync = require('browser-sync');

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


    gulp.watch('./**/*.html')
        .on('change', browser_sync.reload);

    gulp.watch('./dist/**/*')
        .on('change', browser_sync.reload);
}


/*  ------------------------------------
 *  Export of functions as gulp commands
 */

exports.watch = watch;
