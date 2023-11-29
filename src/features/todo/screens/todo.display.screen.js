import React, { useContext, useRef } from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Badge } from "react-native-paper";
import { SearchBarComponent } from "../components/SearchComponent";
import { GreetingComponent } from "../components/GreetingComponent";
import { categories } from "../../../data/categoryData";
import { SearchBoxContainer } from "../../../components/styles/styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TodoContext } from "../../../services/todo/todo.context";
import { Loader } from "../../../components/Loader";
import { Spacer } from "../../../components/Spacer";
import { CategoryComponent } from "../components/CategoryComponent";
import { CategoryListView } from "../components/styles/styles";
import { ToDoTileComponent } from "../components/ToDoTileComponent";
export const ToDoDisplayScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const { todos, isLoading, error } = useContext(TodoContext);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false },
  );
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
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Categories</Text>
            <Badge style={styles.badge} size={25}>
              8
            </Badge>
            <View style={styles.textContainer}>
              <Text>See more</Text>
            </View>
          </View>
          <CategoryListView>
            <FlatList
              data={categories}
              numColumns={2}
              renderItem={({ item }) => {
                return <CategoryComponent category={item} />;
              }}
              keyExtractor={(item) => item.name}
            />
          </CategoryListView>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Today's Task</Text>
            <Badge style={styles.badge} size={25}>
              {todos.length}
            </Badge>
          </View>
          <Animated.FlatList
            onScroll={handleScroll}
            scrollEventThrottle={16}
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
  headingContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  heading: {
    marginLeft: 16,
    justifyContent: "flex-start",
    fontSize: 28,
    fontWeight: "bold",
  },
  badge: {
    marginLeft: 10,
    marginBottom: 5,
    backgroundColor: "#ddddff",
    color: "black",
    fontWeight: "bold",
  },
  textContainer: {
    marginLeft: "auto",
    marginRight: 16,
  },
});
