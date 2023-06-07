import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Face Me
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { FaceMe } from '@awesome-cordova-plugins/face-me';
 *
 *
 * constructor(private faceMe: FaceMe) { }
 *
 * ...
 *
 *
 * this.faceMe.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class FaceMe extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    testPlugin(): Promise<any>;
    initializeSDK(): Promise<any>;
    extractFace(base64Image: string): Promise<any>;
}
