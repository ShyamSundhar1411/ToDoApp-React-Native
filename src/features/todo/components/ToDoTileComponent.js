import React from "react";
import { Text, View } from "react-native";
import { ToDoTileView } from "./styles/styles";

export const ToDoTileComponent = ({ todo }) => {
  return (
    <View>
      <ToDoTileView>
        <Text>{todo.title}</Text>
      </ToDoTileView>
    </View>
  );
};
