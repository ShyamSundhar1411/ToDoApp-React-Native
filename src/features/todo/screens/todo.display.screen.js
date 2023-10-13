import React from "react";
import { StyleSheet, StatusBar, Platform, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { SearchBarComponent } from "../components/Search";
import { CarouselComponent } from "../components/CarouselComponent";
import { GreetingComponent } from "../components/GreetingComponent";
import { ENTRIES1 } from "../../../data/sampleData";

const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const ToDoDisplayScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <GreetingComponent userName="Shyam" />
        <SearchBoxContainer>
          <SearchBarComponent />
          <CarouselComponent data={ENTRIES1} />
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
