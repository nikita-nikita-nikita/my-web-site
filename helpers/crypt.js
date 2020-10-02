"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.encryptSync = exports.encrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
exports.encrypt = (data) => bcrypt_1.default.hash(data, saltRounds);
exports.encryptSync = (data) => bcrypt_1.default.hashSync(data, saltRounds);
exports.compare = (data, encrypted) => bcrypt_1.default.compare(data, encrypted);
//# sourceMappingURL=crypt.js.map