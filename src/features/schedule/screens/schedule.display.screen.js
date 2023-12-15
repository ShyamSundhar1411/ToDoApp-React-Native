import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { DateSliderComponent } from "../components/DateSliderComponent";
export const ScheduleDisplayScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <DateSliderComponent />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
