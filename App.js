import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation/index";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.services";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
          <ExpoStatusBar style="auto" />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
