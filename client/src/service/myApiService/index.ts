import axios from 'axios';
import {card} from "../../containers/Technologies/reducer";
import {Profile} from "../../containers/AuthProfileContainer/reducer";

const myApiServiceBaseUrl = "http://localhost:8080/api";
export type BaseRequestDataType = {
    email:string
    password:string
}

export type ResponseDataType = {
    token:string
    user:Profile
};

const myAxios = axios.create({
    baseURL: myApiServiceBaseUrl,
    headers: {token:window.localStorage.getItem("token")}
});

export const getTechnologiesRequest  = () =>
    myAxios.get<Array<card>>(`/technologies`);

export const loginRequest = (loginData:BaseRequestDataType) =>
    myAxios.post<ResponseDataType>('/auth/login', loginData);

export const registerRequest = (registerData:BaseRequestDataType) =>
    myAxios.post<ResponseDataType>('/auth/register', registerData);

export const changeUserRequest = (userData:BaseRequestDataType) =>
    myAxios.put<ResponseDataType>('/auth/change', userData);

export const loadCurrentUserRequest = () =>
    myAxios.get<ResponseDataType>('/auth/user');

export const deleteUserRequest = (uuid:string, password:string) =>
    myAxios.delete<ResponseDataType>(`/auth/user${uuid}`,{headers: {password}});

export const saveImage = () =>
    myAxios.patch<{imageUrl:string}>(`/img`);

export default myAxios;
