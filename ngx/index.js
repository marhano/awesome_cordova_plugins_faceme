import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var FaceMe = /** @class */ (function (_super) {
    __extends(FaceMe, _super);
    function FaceMe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceMe.prototype.testPlugin = function () { return cordova(this, "testPlugin", {}, arguments); };
    FaceMe.prototype.initializeSDK = function (licenseKey) { return cordova(this, "initializeSDK", {}, arguments); };
    FaceMe.prototype.activateLicense = function (licenseKey) { return cordova(this, "activateLicense", {}, arguments); };
    FaceMe.prototype.deactivateLicense = function () { return cordova(this, "deactivateLicense", {}, arguments); };
    FaceMe.prototype.detectFace = function (base64Image) { return cordova(this, "detectFace", {}, arguments); };
    FaceMe.prototype.enrollFace = function (base64Image) { return cordova(this, "enrollFace", {}, arguments); };
    FaceMe.prototype.recognizeFace = function () { return cordova(this, "recognizeFace", {}, arguments); };
    FaceMe.prototype.deleteFace = function (faceId) { return cordova(this, "deleteFace", {}, arguments); };
    FaceMe.prototype.updateFace = function () { return cordova(this, "updateFace", {}, arguments); };
    FaceMe.prototype.selectFace = function () { return cordova(this, "selectFace", {}, arguments); };
    FaceMe.prototype.addFace = function (username) { return cordova(this, "addFace", {}, arguments); };
    FaceMe.prototype.startAntiSpoofing = function (option) { return cordova(this, "startAntiSpoofing", {}, arguments); };
    FaceMe.prototype.stopAntiSpoofing = function () { return cordova(this, "stopAntiSpoofing", {}, arguments); };
    FaceMe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FaceMe, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FaceMe.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FaceMe });
    FaceMe.pluginName = "FaceMe";
    FaceMe.plugin = "https://github.com/marhano/cordova_plugin_faceme.git";
    FaceMe.pluginRef = "FaceMe";
    FaceMe.repo = "https://github.com/marhano/cordova_plugin_faceme";
    FaceMe.install = "";
    FaceMe.installVariables = [];
    FaceMe.platforms = ["Android"];
    FaceMe = __decorate([], FaceMe);
    return FaceMe;
}(AwesomeCordovaNativePlugin));
export { FaceMe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FaceMe, decorators: [{
            type: Injectable
        }], propDecorators: { testPlugin: [], initializeSDK: [], activateLicense: [], deactivateLicense: [], detectFace: [], enrollFace: [], recognizeFace: [], deleteFace: [], updateFace: [], selectFace: [], addFace: [], startAntiSpoofing: [], stopAntiSpoofing: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1tZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7OztJQWlIcEgsMEJBQTBCOzs7O0lBT3BELDJCQUFVO0lBU1YsOEJBQWEsYUFBQyxVQUFrQjtJQVNoQyxnQ0FBZSxhQUFDLFVBQWtCO0lBU2xDLGtDQUFpQjtJQVVqQiwyQkFBVSxhQUFDLFdBQW1CO0lBVTlCLDJCQUFVLGFBQUMsV0FBbUI7SUFTOUIsOEJBQWE7SUFVYiwyQkFBVSxhQUFDLE1BQWM7SUFTekIsMkJBQVU7SUFTViwyQkFBVTtJQVVWLHdCQUFPLGFBQUMsUUFBZ0I7SUFTeEIsa0NBQWlCLGFBQUMsTUFBMkI7SUFTN0MsaUNBQWdCO3dHQXZITCxNQUFNOzRHQUFOLE1BQU07Ozs7Ozs7O0lBQU4sTUFBTSxrQkFBTixNQUFNO2lCQTdIbkI7RUE2SDRCLDBCQUEwQjtTQUF6QyxNQUFNOzRGQUFOLE1BQU07a0JBRGxCLFVBQVU7OEJBUVQsVUFBVSxNQVNWLGFBQWEsTUFTYixlQUFlLE1BU2YsaUJBQWlCLE1BVWpCLFVBQVUsTUFVVixVQUFVLE1BU1YsYUFBYSxNQVViLFVBQVUsTUFTVixVQUFVLE1BU1YsVUFBVSxNQVVWLE9BQU8sTUFTUCxpQkFBaUIsTUFTakIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbnRpU3Bvb2ZpbmdPcHRpb25zIHtcclxuICBzaG93RlBTPzogYm9vbGVhbjtcclxuXHJcbiAgLy9GcmFtZVxyXG4gIGZyYW1lQWN0aXZlQ29sb3I/OiBzdHJpbmc7XHJcbiAgZnJhbWVJZGxlQ29sb3I/OiBzdHJpbmc7XHJcbiAgZnJhbWVCb3JkZXJXaWR0aD86IG51bWJlcjtcclxuICBzaG93RnJhbWU/OiBib29sZWFuO1xyXG5cclxuICAvL0NpcmNsZVxyXG4gIGNpcmNsZUFjdGl2ZUNvbG9yPzogc3RyaW5nO1xyXG4gIGNpcmNsZUlkbGVDb2xvcj86IHN0cmluZztcclxuICBjaXJjbGVCb3JkZXJXaWR0aD86IG51bWJlcjtcclxuXHJcbiAgLy9BY3Rpb24gRGV0YWlsIEhpbnRcclxuICBhY3Rpb25EZXRhaWxIaW50QWN0aXZlQ29sb3I/OiBzdHJpbmc7XHJcbiAgYWN0aW9uRGV0YWlsSGludElkbGVDb2xvcj86IHN0cmluZztcclxuICBhY3Rpb25EZXRhaWxIaW50Rm9udD86IHN0cmluZztcclxuICBhY3Rpb25EZXRhaWxIaW50Rm9udFNpemU/OiBudW1iZXI7XHJcblxyXG4gIC8vQWN0aW9uIEhpbnRcclxuICBhY3Rpb25IaW50Q29sb3I/OiBzdHJpbmc7XHJcbiAgYWN0aW9uSGludEZvbnQ/OiBzdHJpbmc7XHJcbiAgYWN0aW9uSGludEZvbnRTaXplPzogbnVtYmVyO1xyXG5cclxuICAvL1Byb2dyZXNzIEJhclxyXG4gIHByb2dyZXNzQmFyRm9yZWdyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gIHByb2dyZXNzQmFyQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gIHByb2dyZXNzQmFyV2lkdGg/OiBudW1iZXI7XHJcbiAgcHJvZ3Jlc3NCYXJIZWlnaHQ/OiBudW1iZXI7XHJcblxyXG4gIC8vRm9vdGVyXHJcbiAgZm9vdGVyVGl0bGVDb2xvcj86IHN0cmluZztcclxuICBmb290ZXJUaXRsZUZvbnQ/OiBzdHJpbmc7XHJcbiAgZm9vdGVyVGl0bGVGb250U2l6ZT86IG51bWJlcjtcclxuICBmb290ZXJTdWJ0aXRsZUNvbG9yPzogc3RyaW5nO1xyXG4gIGZvb3RlclN1YnRpdGxlRm9udD86IHN0cmluZztcclxuICBmb290ZXJTdWJ0aXRsZUZvbnRTaXplPzogbnVtYmVyO1xyXG4gIHNob3dGb290ZXI/OiBib29sZWFuO1xyXG5cclxuICAvL1VzZXIgQWN0aW9uIEhpbnRcclxuICB1c2VyQWN0aW9uSGludENvbG9yPzogc3RyaW5nO1xyXG4gIHVzZXJBY3Rpb25IaW50Rm9udD86IHN0cmluZztcclxuICB1c2VyQWN0aW9uSGludEZvbnRTaXplPzogbnVtYmVyO1xyXG4gIHNob3dVc2VyQWN0aW9uU3RlcHM/OiBib29sZWFuO1xyXG5cclxuICAvL1NwZWVjaCBOdW1iZXJcclxuICBzcGVlY2hOdW1iZXJBY3RpdmVDb2xvcj86IHN0cmluZztcclxuICBzcGVlY2hOdW1iZXJJZGxlQ29sb3I/OiBzdHJpbmc7XHJcbiAgc3BlZWNoTnVtYmVyRm9udD86IHN0cmluZztcclxuICBzcGVlY2hOdW1iZXJGb250U2l6ZT86IG51bWJlcjtcclxuXHJcbiAgLy9TcGVlY2ggTGFuZ3VhZ2VcclxuICBzcGVlY2hMYW5ndWFnZUNvbG9yPzogc3RyaW5nO1xyXG4gIHNwZWVjaExhbmd1YWdlRm9udD86IHN0cmluZztcclxuICBzcGVlY2hMYW5ndWFnZUJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuICBzaG93U3BlZWNoTGFuZ3VhZ2U/OiBib29sZWFuO1xyXG5cclxuICAvL0FsZXJ0IFBvc2l0aW9uXHJcbiAgYWxlcnREaXN0YW5jZVRvQ2lyY2xlPzogbnVtYmVyO1xyXG5cclxuICAvL0FsZXJ0IEJhY2tncm91bmRcclxuICBhbGVydEJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuXHJcbiAgLy9BbGVydCBUaXRsZVxyXG4gIGFsZXJ0VGl0bGVDb2xvcj86IHN0cmluZztcclxuICBhbGVydFRpdGxlRm9udD86IHN0cmluZztcclxuICBhbGVydFRpdGxlRm9udFNpemU/OiBudW1iZXI7XHJcblxyXG4gIC8vQWxlcnQgRGVzY3JpcHRpb25cclxuICBhbGVydERlc2NyaXB0aW9uQ29sb3I/OiBzdHJpbmc7XHJcbiAgYWxlcnREZXNjcmlwdGlvbkZvbnQ/OiBzdHJpbmc7XHJcbiAgYWxlcnREZXNjcmlwdGlvbkZvbnRTaXplPzogbnVtYmVyO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZhY2UgTWVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZhY2VNZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9mYWNlLW1lJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmYWNlTWU6IEZhY2VNZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmZhY2VNZS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmFjZU1lJyxcclxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaGFuby9jb3Jkb3ZhX3BsdWdpbl9mYWNlbWUuZ2l0JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnRmFjZU1lJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaGFuby9jb3Jkb3ZhX3BsdWdpbl9mYWNlbWUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZhY2VNZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgZm9yIHRlc3RpbmcgdGhlIEZhY2UgTWUgcGx1Z2luLlxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHRlc3QgY29tcGxldGVzLlxyXG4gICAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHRlc3RQbHVnaW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBJbml0aWFsaXplcyB0aGUgRmFjZSBNZSBTREsuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgU0RLIGlzIGluaXRpYWxpemVkLlxyXG4gICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaW5pdGlhbGl6ZVNESyhsaWNlbnNlS2V5OiBTdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEFjdGl2YXRlcyB0aGUgRmFjZSBNZSBsaWNlbnNlLlxyXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxpY2Vuc2UgaXMgYWN0aXZhdGVkLlxyXG4gICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWN0aXZhdGVMaWNlbnNlKGxpY2Vuc2VLZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogRGVhY3RpdmF0ZXMgdGhlIEZhY2UgTWUgbGljZW5zZS5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsaWNlbnNlIGlzIGRlYWN0aXZhdGVkLlxyXG4gICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGVhY3RpdmF0ZUxpY2Vuc2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBEZXRlY3RzIGEgZmFjZSBmcm9tIGEgYmFzZTY0IGVuY29kZWQgaW1hZ2UuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlNjRJbWFnZSBUaGUgYmFzZTY0IGVuY29kZWQgaW1hZ2UuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZmFjZSBkZXRlY3Rpb24gcmVzdWx0LlxyXG4gICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGV0ZWN0RmFjZShiYXNlNjRJbWFnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBFbnJvbGxzIGEgZmFjZSBmcm9tIGEgYmFzZTY0IGVuY29kZWQgaW1hZ2UuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlNjRJbWFnZSBUaGUgYmFzZTY0IGVuY29kZWQgaW1hZ2UuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZmFjZSBlbnJvbGxtZW50IGlzIGNvbXBsZXRlZC5cclxuICAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVucm9sbEZhY2UoYmFzZTY0SW1hZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmVjb2duaXplcyBhIGZhY2UuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZmFjZSByZWNvZ25pdGlvbiByZXN1bHQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWNvZ25pemVGYWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogRGVsZXRlcyBhIGZhY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIGZhY2UgSUQuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBmYWNlSWQgVGhlIElEIG9mIHRoZSBmYWNlIHRvIGRlbGV0ZS5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmYWNlIGlzIGRlbGV0ZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkZWxldGVGYWNlKGZhY2VJZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBVcGRhdGVzIGEgZmFjZS5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmYWNlIHVwZGF0ZSBpcyBjb21wbGV0ZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1cGRhdGVGYWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU2VsZWN0cyBhIGZhY2UuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZmFjZSBzZWxlY3Rpb24gaXMgY29tcGxldGVkLlxyXG4gICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VsZWN0RmFjZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEFkZHMgYSBmYWNlIHdpdGggdGhlIHNwZWNpZmllZCB1c2VybmFtZS5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIFRoZSB1c2VybmFtZSBhc3NvY2lhdGVkIHdpdGggdGhlIGZhY2UuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZmFjZSBpcyBhZGRlZC5cclxuICAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZEZhY2UodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU3RhcnRzIHRoZSBhbnRpLXNwb29maW5nIHByb2Nlc3MuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYW50aS1zcG9vZmluZyBwcm9jZXNzIGlzIHN0YXJ0ZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydEFudGlTcG9vZmluZyhvcHRpb246IEFudGlTcG9vZmluZ09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFN0b3BzIHRoZSBhbnRpLXNwb29maW5nIHByb2Nlc3MuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYW50aS1zcG9vZmluZyBwcm9jZXNzIGlzIHN0b3BwZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wQW50aVNwb29maW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19