import React, { useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { List } from "react-native-paper";
import { SearchBarComponent } from "../components/SearchComponent";
import { GreetingComponent } from "../components/GreetingComponent";
import { categories } from "../../../data/categoryData";
import { SearchBoxContainer } from "../../../components/styles/styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TodoContext } from "../../../services/todo/todo.context";
import { Loader } from "../../../components/Loader";
import { Spacer } from "../../../components/Spacer";
import { CategoryComponent } from "../components/CategoryComponent";
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
          <View style={{ justifyContent: "space-evenly", padding: 25 }}>
            <FlatList
              data={categories}
              numColumns={2}
              renderItem={({ item }) => {
                return <CategoryComponent category={item} />;
              }}
              keyExtractor={(item) => item.name}
            />
          </View>

          {/* <FlatList
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
                  <List.Item
                    title={item.title}
                    left={(props) => <List.Icon {...props} icon="file" />}
                    right={(props) => <List.Icon {...props} icon="star" />}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.createdAt}
          /> */}
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
