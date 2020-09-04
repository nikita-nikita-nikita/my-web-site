"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const technologiesRoutes_1 = __importDefault(require("./technologiesRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
exports.default = (app) => {
    app.use("/api/technologies", technologiesRoutes_1.default);
    app.use("/api/auth", authRoutes_1.default);
};
//# sourceMappingURL=index.js.map