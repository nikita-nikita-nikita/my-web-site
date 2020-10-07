import {
    LOAD_RANDOM_OBJECTS,
    PUT_RANDOM_OBJECTS,
    LOAD_SW_LIST,
    PUT_SW_LIST,
    LOAD_SW_STARSHIP,
    LOAD_SW_PERSON,
    LOAD_SW_PLANET,
    PUT_SW_CHARACTER
} from "./actionTypes";

//  eslint-disable-next-line @typescript-eslint/no-unused-vars
import {allObjectsType, swList, person, planet, starship} from "./reducer";

export const loadList = (template:string) => () => ({
    type: LOAD_SW_LIST,
    payload: template
});
export const putList = (list:swList) => ({
    type: PUT_SW_LIST,
    payload: list
});

export const deleteList = () => ({
    type: PUT_SW_LIST,
    payload: null
});

export const loadRandomObjects = () => ({
    type: LOAD_RANDOM_OBJECTS
});
export const putRandomObjects = (objects:allObjectsType) => ({
    type: PUT_RANDOM_OBJECTS,
    payload: objects
});

export const loadPerson = (id: number) => ({
    type: LOAD_SW_PERSON,
    payload: id
});
export const putPersons = (person: person) => ({
    type: PUT_SW_CHARACTER,
    payload: {person}
});

export const loadPlanet = (id: number) => ({
    type: LOAD_SW_PLANET,
    payload: id
});
export const putPlanet = (planet: planet) => ({
    type: PUT_SW_CHARACTER,
    payload: {planet}
});

export const loadStarship = (id: number) => ({
    type: LOAD_SW_STARSHIP,
    payload: id
});
export const putStarship = (starship: starship) => ({
    type: PUT_SW_CHARACTER,
    payload: {starship}
});
