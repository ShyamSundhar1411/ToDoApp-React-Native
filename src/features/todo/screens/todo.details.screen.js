import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
} from "react-native";

export const ToDoDetailScreen = ({ route }) => {
  const { todo } = route.params;
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text>{todo.title}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
