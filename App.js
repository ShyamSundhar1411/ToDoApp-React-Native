import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ToDoDisplayScreen } from "./src/features/todo/screens/todo.display.screen";
export default function App() {
  return (
    <>
      <ToDoDisplayScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
