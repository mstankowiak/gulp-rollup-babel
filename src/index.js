import * as classes from './does-not-work';

function value() {
    return true, classes.DoesNotWork.foo;
}

console.log(value());
