"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = async (event, context) => {
    return {
        'statusCode': 200,
        "body": JSON.stringify({
            message: 'Minimal Serverless Typescript Starter Project',
            context,
            event
        }),
    };
};
exports.hello = hello;
//# sourceMappingURL=handler.js.map