import fbImageRepository from "../../data/repositories/fbImageRepository";
import fbAuthRepository from "../../data/repositories/fbAuthRepository";
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
export const saveImage = async (uuid:string) => {
    const image = await fbImageRepository.getById(uuid);
    if(!image) throw new Error("Unable to save");
    await fbAuthRepository.update(uuid, {imageUrl:image.link});
    await imgurService.deleteFromImgur(image.deleteHash);
    await fbImageRepository.delete(uuid);
    console.log("finish");
}
