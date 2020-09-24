import {images} from "../../config/fbConfig";
import BaseClass from "./baseRepository";

export type BaseImageType = {
    link: string
    deleteHash: string
}

export type ImageType = {
    link: string
    deleteHash: string
    userId:string
}

class FbImageRepository extends BaseClass<BaseImageType, ImageType>{
    // Base ...

    // Custom
}

export default new FbImageRepository(images);
