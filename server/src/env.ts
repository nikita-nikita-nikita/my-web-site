import dotenv from 'dotenv';

dotenv.config();

const env = {
    app:{
        port: process.env.APP_PORT,
        corsWhitelist: process.env.APP_CORS_WHITELIST.split(' ')
    },
    jwt:{
        secret: process.env.APP_SECRET
    }
};

export default env;
