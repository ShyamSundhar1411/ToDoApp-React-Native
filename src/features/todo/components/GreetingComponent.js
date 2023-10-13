import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
const GreetingText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h3};
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[5]};
`;
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
