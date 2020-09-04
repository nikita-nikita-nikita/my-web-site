"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const nikita_bludov_web_site_firebase_adminsdk_json_1 = __importDefault(require("./nikita-bludov-web-site-firebase-adminsdk.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(nikita_bludov_web_site_firebase_adminsdk_json_1.default),
    databaseURL: "https://nikita-bludov-web-site.firebaseio.com"
});
exports.users = firebase_admin_1.default.firestore().collection("users");
//# sourceMappingURL=fbConfig.js.map