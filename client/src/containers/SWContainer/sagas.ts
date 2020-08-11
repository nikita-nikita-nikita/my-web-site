import SWApiService from "../../service/swapiService";
import {LOAD_RANDOM_OBJECTS, LOAD_SW_LIST, LOAD_SW_PERSON, LOAD_SW_PLANET, LOAD_SW_STARSHIP} from "./actionTypes";
import {person, starship, planet, swList} from "./reducer";
import {putRandomObjects, putList, putPersons, putPlanet, putStarship} from "./actions";
import { takeEvery, put, call } from "redux-saga/effects";
function randomInteger(min:number, max:number):number {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function* workerLoadRandomObjects() {
    const person:person = yield call(()=>SWApiService.getPerson(randomInteger(1,10)));
    const planet:planet = yield call(()=>SWApiService.getPlanet(randomInteger(1,10)));
    const validNumbers = [2,3,5,7,9,10,11,12,13];
    const starship:starship = yield call(()=>SWApiService.getStarship(validNumbers[randomInteger(0,8)]));
    yield put(putRandomObjects({planet, starship, person}));
}

function* workerLoadPersonList(action:any) {
    const persons:swList = yield call(()=>SWApiService.getAllObjects(action.payload));
    yield put(putList(persons));
}

function* workerLoadPerson(action:any){
    const person:person = yield call(()=>SWApiService.getPerson(action.payload));
    yield put(putPersons(person))
}
function* workerLoadPlanet(action:any){
    const planet:planet = yield call(()=>SWApiService.getPlanet(action.payload));
    yield put(putPlanet(planet))
}
function* workerLoadStarship(action:any){
    const starship:starship = yield call(()=>SWApiService.getStarship(action.payload));
    yield put(putStarship(starship));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_RANDOM_OBJECTS, workerLoadRandomObjects);
    yield takeEvery(LOAD_SW_LIST, workerLoadPersonList);
    yield takeEvery(LOAD_SW_PERSON, workerLoadPerson);
    yield takeEvery(LOAD_SW_PLANET, workerLoadPlanet);
    yield takeEvery(LOAD_SW_STARSHIP, workerLoadStarship);
}
