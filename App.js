import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { ToDoDisplayScreen } from "./src/features/todo/screens/todo.display.screen";
import { theme } from "./src/infrastructure/theme";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToDoDisplayScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
