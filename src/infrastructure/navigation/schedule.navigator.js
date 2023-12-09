import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ScheduleDisplayScreen } from "../../features/schedule/screens/schedule.display.screen";

const ScheduleStack = createStackNavigator();

export const ScheduleNavigator = () => {
  return (
    <ScheduleStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ScheduleStack.Screen
        name="ScheduleScreen"
        component={ScheduleDisplayScreen}
      />
    </ScheduleStack.Navigator>
  );
};
