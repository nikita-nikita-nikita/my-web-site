// tslint:disable-next-line:no-var-requires
if (process.env.NODE_ENV !== 'production') require("dotenv").config();

const env = {
    app:{
        port: process.env.PORT,
        corsWhitelist: process.env.APP_CORS_WHITELIST
    },
    jwt:{
        secret: process.env.APP_SECRET
    },
    imgur:{
        imgurId:process.env.IMGUR_ID,
        imgurSecret:process.env.IMGUR_SECRET,
    },
    fb:{
        type:process.env.FB_TYPE,
        project_id:process.env.FB_PROJECT_ID,
        private_key_id:process.env.FB_PRIVATE_KEY_ID,
        // @ts-ignore
        private_key:process.env.FB_PRIVATE_KEY.replace(/\\n/g, "\n"), // fuck textarea
        client_email:process.env.FB_CLIENT_EMAIL,
        client_id:process.env.FB_CLIENT_ID,
        auth_uri:process.env.FB_AUTH_URI,
        token_uri:process.env.FB_TOKEN_URI,
        auth_provider_x509_cert_url:process.env.FB_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url:process.env.FB_CLIENT_X509_CERT_URL
    }
};

export default env;
