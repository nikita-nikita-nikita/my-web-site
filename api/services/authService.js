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
exports.deleteUser = exports.changeUser = exports.registerUser = exports.login = void 0;
const fbAuthRepository_1 = __importDefault(require("../../data/repositories/fbAuthRepository"));
const jwtHelper_1 = require("../../helpers/jwtHelper");
const crypt_1 = require("../../helpers/crypt");
const crypt_2 = require("../../helpers/crypt");
const uuid_1 = require("uuid");
exports.login = ({ uuid }) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        token: jwtHelper_1.createToken({ uuid }),
        user: yield fbAuthRepository_1.default.getById(uuid)
    });
});
exports.registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = uuid_1.v4();
    yield fbAuthRepository_1.default.create(Object.assign(Object.assign({}, user), { password: yield crypt_1.encrypt(user.password) }), uuid);
    const addedUser = yield fbAuthRepository_1.default.getByEmail(user.email);
    return exports.login(addedUser);
});
exports.changeUser = (uuid, user) => __awaiter(void 0, void 0, void 0, function* () {
    yield fbAuthRepository_1.default.update(uuid, user.password ? Object.assign(Object.assign({}, user), { password: yield crypt_1.encrypt(user.password) }) : Object.assign({}, user));
    const changedUser = yield fbAuthRepository_1.default.getById(user.uuid);
    return exports.login(changedUser);
});
exports.deleteUser = (uuid, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield fbAuthRepository_1.default.getById(uuid);
    if (!user)
        throw { status: 401, message: 'User doesn\'t exist' };
    if (!(yield crypt_2.compare(password, user.password)))
        throw { status: 401, message: 'Incorrect password' };
    return fbAuthRepository_1.default.delete(uuid);
});
//# sourceMappingURL=authService.js.map