"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const env_1 = __importDefault(require("../env"));
const whitelist = env_1.default.app.corsWhitelist;
exports.default = cors_1.default({
    origin(origin, callback) {
        console.log("Coooors", origin);
        if (whitelist.indexOf(origin) !== -1)
            callback(null, true);
        else
            callback(new Error("Wrong domain"), false);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
});
//# sourceMappingURL=corsConfig.js.map