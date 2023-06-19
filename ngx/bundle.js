'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var FaceMe = /** @class */ (function (_super) {
    tslib.__extends(FaceMe, _super);
    function FaceMe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceMe.prototype.testPlugin = function () { return core.cordova(this, "testPlugin", {}, arguments); };
    FaceMe.prototype.initializeSDK = function () { return core.cordova(this, "initializeSDK", {}, arguments); };
    FaceMe.prototype.getBase64Image = function (base64Image) { return core.cordova(this, "getBase64Image", {}, arguments); };
    FaceMe.prototype.getBitmapImage = function (pixelData) { return core.cordova(this, "getBitmapImage", {}, arguments); };
    FaceMe.prototype.getBoundingBox = function () { return core.cordova(this, "getBoundingBox", {}, arguments); };
    FaceMe.prototype.activateLicense = function () { return core.cordova(this, "activateLicense", {}, arguments); };
    FaceMe.prototype.deactivateLicense = function () { return core.cordova(this, "deactivateLicense", {}, arguments); };
    FaceMe.prototype.detectFace = function (base64Image) { return core.cordova(this, "detectFace", {}, arguments); };
    FaceMe.prototype.enrollFace = function (username, faceHolder) { return core.cordova(this, "enrollFace", {}, arguments); };
    FaceMe.prototype.recognizeFace = function () { return core.cordova(this, "recognizeFace", {}, arguments); };
    FaceMe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FaceMe, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FaceMe.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FaceMe });
    FaceMe.pluginName = "FaceMe";
    FaceMe.plugin = "https://github.com/marhano/cordova_plugin_faceme.git";
    FaceMe.pluginRef = "FaceMe";
    FaceMe.repo = "https://github.com/marhano/cordova_plugin_faceme";
    FaceMe.install = "";
    FaceMe.installVariables = [];
    FaceMe.platforms = ["Android"];
    FaceMe = tslib.__decorate([], FaceMe);
    return FaceMe;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FaceMe, decorators: [{
            type: i0.Injectable
        }], propDecorators: { testPlugin: [], initializeSDK: [], getBase64Image: [], getBitmapImage: [], getBoundingBox: [], activateLicense: [], deactivateLicense: [], detectFace: [], enrollFace: [], recognizeFace: [] } });

exports.FaceMe = FaceMe;
