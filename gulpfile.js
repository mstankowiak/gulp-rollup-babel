const gulp = require('gulp');
const $ = require('gulp-load-plugins')({lazy: true});

const rollupOptions = {};
const generateOptions = {format: 'iife'};

gulp.task('default', () => {
    return gulp.src('./src/index.js')
        .pipe($.betterRollup(rollupOptions, generateOptions))
        .pipe(gulp.dest('./'));
});
