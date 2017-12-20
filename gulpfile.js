const gulp = require('gulp');
const $ = require('gulp-load-plugins')({lazy: true});
const rollupBabel = require('rollup-plugin-babel');

const babelOptions = {
    presets: [['env', {modules: false}]],
    plugins: ['external-helpers']
};
const rollupOptions = {
    plugins: [rollupBabel(babelOptions)]
};
const generateOptions = {format: 'iife'};

gulp.task('default', () => {
    return gulp.src('./src/index.js')
        .pipe($.betterRollup(rollupOptions, generateOptions))
        .pipe(gulp.dest('./'));
});
