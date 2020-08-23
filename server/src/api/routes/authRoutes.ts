import {Router} from "express";
import * as authService from "../services/authService";

const router = Router();

router
    .post("/register", (req, res, next) =>
        authService.registerUser(req.body)
            .then(data => res.send(data))
            .catch(error => res.send(error))
    )

export default router;
