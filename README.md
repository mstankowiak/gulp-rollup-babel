# gulp-rollup-babel
This setup checks the integration between Gulp as task runner, Rollup as module bundler and Babel as transpiler

If you remove rollup (npm uninstall --save-dev rollup), rollup 0.50.0, which is included by gulp-better-rollup will be used. Apparently rollup included by gulp-better-rollup does not work in this case.
