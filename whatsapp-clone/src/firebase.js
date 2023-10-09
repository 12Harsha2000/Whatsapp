// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXVlRIhHEEaBhLJVeLhApJgxPIv00EWX0",
    authDomain: "whatsapp-clone-2ac4e.firebaseapp.com",
    projectId: "whatsapp-clone-2ac4e",
    storageBucket: "whatsapp-clone-2ac4e.appspot.com",
    messagingSenderId: "816726071264",
    appId: "1:816726071264:web:efc8b1d190ff1ecd7b3d85",
    measurementId: "G-PM6ZS9BYEX"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;