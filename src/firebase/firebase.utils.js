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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (
    collectionKey, 
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        console.log(newDocRef);
    })

    return await batch.commit();
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
