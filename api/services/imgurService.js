"use strict";
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
exports.deleteFromImgur = exports.uploadToImgur = void 0;
const axios_1 = __importDefault(require("axios"));
const imgurConfig_1 = require("../../config/imgurConfig");
exports.uploadToImgur = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data: { data } } = yield axios_1.default.post('https://api.imgur.com/3/image', {
            image: file.buffer.toString('base64')
        }, {
            headers: { Authorization: `Client-ID ${imgurConfig_1.imgurId}` }
        });
        return {
            link: data.link,
            deleteHash: data.deletehash
        };
    }
    catch ({ response: { data: { status, data } } }) {
        return Promise.reject({ status, message: data.error });
    }
});
exports.deleteFromImgur = (hash) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return axios_1.default.delete(`https://api.imgur.com/3/image/${hash}`, {
            headers: { Authorization: `Client-ID ${imgurConfig_1.imgurId}` }
        });
    }
    catch ({ response: { data: { status, data } } }) {
        return Promise.reject({ status, message: data.error });
    }
});
//# sourceMappingURL=imgurService.js.map