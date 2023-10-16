import * as firebase from "firebase/app";

export const loginRequest = (email, password) =>
  firebase.auth.signInWithEmailAndPassword(email, password);

export const signUpRequest = (email, password) =>
  firebase.auth.createUserWithEmailAndPassword(email, password);

export const logoutRequest = () => firebase.auth.signOut();