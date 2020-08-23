import {PUT_PROFILE} from "./actionTypes";
import {Dispatch} from "redux";
import {Profile, ActionType} from "./reducer";
import {loginRequest, registerRequest, BaseRequestDataType} from "../../service/myApiService";

const putUser = (user:Profile):ActionType => (
    {
        type:PUT_PROFILE,
        payload:user
    }
)

export const login = (userData:BaseRequestDataType) => async (dispatch:Dispatch<ActionType>) =>{
    console.log("login", userData);
    const response = await loginRequest(userData);
    console.log(response);
}
export const register = (userData:BaseRequestDataType) => async (dispatch:Dispatch<ActionType>) =>{
    console.log("register data", userData);
    const response = await registerRequest(userData);
    console.log(response);
    if(response.data.message) throw new Error(response.data.message);
}
