import { lambdaLibrary } from '@lukvonstrom/lambda-library';

console.log('Hello World');


async function businessLogic(event: any) {
    return "hi"
}

export const lambdaHandler = async () => await lambdaLibrary({}, businessLogic)