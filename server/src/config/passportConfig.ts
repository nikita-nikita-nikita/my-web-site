import passport from "passport"
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import fbAuthRepository from "../data/repositories/fbAuthRepository";
import validator from "validator";
import {secret} from "./jwtConfig";
import {compare} from "../helpers/crypt";
const options = {
    jwtFromRequest:ExtractJwt.fromHeader("token"),
    secretOrKey: secret
}

passport.use(
    "login",
    new LocalStrategy({usernameField:"email"}, async (email, password, done)=>{
        try {
            const userByEmail = await fbAuthRepository.getByEmail(email);
            if(!userByEmail)
                return done({ status: 401, message: 'Incorrect password or email.' }, null);
            return await compare(password, userByEmail.password)
                ? done(null, userByEmail)
                : done({ status: 401, message: 'Incorrect password or email.' }, null)
        }catch (error){
            return done(error)
        }

    })
);

passport.use(
    "change",
    new LocalStrategy({passReqToCallback:true, passwordField:"currentPassword", usernameField:"email"},
        async ({body}, email, password, done)=>{
            try {
                const userById = await fbAuthRepository.getById(body.uuid);

                if(!userById)
                    return done({ status: 401, message: 'User does not exist.' }, null);

                if(!await compare(password, userById.password))
                    return done({status: 401, message: 'Wrong password.'}, null);

                const changedUser = {uuid:body.uuid};

                const checkEmail = await fbAuthRepository.getByEmail(email);

                if(checkEmail&&checkEmail.uuid!==body.uuid)
                    return done({ status: 401, message: 'Email already used by another user.' }, null);

                if(validator.isEmail(body.email))
                    Object.assign(changedUser, {email:body.email});

                if(body.newPassword&&body.newPassword.length>=6)
                    Object.assign(changedUser, {password:body.newPassword});
                else if (body.newPassword&&body.newPassword.length>=6)
                    return done({ status: 401, message: 'Password must contain at least 6 symbols.' }, null);

                if (body.username)
                    Object.assign(changedUser, {username:body.username});

                if(body.phoneNumber&&validator.isMobilePhone(body.phoneNumber))
                    Object.assign(changedUser, {phoneNumber:body.phoneNumber});
                else if ((body.phoneNumber&&body.phoneNumber!=="+380")&&!validator.isMobilePhone(body.phoneNumber))
                    return done({ status: 401, message: 'Incorrect mobile phone.' }, null);

                return done(null, changedUser);
            }catch (error){
                return done(error);
            }

        })
);

passport.use(
    "register",
    new LocalStrategy({usernameField:"email"}, async (email, password, done)=>{
        try {
            if(!email||!password)
                return done({ status: 401, message: 'Password and email are required.' }, null);
            if(!validator.isEmail(email)||password.length<6)
                return done(
                    {
                        status: 401,
                        message: 'Password has less than 6 symbols and email must be email.'
                    }, null);
            const userByEmail = await fbAuthRepository.getByEmail(email);
            if(userByEmail)
                return done({ status: 401, message: 'Email is already taken.' }, null);
            return done(null, {email, password})
        }catch (error){
            return done(error)
        }

    })
);


passport.use(new JwtStrategy(options, async ({uuid}, done)=>{
    try {
        const user = await fbAuthRepository.getWithoutPasswordById(uuid);
        if (!user) throw new Error("session expired");
        return done(null, user);
    }catch (error){
        return done(error);
    }
}));
