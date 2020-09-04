import {Action} from "redux";

export type Profile = {
    uuid:string
    email: string
    imgUrl?: string
    phoneNumber?: string
    username?: string
    emailVerified?: string,
}

export interface ActionType extends Action<string>{
    payload:Profile|{}
}

export type initialStateProfileType = Profile;

export default (state:initialStateProfileType|{} = {}, action:ActionType) => {
    switch (action.type){
        case "PUT_PROFILE":
            return action.payload;
        default:
            return state;
    }
}
