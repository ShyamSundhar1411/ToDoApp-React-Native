import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticationScreen } from "../../features/account/screens/authentication.screen";
const Stack = createStackNavigator();
export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerMode: "false" }}>
    <Stack.Screen name="Authentication" component={AuthenticationScreen} />
  </Stack.Navigator>
);
