import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { GreetingText } from "../../../components/styles/styles";

export const GreetingComponent = ({ userName }) => {
  const [greeting, setGreeting] = useState("Hello !");
  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime < 12) {
      setGreeting("Good Morning");
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);
  return (
    <View>
      <GreetingText>
        {greeting} {userName}
      </GreetingText>
    </View>
  );
};
