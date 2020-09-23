import {firestore} from "firebase-admin";
import {FirestoreCollectionReference, users} from "../../config/fbConfig";

export default interface BaseRepository<CreateDataType, DataType>{
    create(objectToCreate:CreateDataType, uuid:string):Promise<DataType>
    delete(uuid:string):Promise<firestore.WriteResult>
    update(uuidOrEmail:string, data:DataType):Promise<DataType>
    getById(uuid:string):Promise<DataType>
}

export default class BaseClass<CreateDataType, DataType> implements BaseRepository<CreateDataType, DataType>{
    constructor(private _model:FirestoreCollectionReference){}
    async create (userData:CreateDataType, uuid:string): Promise<DataType>{
        await this._model.doc(uuid).set({...userData, uuid});
        return this.getById(uuid);
    }
    async delete(uuid: string): Promise<firestore.WriteResult>{
        return this._model.doc(uuid).delete();
    }
    async update(uuid: string, data: DataType): Promise<DataType>{
        await this._model.doc(uuid).update(data);
        return this.getById(uuid);
    }
    async getById(uuid: string): Promise<DataType>{
        const doc = await users.doc(uuid).get();
        return (doc.exists ? doc.data() as DataType : undefined);
    }
}
