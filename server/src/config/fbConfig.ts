import admin, {ServiceAccount} from "firebase-admin";
import env from "../env";


admin.initializeApp({
    credential: admin.credential.cert(env.fb as ServiceAccount),
    databaseURL: "https://nikita-bludov-web-site.firebaseio.com"
});
export type FirestoreCollectionReference = admin.firestore.CollectionReference;
export const users:FirestoreCollectionReference = admin.firestore().collection("users");
export const images:FirestoreCollectionReference = admin.firestore().collection("images");
