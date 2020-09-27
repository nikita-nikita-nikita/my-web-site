import fbAuthRepository, {AllUserData, NoPassword} from "../../data/repositories/fbAuthRepository";
import {createToken} from "../../helpers/jwtHelper";
import {encrypt} from "../../helpers/crypt";
import {compare} from "../../helpers/crypt";
import { v4 as uuidv4 } from 'uuid';

type ResponseType = {
    user: NoPassword,
    token: string
}

export const login = async ({ uuid }:AllUserData):Promise<ResponseType> => ({
    token: createToken({ uuid }),
    user: await fbAuthRepository.getById(uuid)
});

export const registerUser = async (user:AllUserData):Promise<ResponseType|null> => {
    const uuid = uuidv4();
    await fbAuthRepository.create({...user, password: await encrypt(user.password)}, uuid);
    const addedUser = await fbAuthRepository.getByEmail(user.email);
    return login(addedUser);
}

export const changeUser = async (uuid:string, user:AllUserData):Promise<ResponseType|null> => {
    await fbAuthRepository.update(uuid,
        user.password ?{...user, password:await encrypt(user.password)}:{...user});
    const changedUser = await fbAuthRepository.getById(user.uuid);
    return login(changedUser);
}

export const deleteUser = async (uuid:string, password:string) => {
    const user = await fbAuthRepository.getById(uuid);
    if(!user) throw {status:401, message:'User doesn\'t exist'};
    if(!await compare(password, user.password) ) throw {status:401, message:'Incorrect password'};
    return fbAuthRepository.delete(uuid);
}
