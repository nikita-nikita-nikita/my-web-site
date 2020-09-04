import {firestore} from "firebase-admin";
import {users} from "../../config/fbConfig";
import BaseInterface from "./baseInterface";
import {encrypt, compare} from "../../helpers/crypt";
import { v4 as uuidv4 } from 'uuid';

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

export interface NoPassword{
    email:string
    phoneNumber?:string
    username?:string
    photoURL?:string
    uuid:string
}

class FbAuthRepository implements BaseInterface{
    async create (userData:BaseUserData): Promise<firestore.WriteResult>{
        const uuid = uuidv4();
        return users.doc(uuid).set({...userData, uuid});
    }

    async delete(uuid: string): Promise<firestore.WriteResult>{
        return users.doc(uuid).delete();
    }

    async update(uuid: string, data: AllUserData): Promise<firestore.WriteResult>{
        return users.doc(uuid).update(data);
    }

    async getById(uuid: string): Promise<AllUserData|null>{
        const doc = await users.doc(uuid).get();
        return (doc.exists ? doc.data() as AllUserData : undefined);
        // const user = user.docs[0].data() as AllUserData;
        // return {email, uuid, username, photoURL, phoneNumber};
    }

    async getByEmail(email: string): Promise<AllUserData | null>{
        const user = await users.where('email', '==', email).get();
        if(!user.size) return null;
        return user.docs[0].data() as AllUserData;
    }

    async getWithoutPasswordById(id:string):Promise<NoPassword|null>{
        const user = await this.getById(id);
        if(!user) return null;
        const {email, uuid, username, photoURL, phoneNumber} = user;
        return {email, uuid, username, photoURL, phoneNumber};
    }

}

export default new FbAuthRepository();
