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
    activateLicense(): Promise<any>;
    deactivateLicense(): Promise<any>;
    detectFace(base64Image: string): Promise<any>;
    enrollFace(): Promise<any>;
    recognizeFace(): Promise<any>;
    deleteFace(faceId: number): Promise<any>;
    updateFace(): Promise<any>;
    selectFace(): Promise<any>;
    addFace(username: string): Promise<any>;
    startAntiSpoofing(): Promise<any>;
    stopAntiSpoofing(): Promise<any>;
}

export declare const FaceMe: FaceMeOriginal;