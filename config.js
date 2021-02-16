import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBQAGQ9aUY_bWeBqcWZ5nWK4p-rVgdCbAc",
    authDomain: "story-hub-a31c4.firebaseapp.com",
    databaseURL: "https://story-hub-a31c4-default-rtdb.firebaseio.com",
    projectId: "story-hub-a31c4",
    storageBucket: "story-hub-a31c4.appspot.com",
    messagingSenderId: "267337781694",
    appId: "1:267337781694:web:c40b2897ca52352eba69ef"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase.firestore();