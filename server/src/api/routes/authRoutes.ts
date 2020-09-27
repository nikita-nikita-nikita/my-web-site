import {Router, Request, Response, NextFunction} from "express";
import * as authService from "../services/authService";
import registerMiddleware from "../middleware/registerMiddleware";
import loginMiddleware from "../middleware/loginMiddleware";
import changeUserMiddleware from "../middleware/changeUserMiddleware";
import jwtMiddleware from "../middleware/jwtMiddleware";
import {AllUserData} from "../../data/repositories/fbAuthRepository";

const router = Router();
const logger = (req:Request, res:Response, next:NextFunction) => {
    console.log(req.user);
    console.log(req.body);
    next();
}

router
    .get(
        "/user", jwtMiddleware, (req, res, next) => {
            authService.login(req.user as AllUserData)
                .then(data => res.send(data))
                .catch(next)
        }

    )
    .post("/register", registerMiddleware,
        (req, res, next) =>
            authService.registerUser(req.user as AllUserData)
                .then(data => res.send(data))
                .catch(next)
    )
    .post("/login", logger, loginMiddleware,
        (req, res, next) =>
            authService.login(req.user as AllUserData)
                .then(data => res.send(data))
                .catch(next)
    )
    .put("/change", changeUserMiddleware, (req, res, next) =>
        // @ts-ignore
        authService.changeUser(req.user.uuid , req.user)
            .then(data => res.send(data))
            .catch(next)
    )
    .delete<{uuid:string}>("/user:uuid", (req, res, next) =>
        authService.deleteUser(req.params.uuid, req.header("password"))
            .then(data => res.send(data))
            .catch(next)
    )

export default router;
