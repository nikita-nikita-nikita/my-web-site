import {Request, Response, NextFunction} from "express";

const authorizationMiddleware = (whitelist:string[] = []) => (req:Request, res:Response, next:NextFunction) => {
    if(whitelist.indexOf(req.path)===-1&&!req.user) res.send("Please authorize");
    next();
}

export default authorizationMiddleware;
