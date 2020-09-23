import {users} from "../../config/fbConfig";
import BaseClass from "./baseRepository";

export interface BaseUserData {
    password:string
    email:string
}

export interface AllUserData extends BaseUserData{
    phoneNumber?:string
    username?:string
    imageUrl?:string
    uuid:string
}

export interface NoPassword{
    email:string
    phoneNumber?:string
    username?:string
    imageUrl?:string
    uuid:string
}

class FbAuthRepository extends BaseClass<BaseUserData, AllUserData>{
    // Base methods if need to overwrite them
    // Custom methods
    async getByEmail(email: string): Promise<AllUserData | null>{
        const user = await users.where('email', '==', email).get();
        if(!user.size) return null;
        return user.docs[0].data() as AllUserData;
    }

    async getWithoutPasswordById(id:string):Promise<NoPassword|null>{
        const user = await this.getById(id);
        if(!user) return null;
        const {email, uuid, username, imageUrl, phoneNumber} = user;
        return {email, uuid, username, imageUrl, phoneNumber};
    }

}
export default new FbAuthRepository(users);
