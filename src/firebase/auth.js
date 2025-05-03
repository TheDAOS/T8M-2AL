import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./app";


const auth = getAuth(app);

export const signIn = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logOff = () => {
  return signOut(auth);
}

export const isLoggedIn = (callback) => {
  return onAuthStateChanged(auth, callback);
}