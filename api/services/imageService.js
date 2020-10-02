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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveImage = exports.deleteImage = exports.getImageUrl = void 0;
const fbImageRepository_1 = __importDefault(require("../../data/repositories/fbImageRepository"));
const fbAuthRepository_1 = __importDefault(require("../../data/repositories/fbAuthRepository"));
const imgurService = __importStar(require("./imgurService"));
exports.getImageUrl = (file, uuid) => __awaiter(void 0, void 0, void 0, function* () {
    const previousImage = yield fbImageRepository_1.default.getById(uuid);
    if (!previousImage)
        return yield fbImageRepository_1.default.create(yield imgurService.uploadToImgur(file), uuid);
    yield imgurService.deleteFromImgur(previousImage.deleteHash);
    const newImage = yield imgurService.uploadToImgur(file);
    return yield fbImageRepository_1.default.update(uuid, newImage);
});
exports.deleteImage = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    const previousImage = yield fbImageRepository_1.default.getById(uuid);
    if (!previousImage)
        throw new Error("Can be deleted");
    yield imgurService.deleteFromImgur(previousImage.deleteHash);
    yield fbImageRepository_1.default.delete(uuid);
});
exports.saveImage = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    const image = yield fbImageRepository_1.default.getById(uuid);
    if (!image)
        throw new Error("Unable to save");
    yield fbAuthRepository_1.default.update(uuid, { imageUrl: image.link });
    yield imgurService.deleteFromImgur(image.deleteHash);
    yield fbImageRepository_1.default.delete(uuid);
    console.log("finish");
});
//# sourceMappingURL=imageService.js.map