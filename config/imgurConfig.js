"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSize = exports.imgurSecret = exports.imgurId = void 0;
const env_1 = __importDefault(require("../env"));
_a = env_1.default.imgur, exports.imgurId = _a.imgurId, exports.imgurSecret = _a.imgurSecret;
exports.fileSize = 10000000;
//# sourceMappingURL=imgurConfig.js.map