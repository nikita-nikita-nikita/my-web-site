import * as firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBoRXGQFU7xGvLMF2MT5Y64OnE9ln6tu5w",
    authDomain: "nikita-bludov-web-site.firebaseapp.com",
    databaseURL: "https://nikita-bludov-web-site.firebaseio.com",
    projectId: "nikita-bludov-web-site",
    storageBucket: "nikita-bludov-web-site.appspot.com",
    messagingSenderId: "50656326860",
    appId: "1:50656326860:web:f12ef0a995e35d57e7fe69"
};
const fbApp = firebase.initializeApp(firebaseConfig).auth();
export default fbApp;
