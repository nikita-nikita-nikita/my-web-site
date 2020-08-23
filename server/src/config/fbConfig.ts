import admin, {ServiceAccount} from "firebase-admin";
import serviceAccount from "./nikita-bludov-web-site-firebase-adminsdk.json";
import {AllUserData} from "../data/repositories/fbAuthRepository";


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
    databaseURL: "https://nikita-bludov-web-site.firebaseio.com"
});

export const users = admin.firestore().collection("users");
