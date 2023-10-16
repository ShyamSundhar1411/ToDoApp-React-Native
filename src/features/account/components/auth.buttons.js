import React from "react";
import { ButtonContainer } from "../../../components/styles/styles";
import { Text, View } from "react-native";
export const AuthButtonComponent = () => {
  return (
    <View>
      <ButtonContainer>
        <Text>Login</Text>
      </ButtonContainer>
      <ButtonContainer>
        <Text>Register</Text>
      </ButtonContainer>
    </View>
  );
};
