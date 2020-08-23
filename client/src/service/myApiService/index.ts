import axios from 'axios';
import {card} from "../../containers/Technologies/reducer";
import {Profile} from "../../containers/ProfileContainer/reducer";

const myApiServiceBaseUrl = "http://localhost:8080/";
export type BaseRequestDataType = {
    email:string
    password:string
}
export const getTechnologies  = () => axios.get<Array<card>>(`${myApiServiceBaseUrl}api/technologies`);

export const loginRequest = (loginData:BaseRequestDataType) => axios.post(`${myApiServiceBaseUrl}api/auth/login`, loginData);

export const registerRequest = (registerData:BaseRequestDataType) => axios.post(`${myApiServiceBaseUrl}api/auth/register`, registerData);
