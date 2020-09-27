import {PUT_PROFILE, PUT_IMAGE} from "./actionTypes";
import {AxiosResponse} from "axios";
import {GetRootStateType} from "../../store";
import {
    loginRequest,
    registerRequest,
    loadCurrentUserRequest,
    changeUserRequest,
    deleteUserRequest,
    BaseRequestDataType,
    ResponseDataType,
    saveImage
} from "../../service/myApiService";
import {ProfileDispatch as Dispatch} from "./reducer";

const setToken = (token:string) => localStorage.setItem("token", token);

type ApiFuncPostOrPut = (data:BaseRequestDataType)=>Promise<AxiosResponse<ResponseDataType>>;

type ApiFuncGet = () => Promise<AxiosResponse<ResponseDataType>>;

const putUserToState = async (dispatch:Dispatch, apiFunction: ApiFuncPostOrPut|ApiFuncGet, userData?:BaseRequestDataType):Promise<void> => {
    // @ts-ignore
    const {data:{token, user}} = await apiFunction(userData);
    setToken(token);
    dispatch({
        type: PUT_PROFILE,
        payload: user
    })
}

const deleteUserFromState = (dispatch: Dispatch) => {
    localStorage.removeItem("token");
    dispatch({
        type: PUT_PROFILE,
        payload: {}
    })
}

export const login = (userData:BaseRequestDataType) => async (dispatch:Dispatch) =>
    putUserToState(dispatch, loginRequest, userData);

export const register = (userData:BaseRequestDataType) => async (dispatch:Dispatch) =>
    putUserToState(dispatch, registerRequest, userData);

export const getCurrentUser = () => async (dispatch:Dispatch) =>
    putUserToState(dispatch, loadCurrentUserRequest);

export const change = (userData:BaseRequestDataType) => async (dispatch:Dispatch) =>
    putUserToState(dispatch, changeUserRequest, userData);

export const signOut = () => (dispatch:Dispatch) => deleteUserFromState(dispatch);

export const del = (password:string) => async (dispatch:Dispatch, getRootState:GetRootStateType) => {
    await deleteUserRequest(getRootState().profile.uuid, password);
    deleteUserFromState(dispatch);
};

export const saveChangedImage = (imageUrl:string) => async (dispatch:Dispatch) => {
    const {data: {message}} = await saveImage();
    if (message) dispatch({
        type:PUT_IMAGE,
        payload:imageUrl
    });
}
