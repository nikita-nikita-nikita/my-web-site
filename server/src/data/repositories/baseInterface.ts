import {firestore} from "firebase-admin";
import {AllUserData} from "./fbAuthRepository";

export default interface BaseInterface{
    create(objectToCreate:AllUserData|any):Promise<firestore.WriteResult>
    delete(uuid:string):Promise<firestore.WriteResult>
    update(uuidOrEmail:string, data:AllUserData):Promise<firestore.WriteResult|any>
    getById(uuid:string):Promise<firestore.WriteResult|any>
}
