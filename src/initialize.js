import firebase from "firebase/app";

const { 
    apiKey, 
    authDomain, 
    projectId, 
    storageBucket, 
    messagingSenderId, 
    appId, 
    measurementId 
} = require("./firebaseInit.json");

export default function Init() {
    firebase.initializeApp({
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId,
        measurementId: measurementId
    });
}
