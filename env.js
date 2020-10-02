"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = {
    app: {
        port: process.env.APP_PORT,
        corsWhitelist: process.env.APP_CORS_WHITELIST.split(' ')
    },
    jwt: {
        secret: process.env.APP_SECRET
    },
    imgur: {
        imgurId: process.env.IMGUR_ID,
        imgurSecret: process.env.IMGUR_SECRET,
    },
    fb: {
        type: process.env.FB_TYPE,
        project_id: process.env.FB_PROJECT_ID,
        private_key_id: process.env.FB_PRIVATE_KEY_ID,
        private_key: process.env.FB_PRIVATE_KEY,
        client_email: process.env.FB_CLIENT_EMAIL,
        client_id: process.env.FB_CLIENT_ID,
        auth_uri: process.env.FB_AUTH_URI,
        token_uri: process.env.FB_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FB_CLIENT_X509_CERT_URL
    }
};
exports.default = env;
//# sourceMappingURL=env.js.map