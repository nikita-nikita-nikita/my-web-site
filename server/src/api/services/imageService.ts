import fbImageRepository from "../../data/repositories/fbImageRepository";
import * as imgurService from "./imgurService";

export const getImageUrl = async (file:any, uuid:string) => {
    const image = await imgurService.uploadToImgur(file);
    return await fbImageRepository.create(image, uuid);
}
