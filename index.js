(function () {
'use strict';

class Works {
    static get foo() {
        return 'bar';
    }
}

function value() {
    return true, Works.foo;
}

console.log(value());

}());
