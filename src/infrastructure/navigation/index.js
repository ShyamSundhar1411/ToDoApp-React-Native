import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.services";
import { AccountNavigator } from "./account.navigator";
import { ToDoNavigator } from "./todo.navigator";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <ToDoNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
