
import * as firebase from "firebase/app";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA89-IMEI0PP8YB3H5zWqMkg3ZvTRWoGiQ",
    authDomain: "beaming-theorem-269908.firebaseapp.com",
    databaseURL: "https://beaming-theorem-269908.firebaseio.com",
    projectId: "beaming-theorem-269908",
    storageBucket: "beaming-theorem-269908.appspot.com",
    messagingSenderId: "1035141791361",
};
const fire = firebase.initializeApp(firebaseConfig);
// let messageRef = firebase.database()
// console.log(firebase)
// db.collection("users").doc("9Ew4kuGJS9FFInNHuvBG")
//     .onSnapshot(function (doc) {
//         console.log("Current data: ", doc.data());
//     });
export default fire;