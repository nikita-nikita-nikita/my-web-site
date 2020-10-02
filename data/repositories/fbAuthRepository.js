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
const fbConfig_1 = require("../../config/fbConfig");
const baseRepository_1 = __importDefault(require("./baseRepository"));
class FbAuthRepository extends baseRepository_1.default {
    // Base methods if need to overwrite them
    // Custom methods
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield fbConfig_1.users.where('email', '==', email).get();
            if (!user.size)
                return null;
            return user.docs[0].data();
        });
    }
    getWithoutPasswordById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getById(id);
            if (!user)
                return null;
            const { email, uuid, username, imageUrl, phoneNumber } = user;
            return { email, uuid, username, imageUrl, phoneNumber };
        });
    }
}
exports.default = new FbAuthRepository(fbConfig_1.users);
//# sourceMappingURL=fbAuthRepository.js.map