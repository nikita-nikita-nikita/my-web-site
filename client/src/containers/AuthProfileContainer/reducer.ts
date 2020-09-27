import {Action, Dispatch} from "redux";

export type Profile = {
    uuid:string
    email: string
    imageUrl?: string
    phoneNumber?: string
    username?: string
    emailVerified?: string,
}

export interface ActionType extends Action<string>{
    payload:Profile|{}
}

export type ProfileDispatch = Dispatch<ActionType>

export type initialStateProfileType = Profile;

export default (state:initialStateProfileType|{} = {}, action:ActionType) => {
    switch (action.type){
        case "PUT_PROFILE":
            return action.payload;
        case "PUT_IMAGE":
            console.log(action.payload);
            return {...state, imageUrl:action.payload};
        default:
            return state;
    }
}
