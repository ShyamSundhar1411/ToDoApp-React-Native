import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Text,
} from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
export const ToDoDisplayScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.androidSafeArea}>
        <Text>Good Morning Shyam</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
