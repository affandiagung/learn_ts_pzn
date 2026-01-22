import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should say hello Affandi', function () {
        expect(sayHello("Affandi")).toBe('Hello Affandi');
    });
});
