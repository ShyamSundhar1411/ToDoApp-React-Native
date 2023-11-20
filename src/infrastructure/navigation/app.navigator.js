import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoContextProvider } from "../../services/todo/todo.context";
import { ToDoNavigator } from "./todo.navigator";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Home: "md-home",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarActiveTintColor: "#4941F2",
    tabBarInactiveTintColor: "gray",
    tabBarShowLabel: false,
    tabBarStyle: [
      {
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: "white",
        borderRadius: 15,
        height: 90,
        ...styles.shadow,
      },
    ],
    tabBarIcon: ({ size, color, focused }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export const AppNavigator = () => {
  return (
    <TodoContextProvider>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
          name="Home"
          component={ToDoNavigator}
        />
        {/* <Tab.Screen
            options={{
              headerShown: false,
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
            name="Feed"
          component={MyFeedScreen}
          /> */}
        {/* <Tab.Screen
            options={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
            name="Settings"
            component={SettingsNavigator}
          /> */}
      </Tab.Navigator>
    </TodoContextProvider>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
