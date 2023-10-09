import firebase from 'firebase/App';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXVlRIhHEEaBhLJVeLhApJgxPIv00EWX0",
  authDomain: "whatsapp-clone-2ac4e.firebaseapp.com",
  projectId: "whatsapp-clone-2ac4e",
  storageBucket: "whatsapp-clone-2ac4e.appspot.com",
  messagingSenderId: "816726071264",
  appId: "1:816726071264:web:efc8b1d190ff1ecd7b3d85",
  measurementId: "G-PM6ZS9BYEX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
export default firebaseApp;
