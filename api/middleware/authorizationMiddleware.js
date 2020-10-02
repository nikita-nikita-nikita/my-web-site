"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwtMiddleware_1 = __importDefault(require("./jwtMiddleware"));
const authorizationMiddleware = (whitelist = []) => (req, res, next) => {
    if (whitelist.indexOf(req.path) === -1)
        jwtMiddleware_1.default(req, res, next);
    else
        next();
};
exports.default = authorizationMiddleware;
//# sourceMappingURL=authorizationMiddleware.js.map