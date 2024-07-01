import { APIGatewayProxyHandler } from "aws-lambda";

export const hello: APIGatewayProxyHandler = async (event, context): Promise<{statusCode:number, body:string}> => {
    return {
        'statusCode': 200,
        "body": JSON.stringify({
            message: 'Minimal Serverless Typescript Starter Project',
            context,
            event
        }),
    };
};

export default hello;