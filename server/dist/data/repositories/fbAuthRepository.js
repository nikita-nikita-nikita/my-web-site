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
Object.defineProperty(exports, "__esModule", { value: true });
const fbConfig_1 = require("../../config/fbConfig");
const uuid_1 = require("uuid");
class FbAuthRepository {
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const uuid = uuid_1.v4();
            return fbConfig_1.users.doc(uuid).set(Object.assign(Object.assign({}, userData), { uuid }));
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return fbConfig_1.users.doc(uuid).delete();
        });
    }
    update(uuid, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return fbConfig_1.users.doc(uuid).update(data);
        });
    }
    getById(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield fbConfig_1.users.doc(uuid).get();
            return (doc.exists ? doc.data() : undefined);
            // const user = user.docs[0].data() as AllUserData;
            // return {email, uuid, username, photoURL, phoneNumber};
        });
    }
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
            const { email, uuid, username, photoURL, phoneNumber } = user;
            return { email, uuid, username, photoURL, phoneNumber };
        });
    }
}
exports.default = new FbAuthRepository();
//# sourceMappingURL=fbAuthRepository.js.map