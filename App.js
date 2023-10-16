import React from "react";
import * as firebase from "firebase";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { ToDoDisplayScreen } from "./src/features/todo/screens/todo.display.screen";
import { theme } from "./src/infrastructure/theme";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASURE_ID,
} from "react-native-dotenv";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.services";
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASURE_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <ToDoDisplayScreen />
          <ExpoStatusBar style="auto" />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
