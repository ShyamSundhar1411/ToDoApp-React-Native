import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsDisplayScreen } from "../../features/settings/screens/settings.display.screen";
const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsDisplayScreen}
      />
    </SettingsStack.Navigator>
  );
};
