import {Action, Dispatch} from "redux";
import { EventType } from "react-notifications";

export type Notification = {
    message:string
    type:"error"|"info"
}

export interface ActionType extends Action<string>{
    payload:Notification
}

export type NotificationDispatch = Dispatch<ActionType>;

export type initialStateNotificationType = Notification;

export default (
    state:initialStateNotificationType|null = null,
    action:ActionType) => {
    switch (action.type){
        case "SET_NOTIFICATION":
            return action.payload;
        default:
            return state;
    }
}
