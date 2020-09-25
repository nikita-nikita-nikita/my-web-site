import {NextFunction, Request, Response, Router} from "express";
import imageMiddleware from "../middleware/imageMiddleware";
import * as imageService from "../services/imageService";

const router = Router();
//
// const logger = (req:Request, res:Response, next:NextFunction) => {
//     console.log(req.user);
//     next();
// }

router
    .post("/", imageMiddleware, (req, res, next) =>
        // @ts-ignore
        imageService.getImageUrl(req.file, req.user.uuid)
            .then(image => res.send({imageUrl: image.link}))
            .catch(next)
    )// .patch("/", ((req, res, next) => ))
    .delete("/", (req, res, next) =>
        // @ts-ignore
        imageService.deleteImage(req.user.uuid)
            .then(() => res.send({message:"Deleted successfully"}))
            .catch(next)
    )
export default router;
