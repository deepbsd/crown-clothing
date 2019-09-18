import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAMB_2NDVWrARCXg402bhAx0b2ZQm33nck",
    authDomain: "crownclothingdb-53e09.firebaseapp.com",
    databaseURL: "https://crownclothingdb-53e09.firebaseio.com",
    projectId: "crownclothingdb-53e09",
    storageBucket: "",
    messagingSenderId: "343856483988",
    appId: "1:343856483988:web:515ba7454aacbf49cfee81"
};


firebase.initializeApp(config)

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
