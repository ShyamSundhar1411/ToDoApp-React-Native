import React, { useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SearchBarComponent } from "../components/SearchComponent";
import { CarouselComponent } from "../components/CarouselComponent";
import { GreetingComponent } from "../components/GreetingComponent";
import { sampleImages } from "../../../data/sampleData";
import { ToDoTileComponent } from "../components/ToDoTileComponent";
import { SearchBoxContainer } from "../../../components/styles/styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TodoContext } from "../../../services/todo/todo.context";
import { Loader } from "../../../components/Loader";
import { Spacer } from "../../../components/Spacer";
export const ToDoDisplayScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const { todos, isLoading, error } = useContext(TodoContext);
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <GreetingComponent userName={user ? user.email : "Test User"} />
          <SearchBoxContainer>
            <SearchBarComponent />
          </SearchBoxContainer>
          <CarouselComponent data={sampleImages} navigation={navigation} />
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ToDoDetail", {
                      todo: item,
                    })
                  }
                >
                  <ToDoTileComponent todo={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.createdAt}
          />
        </>
      )}
      <Spacer size="large" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
