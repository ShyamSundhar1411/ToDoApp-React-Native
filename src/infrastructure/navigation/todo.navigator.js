import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ToDoDisplayScreen } from "../../features/todo/screens/todo.display.screen";
import { TodoContextProvider } from "../../services/todo/todo.context";

const ToDoStack = createStackNavigator();

export const ToDoNavigator = () => {
  return (
    <TodoContextProvider>
      <ToDoStack.Navigator
        screenOptions={{
          headerMode: "false",
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <ToDoStack.Screen name="Todos" component={ToDoDisplayScreen} />
      </ToDoStack.Navigator>
    </TodoContextProvider>
  );
};
