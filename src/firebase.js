import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0CmyL1P-TLof9BVXwi3ZasVovmjTHWnM",
  authDomain: "todo-app2-91ac5.firebaseapp.com",
  databaseURL: "https://todo-app2-91ac5.firebaseio.com",
  projectId: "todo-app2-91ac5",
  storageBucket: "todo-app2-91ac5.appspot.com",
  messagingSenderId: "990333145452",
  appId: "1:990333145452:web:7c2d124adacd58c29c2349",
  measurementId: "G-XQMX6RR4NJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
