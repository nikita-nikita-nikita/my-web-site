interface defaultData {
    img:string
    id:string
    name:string
}

export interface person extends defaultData{
    height:string
    eyeColor:string
    gender:string
}

export interface planet extends defaultData {
    diameter:number
    population:number
    rotationPeriod:number
}

export interface starship extends defaultData {
    model:string
    costInCredits:number
    starshipClass:number
}

type swListElementType = {
    id:number
    name:string
}

export type swList = Array<swListElementType>;
export type allObjectsType = {
    planet?:planet,
    person?:person,
    starship?:starship
}
export type initialStateSWType = {
    object?:allObjectsType
    list?:swList
    randomObjects?: allObjectsType
}

const initialState:initialStateSWType = {
    object:{},
    list:[],
    randomObjects:{}
}
export default (state:initialStateSWType = initialState, action:any) => {
    switch (action.type) {
        case "PUT_SW_LIST":
            return {
                ...state,
                list:action.payload
            }
        case "PUT_SW_CHARACTER":
            return {
                ...state,
                object:{...state.object, ...action.payload}
            }
        case "PUT_RANDOM_OBJECTS":
            return {
                ...state,
                randomObjects:action.payload
            }
        default:
            return state;
    }
}
