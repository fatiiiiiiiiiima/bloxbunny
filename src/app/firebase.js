// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDmPWsElXjydkvwJmvlb6EEGNfyPXKJNOs",
  authDomain: "bloxbunny.firebaseapp.com",
  databaseURL: "https://bloxbunny-default-rtdb.firebaseio.com",
  projectId: "bloxbunny",
  storageBucket: "bloxbunny.appspot.com",
  messagingSenderId: "634741711378",
  appId: "1:634741711378:web:9c16600b8d9b95da0beecb",
  measurementId: "G-ECQRFJQYD3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
  auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
};
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
      await firebaseSignOut(auth);
  } catch (error) {
      throw error;
  }
};