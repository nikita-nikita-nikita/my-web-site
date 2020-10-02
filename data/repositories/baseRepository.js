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
class BaseClass {
    constructor(_model) {
        this._model = _model;
    }
    create(userData, uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._model.doc(uuid).set(Object.assign(Object.assign({}, userData), { uuid }));
            return this.getById(uuid);
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.doc(uuid).delete();
        });
    }
    update(uuid, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._model.doc(uuid).update(data);
            return this.getById(uuid);
        });
    }
    getById(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield this._model.doc(uuid).get();
            return (doc.exists ? doc.data() : null);
        });
    }
}
exports.default = BaseClass;
//# sourceMappingURL=baseRepository.js.map