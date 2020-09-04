"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const env_1 = __importDefault(require("../env"));
const whitelist = env_1.default.app.corsWhitelist;
const cors = cors_1.default({
    origin(origin, callback) {
        if (whitelist.indexOf(origin) !== -1)
            callback(null, true);
        else
            callback(new Error("Wrong domain"), false);
    },
    methods: ["GET", "POST", "PUT", "DELETE"]
});
exports.default = cors;
//# sourceMappingURL=corsConfig.js.map