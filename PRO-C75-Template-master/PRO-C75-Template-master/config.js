import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDvwYOvbFWsulzl4Ei2rAZjnAB73TRBwSw",
  authDomain: "bicycleapp-c0ca4.firebaseapp.com",
  projectId: "bicycleapp-c0ca4",
  storageBucket: "bicycleapp-c0ca4.appspot.com",
  messagingSenderId: "290244139938",
  appId: "1:290244139938:web:ced08f946d1399f7a6f0fb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
