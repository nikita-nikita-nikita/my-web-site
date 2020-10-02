"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkEmptyFields = ({ usernameField = "username", passwordField = "password" }) => (req, res, next) => {
    if (!req.body[usernameField])
        throw new Error("username are required");
    if (!req.body[passwordField])
        throw new Error("password are required");
    next();
};
exports.default = checkEmptyFields;
//# sourceMappingURL=checkEmptyFields.js.map