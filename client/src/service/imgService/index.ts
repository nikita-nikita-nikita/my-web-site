import myAxios from "../myApiService";

export default class ImageService {
    loadImageLink = (file: any) => {
        const formData = new FormData();
        formData.append('image', file);
        return myAxios.post<{imageUrl:string}>("/img", formData);
    }
    deleteImageLink = () =>
        myAxios.delete<{imageUrl:string}>("/img");
}
