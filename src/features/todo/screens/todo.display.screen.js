import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Text,
} from "react-native";

export const ToDoDisplayScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text>Good Morning Shyam</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
