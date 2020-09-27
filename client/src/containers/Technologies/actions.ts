import {LOAD_TECHNOLOGIES} from "./actionTypes";
import {Dispatch} from "redux";
import {card} from "./reducer";
import {getTechnologiesRequest} from "../../service/myApiService";

const loadTechnologiesAction = (Technologies:Array<card>) => ({
    type: LOAD_TECHNOLOGIES,
    payload: Technologies
})

export const loadTechnologies = () => async (dispatch:Dispatch) => {
    const {data} = await getTechnologiesRequest();
    dispatch(loadTechnologiesAction(data))
}

export const deleteTechnologies = () => async (dispatch:Dispatch) => {
    dispatch(loadTechnologiesAction([]))
}
