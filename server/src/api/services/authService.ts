import fbAuthService, {AllUserData} from "../../data/repositories/fbAuthRepository";

export const registerUser = async (user:AllUserData):Promise<AllUserData> => {
    const data = await fbAuthService.create(user);
    return data;
}
