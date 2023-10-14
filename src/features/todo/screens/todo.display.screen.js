import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  FlatList,
} from "react-native";
import { SearchBarComponent } from "../components/SearchComponent";
import { CarouselComponent } from "../components/CarouselComponent";
import { GreetingComponent } from "../components/GreetingComponent";
import { sampleImages } from "../../../data/sampleData";
import { todoItems } from "../../../data/sampleTodo";
import { ToDoTileComponent } from "../components/ToDoTileComponent";
import { SearchBoxContainer } from "../../../components/styles/styles";

export const ToDoDisplayScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <GreetingComponent userName="Shyam" />
        <SearchBoxContainer>
          <SearchBarComponent />
        </SearchBoxContainer>
        <CarouselComponent data={sampleImages} />
        <FlatList
          data={todoItems}
          renderItem={({ item }) => {
            return <ToDoTileComponent todo={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
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
