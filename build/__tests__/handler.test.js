"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("../build/src/handler");
describe('tests managing hello lambda handler', async () => {
    const event = { body: 'Test Event' };
    const context = {};
    let helloHandler;
    beforeAll(async () => {
        const x = (0, handler_1.hello)(event, context);
        helloHandler = await x;
    });
    it('hello should return statusCode:200', async () => {
        expect(helloHandler.statusCode).toEqual(200);
        expect(typeof helloHandler.body).toBe("string");
    });
});
//# sourceMappingURL=handler.test.js.map