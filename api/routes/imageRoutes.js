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
const imageMiddleware_1 = __importDefault(require("../middleware/imageMiddleware"));
const imageService = __importStar(require("../services/imageService"));
const router = express_1.Router();
//
// const logger = (req:Request, res:Response, next:NextFunction) => {
//     console.log(req.user);
//     next();
// }
router
    .post("/", imageMiddleware_1.default, (req, res, next) => 
// @ts-ignore
imageService.getImageUrl(req.file, req.user.uuid)
    .then(image => res.send({ imageUrl: image.link }))
    .catch(next))
    .patch("/", (req, res, next) => 
// @ts-ignore
imageService.saveImage(req.user.uuid)
    .then(() => res.send({ message: "Saved successfully" }))
    .catch(next))
    .delete("/", (req, res, next) => 
// @ts-ignore
imageService.deleteImage(req.user.uuid)
    .then(() => res.send({ message: "Deleted successfully" }))
    .catch(next));
exports.default = router;
//# sourceMappingURL=imageRoutes.js.map