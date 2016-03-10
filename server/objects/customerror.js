"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var CustomError = (function (_super) {
        __extends(CustomError, _super);
        function CustomError(message) {
            _super.call(this, message);
        }
        return CustomError;
    }(Error));
    objects.CustomError = CustomError;
})(objects || (objects = {}));
module.exports = objects;

//# sourceMappingURL=customerror.js.map
