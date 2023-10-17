import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import {
  customStyleSheet,
  ButtonText,
} from "../components/styles/account.styles";
import { Pressable, View } from "react-native";
import { Spacer } from "../../../components/Spacer";
export const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      <Spacer size="large" />
      <Pressable
        style={customStyleSheet.button}
        onPress={() => console.log("Pressed")}
      >
        <ButtonText>Login</ButtonText>
      </Pressable>
    </View>
  );
};
