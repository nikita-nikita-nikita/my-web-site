import {Request, Response, NextFunction} from "express";
import jwtMiddleware from "./jwtMiddleware";

const authorizationMiddleware = (whitelist:string[] = []) => (req:Request, res:Response, next:NextFunction) => {
    if(whitelist.indexOf(req.path)===-1) jwtMiddleware(req, res, next);
    else next();
}

export default authorizationMiddleware;
