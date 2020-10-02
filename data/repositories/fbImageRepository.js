"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fbConfig_1 = require("../../config/fbConfig");
const baseRepository_1 = __importDefault(require("./baseRepository"));
class FbImageRepository extends baseRepository_1.default {
}
exports.default = new FbImageRepository(fbConfig_1.images);
//# sourceMappingURL=fbImageRepository.js.map