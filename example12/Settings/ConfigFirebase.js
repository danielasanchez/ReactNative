//import firebase from 'firebase/app';
//import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config={
    // your information from the firebase database

}

//const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()
//export default fb;

const app = initializeApp(config);
export const firebase = getDatabase(app);




