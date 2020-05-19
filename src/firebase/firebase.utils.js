import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNEfoRRzv2THh1qlYRh4fjuRhN3VUxipo",
    authDomain: "crwn-db-c411d.firebaseapp.com",
    databaseURL: "https://crwn-db-c411d.firebaseio.com",
    projectId: "crwn-db-c411d",
    storageBucket: "crwn-db-c411d.appspot.com",
    messagingSenderId: "1093017996378",
    appId: "1:1093017996378:web:d5fe4f8a23ae9d242c5c63",
    measurementId: "G-LDX4R68GD8"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
