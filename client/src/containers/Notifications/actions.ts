import {NotificationDispatch as Dispatch} from "./reducer";
import {SET_NOTIFICATION} from "./actionTypes";

export const setError = (errorMessage:string) => (dispatch:Dispatch) => {
    dispatch(
        {
                type:SET_NOTIFICATION,
                payload:{message:errorMessage, type:"error"}
            }
        );
}

export const setInfo = (message:string) => (dispatch:Dispatch) => {
    dispatch(
        {
                type:SET_NOTIFICATION,
                payload:{message:message, type:"info"}
            }
        );
}
