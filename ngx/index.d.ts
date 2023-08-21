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
       * This function is used for testing the Face Me plugin.
       * @return {Promise<any>} Returns a promise that resolves when the test completes.
       */
    testPlugin(): Promise<any>;
    /**
      * Initializes the Face Me SDK.
      * @returns {Promise<any>} Returns a promise that resolves when the SDK is initialized.
      */
    initializeSDK(licenseKey: String): Promise<any>;
    /**
      * Activates the Face Me license.
      * @returns {Promise<any>} Returns a promise that resolves when the license is activated.
      */
    activateLicense(licenseKey: string): Promise<any>;
    /**
      * Deactivates the Face Me license.
      * @returns {Promise<any>} Returns a promise that resolves when the license is deactivated.
      */
    deactivateLicense(): Promise<any>;
    /**
      * Detects a face from a base64 encoded image.
      * @param {string} base64Image The base64 encoded image.
      * @returns {Promise<any>} Returns a promise that resolves with the face detection result.
      */
    detectFace(base64Image: string): Promise<any>;
    /**
      * Enrolls a face from a base64 encoded image.
      * @param {string} base64Image The base64 encoded image.
      * @returns {Promise<any>} Returns a promise that resolves when the face enrollment is completed.
      */
    enrollFace(base64Image: string): Promise<any>;
    /**
      * Recognizes a face.
      * @returns {Promise<any>} Returns a promise that resolves with the face recognition result.
      */
    recognizeFace(): Promise<any>;
    /**
      * Deletes a face with the specified face ID.
      * @param {number} faceId The ID of the face to delete.
      * @returns {Promise<any>} Returns a promise that resolves when the face is deleted.
      */
    deleteFace(faceId: number): Promise<any>;
    /**
      * Updates a face.
      * @returns {Promise<any>} Returns a promise that resolves when the face update is completed.
      */
    updateFace(): Promise<any>;
    /**
      * Selects a face.
      * @returns {Promise<any>} Returns a promise that resolves when the face selection is completed.
      */
    selectFace(): Promise<any>;
    /**
      * Adds a face with the specified username.
      * @param {string} username The username associated with the face.
      * @returns {Promise<any>} Returns a promise that resolves when the face is added.
      */
    addFace(username: string): Promise<any>;
    /**
      * Starts the anti-spoofing process.
      * @returns {Promise<any>} Returns a promise that resolves when the anti-spoofing process is started.
      */
    startAntiSpoofing(): Promise<any>;
    /**
      * Stops the anti-spoofing process.
      * @returns {Promise<any>} Returns a promise that resolves when the anti-spoofing process is stopped.
      */
    stopAntiSpoofing(): Promise<any>;
}
