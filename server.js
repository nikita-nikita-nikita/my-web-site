"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const authorizationMiddleware_1 = __importDefault(require("./api/middleware/authorizationMiddleware"));
const errorHandlerMiddleware_1 = __importDefault(require("./api/middleware/errorHandlerMiddleware"));
const routesWhitelist_1 = __importDefault(require("./config/routesWhitelist"));
const corsConfig_1 = __importDefault(require("./config/corsConfig"));
const index_1 = __importDefault(require("./api/routes/index"));
const env_1 = __importDefault(require("./env"));
require("./config/fbConfig");
require("./config/passportConfig");
const app = express_1.default();
const port = env_1.default.app.port || 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(corsConfig_1.default);
app.use(passport_1.default.initialize());
app.use("/api/", authorizationMiddleware_1.default(routesWhitelist_1.default));
index_1.default(app);
app.use(errorHandlerMiddleware_1.default);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at port ${port}`);
});
//# sourceMappingURL=server.js.map