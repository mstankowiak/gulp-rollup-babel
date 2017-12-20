(function () {
'use strict';

class DoesNotWork {
    static get foo() {
        return 'bar';
    }
}

function value() {
    return classes.DoesNotWork.foo;
}

console.log(value());

}());
