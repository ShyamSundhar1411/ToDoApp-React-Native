import React, { useState, useContext } from "react";
import { TextInput, ActivityIndicator } from "react-native-paper";
import {
  customStyleSheet,
  ButtonText,
} from "../components/styles/account.styles";
import { Pressable, View, KeyboardAvoidingView, Keyboard } from "react-native";
import { Spacer } from "../../../components/Spacer";
import { AuthenticationContext } from "../../../services/authentication/authentication.services";
import { MySnackBarComponent } from "../../../components/SnackBar";
export const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const [snackbarVisible, setSnackBarVisible] = useState(false);
  return (
    <KeyboardAvoidingView behavior="padding">
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
        {!isLoading ? (
          <Pressable
            style={customStyleSheet.button}
            onPress={() => {
              Keyboard.dismiss();
              setSnackBarVisible(true);
              onLogin(email, password);
            }}
          >
            <ButtonText>Login</ButtonText>
          </Pressable>
        ) : (
          <ActivityIndicator animating={true} />
        )}
        {error && (
          <MySnackBarComponent
            visible={snackbarVisible && !!error}
            onDismissSnackBar={() => {
              setSnackBarVisible(false);
            }}
            type="Error"
            message={error}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
