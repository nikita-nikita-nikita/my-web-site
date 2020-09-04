"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = {
    app: {
        port: process.env.APP_PORT,
        corsWhitelist: process.env.APP_CORS_WHITELIST.split(' ')
    },
    jwt: {
        secret: process.env.APP_SECRET
    }
};
exports.default = env;
//# sourceMappingURL=env.js.map