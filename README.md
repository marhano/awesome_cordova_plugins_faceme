# awesome-cordova-plugins-faceme

## Installation
To install `awesome-cordova-plugins-faceme`, run the following command:

    npm install https://github.com/marhano/awesome-cordova-plugins-faceme.git


In the `app.module.ts` file, import the `faceme` module:
```javascript
import { FaceMe } from '@awesome-cordova-plugins/face-me/ngx';
```
Then, add FaceMe to the providers.

## How to Use

Import `FaceMe` in your component file:
```js
import { FaceMe } from '@awesome-cordova-plugins/face-me/ngx';
```

Add `FaceMe` to the constructor:
```js
constructor(private platform: Platform, private faceMe: FaceMe)
```
Ensure that the platform is ready before using the plugin:
```js
this.platform.ready().then(() => {
  this.faceMe.testPlugin().then((res: any) => {
    this.logMessage(res);
  }).catch((error: any) => {
    this.logMessage(error);
  });
});
```


## Methods
`testPlugin`: Returns a test string to check if the plugin is working.

`initializeSDK`: Initializes the FaceMe SDK using a license.

`extractFace`: Extracts a face based on the provided base64 image.
