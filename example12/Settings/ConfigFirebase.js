import firebase from 'firebase/app';
import 'firebase/database';

const config={
    // your information from the firebase database

}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;