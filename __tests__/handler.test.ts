import { hello } from "../build/src/handler";
import { APIGatewayEvent, Context } from 'aws-lambda';

describe('tests managing hello lambda handler', () => {
    const event = { body: 'Test Event' } as APIGatewayEvent;
    const context = {} as Context;
    let helloHandler:any;

    beforeAll(async () => {
        const x:Promise<any> = hello(event, context);
        helloHandler = await x;
    })

    it('hello should return statusCode:200', async () => {
        expect(helloHandler.statusCode).toEqual(200);
        expect(typeof helloHandler.body).toBe("string");
    });

});