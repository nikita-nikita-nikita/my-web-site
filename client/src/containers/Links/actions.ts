import {
    DELETE_POSTS,
    LOAD_POSTS
} from './actionTypes';

import apiLinksService from "../../service/apiLinksService";

export const loadLinks = () => async (dispatch:any) =>{
    console.log("load");
    dispatch({type:LOAD_POSTS, payload:[(await apiLinksService.getGithub()),(await apiLinksService.getInstagram()),(await apiLinksService.getGmail()),(await apiLinksService.getTelegram())]})
    return {}
}
apiLinksService.getGithub();

export const deleteLinks = () => (dispatch:any) =>{
    dispatch({type:DELETE_POSTS})
}
