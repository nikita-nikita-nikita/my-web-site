import fbImageRepository from "../../data/repositories/fbImageRepository";
import * as imgurService from "./imgurService";

export const getImageUrl = async (file:any, uuid:string) => {
    const previousImage = await fbImageRepository.getById(uuid);
    if (!previousImage) return await fbImageRepository.create(await imgurService.uploadToImgur(file), uuid);
    await imgurService.deleteFromImgur(previousImage.deleteHash);
    const newImage = await imgurService.uploadToImgur(file);
    return await fbImageRepository.update(uuid, newImage);
}

export const deleteImage = async (uuid:string) => {
    const previousImage = await fbImageRepository.getById(uuid);
    if(!previousImage) throw new Error("Can be deleted");
    await imgurService.deleteFromImgur(previousImage.deleteHash);
    await fbImageRepository.delete(uuid);
}
