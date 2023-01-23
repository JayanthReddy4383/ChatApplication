import firebase from 'firebase/app';  // Always at first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

try{
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
        measurementId: process.env.REACT_APP_measurementId
    });
}
catch (error){
    if(!/already exists/u.test(error.message)){
        console.error('Firebase admin initialization error',error.stack);
    
    }
}


export const fb ={
    auth: firebase.auth(),
    storage: firebase.storage(),
    firestore: firebase.firestore(),
};

