import {Action} from "redux";

export type card = {
    link: string,
    title: string
}

export type initialStateTechnologiesType = Array<card>;
interface ActionType extends Action{
    payload: Array<card>
}

export default (state: initialStateTechnologiesType = [], action: ActionType) => {
    switch (action.type){
        case "LOAD_TECHNOLOGIES":
            return action.payload;
    }
    return state;
}


