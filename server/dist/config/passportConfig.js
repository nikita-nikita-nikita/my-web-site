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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const passport_jwt_1 = require("passport-jwt");
const fbAuthRepository_1 = __importDefault(require("../data/repositories/fbAuthRepository"));
const validator_1 = __importDefault(require("validator"));
const jwtConfig_1 = require("./jwtConfig");
const crypt_1 = require("../helpers/crypt");
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromHeader("token"),
    secretOrKey: jwtConfig_1.secret
};
passport_1.default.use("login", new passport_local_1.Strategy({ usernameField: "email" }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userByEmail = yield fbAuthRepository_1.default.getByEmail(email);
        if (!userByEmail)
            return done({ status: 401, message: 'Incorrect password or email.' }, null);
        return (yield crypt_1.compare(password, userByEmail.password))
            ? done(null, userByEmail)
            : done({ status: 401, message: 'Incorrect password or email.' }, null);
    }
    catch (error) {
        return done(error);
    }
})));
passport_1.default.use("change", new passport_local_1.Strategy({ passReqToCallback: true, passwordField: "currentPassword", usernameField: "email" }, ({ body }, email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userById = yield fbAuthRepository_1.default.getById(body.uuid);
        if (!userById)
            return done({ status: 401, message: 'User does not exist.' }, null);
        if (!(yield crypt_1.compare(password, userById.password)))
            return done({ status: 401, message: 'Wrong password.' }, null);
        const changedUser = { uuid: body.uuid };
        const checkEmail = yield fbAuthRepository_1.default.getByEmail(email);
        if (checkEmail && checkEmail.uuid !== body.uuid)
            return done({ status: 401, message: 'Email already used by another user.' }, null);
        if (validator_1.default.isEmail(body.email))
            Object.assign(changedUser, { email: body.email });
        if (body.newPassword && body.newPassword.length >= 6)
            Object.assign(changedUser, { password: body.newPassword });
        else if (body.newPassword && body.newPassword.length >= 6)
            return done({ status: 401, message: 'Password must contain at least 6 symbols.' }, null);
        if (body.username)
            Object.assign(changedUser, { username: body.username });
        if (body.phoneNumber && validator_1.default.isMobilePhone(body.phoneNumber))
            Object.assign(changedUser, { phoneNumber: body.phoneNumber });
        else if ((body.phoneNumber && body.phoneNumber !== "+380") && !validator_1.default.isMobilePhone(body.phoneNumber))
            return done({ status: 401, message: 'Incorrect mobile phone.' }, null);
        return done(null, changedUser);
    }
    catch (error) {
        return done(error);
    }
})));
passport_1.default.use("register", new passport_local_1.Strategy({ usernameField: "email" }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!email || !password)
            return done({ status: 401, message: 'Password and email are required.' }, null);
        if (!validator_1.default.isEmail(email) || password.length < 6)
            return done({
                status: 401,
                message: 'Password has less than 6 symbols and email must be email.'
            }, null);
        const userByEmail = yield fbAuthRepository_1.default.getByEmail(email);
        if (userByEmail)
            return done({ status: 401, message: 'Email is already taken.' }, null);
        return done(null, { email, password });
    }
    catch (error) {
        return done(error);
    }
})));
passport_1.default.use(new passport_jwt_1.Strategy(options, ({ uuid }, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield fbAuthRepository_1.default.getWithoutPasswordById(uuid);
        if (!user)
            throw new Error("session expired");
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
})));
//# sourceMappingURL=passportConfig.js.map