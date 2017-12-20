export class Foo {
    get bar() {
        const key = 'key';
        return {
            [key]: 'value'
        };
    }
}
