import SWApiService from "../../service/swapiService";
import {LOAD_RANDOM_OBJECTS, LOAD_SW_LIST, LOAD_SW_PERSON, LOAD_SW_PLANET, LOAD_SW_STARSHIP} from "./actionTypes";
import {putRandomObjects, putList, putPersons, putPlanet, putStarship} from "./actions";
import { takeEvery, put, call } from "redux-saga/effects";
import {randomInteger} from "../../helpers/randomNumber";

function* workerLoadRandomObjects() {
    const person = yield call(()=>SWApiService.getPerson(randomInteger(1,10)));
    const planet = yield call(()=>SWApiService.getPlanet(randomInteger(2,10)));
    const validNumbers = [5,9,10];
    const starship = yield call(()=>SWApiService.getStarship(validNumbers[randomInteger(0,2)]));
    yield put(putRandomObjects({planet, starship, person}));
}
function* workerLoadPersonList(action:any) {
    const list = yield call(()=>SWApiService.getAllObjects(action.payload));
    yield put(putList(list));
}

function* workerLoadPerson(action:any){
    const person = yield call(()=>SWApiService.getPerson(action.payload));
    yield put(putPersons(person))
}
function* workerLoadPlanet(action:any){
    const planet = yield call(()=>SWApiService.getPlanet(action.payload));
    yield put(putPlanet(planet))
}
function* workerLoadStarship(action:any){
    const starship = yield call(()=>SWApiService.getStarship(action.payload));
    yield put(putStarship(starship));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_RANDOM_OBJECTS, workerLoadRandomObjects);
    yield takeEvery(LOAD_SW_LIST, workerLoadPersonList);
    yield takeEvery(LOAD_SW_PERSON, workerLoadPerson);
    yield takeEvery(LOAD_SW_PLANET, workerLoadPlanet);
    yield takeEvery(LOAD_SW_STARSHIP, workerLoadStarship);
}
