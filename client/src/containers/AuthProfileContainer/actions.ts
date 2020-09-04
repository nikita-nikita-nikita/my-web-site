import {PUT_PROFILE} from "./actionTypes";
import thunk, {ThunkAction} from "redux-thunk";
import {AxiosResponse} from "axios";
import {Dispatch} from "redux";
import {ActionType} from "./reducer";
import {GetRootStateType} from "../../store";
import {
    loginRequest,
    registerRequest,
    loadCurrentUserRequest,
    changeUserRequest,
    deleteUserRequest,
    BaseRequestDataType,
    ResponseDataType
} from "../../service/myApiService";

const setToken = (token:string) => localStorage.setItem("token", token);

type ApiFuncPostOrPut = (data:BaseRequestDataType)=>Promise<AxiosResponse<ResponseDataType>>;

type ApiFuncGet = () => Promise<AxiosResponse<ResponseDataType>>;

const putUserToState = async (dispatch:Dispatch<ActionType>, apiFunction: ApiFuncPostOrPut|ApiFuncGet, userData?:BaseRequestDataType):Promise<void> => {
    // @ts-ignore
    const {data:{token, user}} = await apiFunction(userData);
    setToken(token);
    dispatch({
        type: PUT_PROFILE,
        payload: user
    })
}

const deleteUserFromState = (dispatch: Dispatch<ActionType>) => {
    localStorage.removeItem("token");
    dispatch({
        type: PUT_PROFILE,
        payload: {}
    })
}

export const login = (userData:BaseRequestDataType) => async (dispatch:Dispatch<ActionType>) =>
    putUserToState(dispatch, loginRequest, userData);

export const register = (userData:BaseRequestDataType) => async (dispatch:Dispatch<ActionType>) =>
    putUserToState(dispatch, registerRequest, userData);

export const getCurrentUser = () => async (dispatch:Dispatch<ActionType>) =>
    putUserToState(dispatch, loadCurrentUserRequest);

export const change = (userData:BaseRequestDataType) => async (dispatch:Dispatch<ActionType>) =>
    putUserToState(dispatch, changeUserRequest, userData);

export const signOut = () => (dispatch:Dispatch<ActionType>) => deleteUserFromState(dispatch);

export const del = (password:string) => async (dispatch:Dispatch<ActionType>, getRootState:GetRootStateType) => {
    await deleteUserRequest(getRootState().profile.uuid, password);
    deleteUserFromState(dispatch);
}
