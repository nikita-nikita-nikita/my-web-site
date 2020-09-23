import {Router} from "express";
import imageMiddleware from "../middleware/imageMiddleware";
import * as imageService from "../services/imageService";

const router = Router();

router
    .post("/", imageMiddleware, ((req, res, next) =>
        // @ts-ignore
        imageService.getImageUrl(req.body, req.user.uuid)
            .then(image => res.send({imageUrl:image.link})))
    )
