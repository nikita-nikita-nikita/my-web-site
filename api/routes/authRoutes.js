"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authService = __importStar(require("../services/authService"));
const registerMiddleware_1 = __importDefault(require("../middleware/registerMiddleware"));
const loginMiddleware_1 = __importDefault(require("../middleware/loginMiddleware"));
const changeUserMiddleware_1 = __importDefault(require("../middleware/changeUserMiddleware"));
const jwtMiddleware_1 = __importDefault(require("../middleware/jwtMiddleware"));
const checkEmptyFields_1 = __importDefault(require("../middleware/checkEmptyFields"));
const router = express_1.Router();
// const logger = (req:Request, res:Response, next:NextFunction) => {
//     console.log(req.user);
//     console.log(req.body);
//     next();
// }
router
    .get("/user", jwtMiddleware_1.default, (req, res, next) => {
    authService.login(req.user)
        .then(data => res.send(data))
        .catch(next);
})
    .post("/register", checkEmptyFields_1.default({ usernameField: "email" }), registerMiddleware_1.default, (req, res, next) => authService.registerUser(req.user)
    .then(data => res.send(data))
    .catch(next))
    .post("/login", checkEmptyFields_1.default({ usernameField: "email" }), loginMiddleware_1.default, (req, res, next) => authService.login(req.user)
    .then(data => res.send(data))
    .catch(next))
    .put("/change", checkEmptyFields_1.default({
    passwordField: "currentPassword",
    usernameField: "email"
}), changeUserMiddleware_1.default, (req, res, next) => authService.changeUser(req.user.uuid, req.user)
    .then(data => res.send(data))
    .catch(next))
    .delete("/user:uuid", (req, res, next) => authService.deleteUser(req.params.uuid, req.header("password"))
    .then(data => res.send(data))
    .catch(next));
exports.default = router;
//# sourceMappingURL=authRoutes.js.map