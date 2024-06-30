import { APIGatewayProxyEvent, Callback, Context } from 'aws-lambda';
import hello from '../src/handler';

describe('tests managing hello lambda handler', () => {
    const event = { body: 'Test Event' } as APIGatewayProxyEvent;
    const context = {} as Context;
    const callback = {} as Callback<{statusCode:number, body:string}>;
    let helloHandler:{statusCode:number, body:string};

    beforeAll(async () => {
        const x = hello(event, context, callback);
        helloHandler = await x as {statusCode:number, body:string};
    });

    it("hello should return statusCode:200", () => {
        expect(helloHandler.statusCode).toBe(200);
    });

    it("hello should reutrn response of type string", () => {
        expect(typeof helloHandler.body).toBe("string");
    });
});