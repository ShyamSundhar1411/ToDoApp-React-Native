import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Text,
} from "react-native";
import styled from "styled-components/native";
import { SearchBarComponent } from "../components/Search";
const GreetingText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h3};
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[5]};
`;
const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const ToDoDisplayScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <GreetingText>Good Morning Shyam</GreetingText>
        <SearchBoxContainer>
          <SearchBarComponent />
        </SearchBoxContainer>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
