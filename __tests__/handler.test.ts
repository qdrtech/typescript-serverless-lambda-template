import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { hello } from '../src/handler';

describe('tests managing hello lambda handler', () => {
    const event = { body: 'Test Event' } as APIGatewayProxyEvent;
    const context = {} as Context;
    const callback:any = {};
    let helloHandler:any;

    beforeAll(async () => {
        const x = hello(event, context, callback);
        helloHandler = await x;
    })

    it('hello should return statusCode:200', async () => {
        expect(helloHandler.statusCode).toEqual(200);
        expect(typeof helloHandler.body).toBe("string");
    });

});