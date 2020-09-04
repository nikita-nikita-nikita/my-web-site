"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtConfig_1 = require("../config/jwtConfig");
exports.createToken = (data) => jsonwebtoken_1.default.sign(data, jwtConfig_1.secret, { expiresIn: jwtConfig_1.expiresIn });
//# sourceMappingURL=jwtHelper.js.map