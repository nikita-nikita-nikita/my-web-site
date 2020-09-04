"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expiresIn = exports.secret = void 0;
const env_1 = __importDefault(require("../env"));
exports.secret = env_1.default.jwt.secret;
exports.expiresIn = '24h';
//# sourceMappingURL=jwtConfig.js.map