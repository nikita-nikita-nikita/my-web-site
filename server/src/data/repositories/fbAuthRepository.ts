import {firestore} from "firebase-admin";
import {users} from "../../config/fbConfig";
import BaseInterface from "./baseInterface";
import {encrypt, compare} from "../../helpers/crypt";
import { v4 as uuid } from 'uuid';

interface BaseUserData {
    password:string
    email:string
}
export interface AllUserData extends BaseUserData{
    phoneNumber?:string
    username?:string
    photoURL?:string
    uuid:string
}

class FbAuthRepository implements BaseInterface{
    async create (userData:BaseUserData): Promise<firestore.WriteResult|never>{
        // if(await this.getByEmail(userData.email)) throw new Error("User already exist");
        // userData.password = await encrypt(userData.password);
        return users.doc(userData.email).set({...userData, uuid: uuid()});
    }
    async delete(email: string): Promise<firestore.WriteResult>{
        return users.doc(email).delete();
    }

    async update(email: string, data: AllUserData): Promise<firestore.WriteResult>{
        return users.doc(email).update(data)
    }

    async getById(uuid: string): Promise<AllUserData|null>{
        const user = await users.where('uuid', '==', uuid).get();
        if(user.empty) return null;
        return !user.size ? user.docs[0].data() as AllUserData : null;
    }
    async getByEmail(email: string): Promise<AllUserData | null>{
        const doc = await users.doc(email).get();
        return (doc.exists ? doc.data() as AllUserData : undefined);
    }
}

export default new FbAuthRepository();
