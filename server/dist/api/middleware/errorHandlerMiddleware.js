"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware = (err, req, res, next) => {
    if (res.headersSent) {
        next(err);
    }
    else {
        const { status = 500, message = '' } = err;
        res.status(status).send({ status, message });
    }
};
exports.default = errorHandlerMiddleware;
//# sourceMappingURL=errorHandlerMiddleware.js.map