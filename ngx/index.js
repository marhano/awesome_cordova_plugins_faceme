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
    FaceMe.prototype.initializeSDK = function () { return cordova(this, "initializeSDK", {}, arguments); };
    FaceMe.prototype.activateLicense = function () { return cordova(this, "activateLicense", {}, arguments); };
    FaceMe.prototype.deactivateLicense = function () { return cordova(this, "deactivateLicense", {}, arguments); };
    FaceMe.prototype.detectFace = function (base64Image) { return cordova(this, "detectFace", {}, arguments); };
    FaceMe.prototype.enrollFace = function (base64Image) { return cordova(this, "enrollFace", {}, arguments); };
    FaceMe.prototype.recognizeFace = function () { return cordova(this, "recognizeFace", {}, arguments); };
    FaceMe.prototype.deleteFace = function (faceId) { return cordova(this, "deleteFace", {}, arguments); };
    FaceMe.prototype.updateFace = function () { return cordova(this, "updateFace", {}, arguments); };
    FaceMe.prototype.selectFace = function () { return cordova(this, "selectFace", {}, arguments); };
    FaceMe.prototype.addFace = function (username) { return cordova(this, "addFace", {}, arguments); };
    FaceMe.prototype.startAntiSpoofing = function () { return cordova(this, "startAntiSpoofing", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1tZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7OztJQWtDcEgsMEJBQTBCOzs7O0lBT3BELDJCQUFVO0lBU1YsOEJBQWE7SUFTYixnQ0FBZTtJQVNmLGtDQUFpQjtJQVVqQiwyQkFBVSxhQUFDLFdBQW1CO0lBVTlCLDJCQUFVLGFBQUMsV0FBbUI7SUFTOUIsOEJBQWE7SUFVYiwyQkFBVSxhQUFDLE1BQWM7SUFTekIsMkJBQVU7SUFTViwyQkFBVTtJQVVWLHdCQUFPLGFBQUMsUUFBZ0I7SUFTeEIsa0NBQWlCO0lBU2pCLGlDQUFnQjt3R0F2SEwsTUFBTTs0R0FBTixNQUFNOzs7Ozs7OztJQUFOLE1BQU0sa0JBQU4sTUFBTTtpQkE5Q25CO0VBOEM0QiwwQkFBMEI7U0FBekMsTUFBTTs0RkFBTixNQUFNO2tCQURsQixVQUFVOzhCQVFULFVBQVUsTUFTVixhQUFhLE1BU2IsZUFBZSxNQVNmLGlCQUFpQixNQVVqQixVQUFVLE1BVVYsVUFBVSxNQVNWLGFBQWEsTUFVYixVQUFVLE1BU1YsVUFBVSxNQVNWLFVBQVUsTUFVVixPQUFPLE1BU1AsaUJBQWlCLE1BU2pCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcclxuICpcclxuICogVE9ETzpcclxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XHJcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcclxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xyXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxyXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcclxuICpcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGYWNlIE1lXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGYWNlTWUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmFjZS1tZSc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFjZU1lOiBGYWNlTWUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5mYWNlTWUuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZhY2VNZScsXHJcbiAgcGx1Z2luOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcmhhbm8vY29yZG92YV9wbHVnaW5fZmFjZW1lLmdpdCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0ZhY2VNZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcmhhbm8vY29yZG92YV9wbHVnaW5fZmFjZW1lJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGYWNlTWUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGZvciB0ZXN0aW5nIHRoZSBGYWNlIE1lIHBsdWdpbi5cclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB0ZXN0IGNvbXBsZXRlcy5cclxuICAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0ZXN0UGx1Z2luKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogSW5pdGlhbGl6ZXMgdGhlIEZhY2UgTWUgU0RLLlxyXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIFNESyBpcyBpbml0aWFsaXplZC5cclxuICAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXRpYWxpemVTREsoKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEFjdGl2YXRlcyB0aGUgRmFjZSBNZSBsaWNlbnNlLlxyXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxpY2Vuc2UgaXMgYWN0aXZhdGVkLlxyXG4gICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWN0aXZhdGVMaWNlbnNlKCk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBEZWFjdGl2YXRlcyB0aGUgRmFjZSBNZSBsaWNlbnNlLlxyXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxpY2Vuc2UgaXMgZGVhY3RpdmF0ZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkZWFjdGl2YXRlTGljZW5zZSgpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogRGV0ZWN0cyBhIGZhY2UgZnJvbSBhIGJhc2U2NCBlbmNvZGVkIGltYWdlLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZTY0SW1hZ2UgVGhlIGJhc2U2NCBlbmNvZGVkIGltYWdlLlxyXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGZhY2UgZGV0ZWN0aW9uIHJlc3VsdC5cclxuICAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRldGVjdEZhY2UoYmFzZTY0SW1hZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBFbnJvbGxzIGEgZmFjZSBmcm9tIGEgYmFzZTY0IGVuY29kZWQgaW1hZ2UuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlNjRJbWFnZSBUaGUgYmFzZTY0IGVuY29kZWQgaW1hZ2UuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZmFjZSBlbnJvbGxtZW50IGlzIGNvbXBsZXRlZC5cclxuICAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVucm9sbEZhY2UoYmFzZTY0SW1hZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZWNvZ25pemVzIGEgZmFjZS5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBmYWNlIHJlY29nbml0aW9uIHJlc3VsdC5cclxuICAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlY29nbml6ZUZhY2UoKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIERlbGV0ZXMgYSBmYWNlIHdpdGggdGhlIHNwZWNpZmllZCBmYWNlIElELlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZmFjZUlkIFRoZSBJRCBvZiB0aGUgZmFjZSB0byBkZWxldGUuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZmFjZSBpcyBkZWxldGVkLlxyXG4gICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGVsZXRlRmFjZShmYWNlSWQ6IG51bWJlcik6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBVcGRhdGVzIGEgZmFjZS5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmYWNlIHVwZGF0ZSBpcyBjb21wbGV0ZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1cGRhdGVGYWNlKCk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTZWxlY3RzIGEgZmFjZS5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmYWNlIHNlbGVjdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZWxlY3RGYWNlKCk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBBZGRzIGEgZmFjZSB3aXRoIHRoZSBzcGVjaWZpZWQgdXNlcm5hbWUuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBmYWNlLlxyXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGZhY2UgaXMgYWRkZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRGYWNlKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU3RhcnRzIHRoZSBhbnRpLXNwb29maW5nIHByb2Nlc3MuXHJcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYW50aS1zcG9vZmluZyBwcm9jZXNzIGlzIHN0YXJ0ZWQuXHJcbiAgICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydEFudGlTcG9vZmluZygpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU3RvcHMgdGhlIGFudGktc3Bvb2ZpbmcgcHJvY2Vzcy5cclxuICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbnRpLXNwb29maW5nIHByb2Nlc3MgaXMgc3RvcHBlZC5cclxuICAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3BBbnRpU3Bvb2ZpbmcoKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==