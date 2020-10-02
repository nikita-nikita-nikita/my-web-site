import {Request, Response, NextFunction} from "express";

type Fields = {
    usernameField?:string,
    passwordField?:string
}

const checkEmptyFields = (
    {
        usernameField = "username",
        passwordField = "password"
    }:Fields) =>
    (req:Request, res:Response, next:NextFunction) => {
    if (!req.body[usernameField])
        throw new Error("username are required");
    if (!req.body[passwordField])
        throw new Error("password are required");
    next();
};

export default checkEmptyFields;
