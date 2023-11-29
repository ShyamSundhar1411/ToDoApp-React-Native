import React from "react";
import { Text, View } from "react-native";
import { ToDoTile } from "./styles/styles";
import { List } from "react-native-paper";

export const ToDoTileComponent = ({ todo }) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Title = ({ children, completed }) => (
    // eslint-disable-next-line react-native/no-inline-styles
    <Text style={{ textDecorationLine: completed ? "line-through" : "none" }}>
      {children}
    </Text>
  );
  return (
    <View>
      <ToDoTile
        title={<Title completed={todo.completed}>{todo.title}</Title>}
        // eslint-disable-next-line react/no-unstable-nested-components
        left={(props) => (
          <List.Icon
            icon={todo.completed ? "check" : "circle-outline"}
            filled={!todo.completed}
            color={todo.completed ? "green" : "rgba(255,255,255,0.7)"}
          />
        )}
      />
    </View>
  );
};
