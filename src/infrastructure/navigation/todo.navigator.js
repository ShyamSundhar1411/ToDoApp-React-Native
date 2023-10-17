import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ToDoDisplayScreen } from "../../features/todo/screens/todo.display.screen";

const ToDoStack = createStackNavigator();

export const ToDoNavigator = () => {
  return (
    <ToDoStack.Navigator
      screenOptions={{
        headerMode: "false",
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <ToDoStack.Screen name="Todos" component={ToDoDisplayScreen} />
    </ToDoStack.Navigator>
  );
};
