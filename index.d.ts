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
export declare class FaceMeOriginal extends AwesomeCordovaNativePlugin {
    /**
     *
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    testPlugin(): Promise<any>;
    /**
     *
     * @returns
     */
    initializeSDK(): Promise<any>;
    getBase64Image(base64Image: string): Promise<any>;
    getBitmapImage(pixelData: number[]): Promise<any>;
    getBoundingBox(): Promise<any>;
    activateLicense(): Promise<any>;
    deactivateLicense(): Promise<any>;
}

export declare const FaceMe: FaceMeOriginal;