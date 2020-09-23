import axios from 'axios';
import { imgurId } from '../../config/imgurConfig';
import {BaseImageType} from "../../data/repositories/fbImageRepository";

export const uploadToImgur = async (file:any)=> {
    try {
        const { data: { data } } = await axios.post<{data:{link:string, deletehash:string}}>(
            'https://api.imgur.com/3/upload',
            {
                image: file.buffer.toString('base64')
            }, {
                headers: { Authorization: `Client-ID ${imgurId}` }
            }
        );
        return {
            link: data.link,
            deleteHash: data.deletehash
        };
    } catch ({ response: { data: { status, data } } }) { // parse Imgur error
        return Promise.reject({ status, message: data.error });
    }
};
