import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../Firebase.config";
export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signUpRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logoutRequest = () => signOut();
