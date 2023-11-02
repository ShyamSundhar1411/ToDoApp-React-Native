import React from "react";
import { Text } from "react-native";
import { TileView } from "../../../components/styles/styles";

export const ToDoTileComponent = ({ todo }) => {
  return (
    <TileView>
      <Text>{todo.title}</Text>
      <Text>{todo.task}</Text>
      <Text>Is Important: {todo.isImportant ? "Yes" : "No"}</Text>
      <Text>Created At: {todo.createdAt.toDate().toString()}</Text>
      <Text>Completed: {todo.completed ? "Yes" : "No"}</Text>
    </TileView>
  );
};
