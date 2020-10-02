"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const imgurConfig_1 = require("../../config/imgurConfig");
const storage = multer_1.default.memoryStorage();
const upload = multer_1.default({
    storage,
    limits: {
        fileSize: imgurConfig_1.fileSize
    }
});
exports.default = upload.single('image');
//# sourceMappingURL=imageMiddleware.js.map