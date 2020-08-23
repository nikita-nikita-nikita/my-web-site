import dotenv from 'dotenv';

dotenv.config();

const env = {
    app:{
        port: process.env.APP_PORT,
        corsWhitelist: process.env.APP_CORS_WHITELIST.split(' ')
    },
};

export default env;
