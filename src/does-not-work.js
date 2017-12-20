export class DoesNotWork {
    static get foo() {
        const key1 = 'key1';
        const key2 = 'key2';
        return {
            [key1]: 'value1',
            [key2]: 'value2'
        };
    }
}
