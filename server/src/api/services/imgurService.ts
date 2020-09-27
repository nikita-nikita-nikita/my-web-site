import axios from 'axios';
import { imgurId } from '../../config/imgurConfig';

export const uploadToImgur = async (file:any) => {
    try {
        const { data: { data } } = await axios.post(
            'https://api.imgur.com/3/image',
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
    } catch ({ response: { data: { status, data } } }) {
        return Promise.reject({ status, message: data.error });
    }
};
export const deleteFromImgur = async (hash:string) => {
    try {
        return  axios.delete(
            `https://api.imgur.com/3/image/${hash}`,
            {
                headers: { Authorization: `Client-ID ${imgurId}` }
            }
        );
    } catch ({ response: { data: { status, data } } }) {
        return Promise.reject({ status, message: data.error });
    }
};
