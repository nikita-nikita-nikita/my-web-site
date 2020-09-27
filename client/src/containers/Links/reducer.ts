import {Action} from "redux";
export type linkCard = {
    avatar: string
    linkToProfile: string
    name: string
    nickname: string
};

export type initialStateLinksType = Array<linkCard>;
interface ActionType extends Action {
    payload: Array<linkCard>;
}
export default (state:initialStateLinksType = [], action:ActionType) => {
    switch (action.type) {
        case "LOAD_POSTS":
            return action.payload;
        case "DELETE_POSTS":
            return [];
        default:
            return state;
    }
}
