import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC9ZU1xBfFM4xjRx_Wfw_k7U55ixbwUjHM",
    authDomain: "caocap-x.firebaseapp.com",
    databaseURL: "https://caocap-x.firebaseio.com",
    projectId: "caocap-x",
    storageBucket: "caocap-x.appspot.com",
    messagingSenderId: "358799497477",
    appId: "1:358799497477:web:2dbb1bb504ecbf98277f6c",
    measurementId: "G-1484L9L8E6"

});
export const database = app.database()
export const auth = app.auth()
export default app