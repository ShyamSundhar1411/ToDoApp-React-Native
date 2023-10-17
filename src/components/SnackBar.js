import React, { useState } from "react";
import { Snackbar } from "react-native-paper";
import { Text } from "react-native";
import { SnackBarContainer, SnackBarText } from "./styles/styles";

export const MySnackBarComponent = ({
  visible,
  type,
  message,
  onDismissSnackBar,
}) => {
  message = message.toString();
  return (
    <SnackBarContainer>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Dismiss",
          onPress: () => {
            onDismissSnackBar();
          },
        }}
      >
        <SnackBarText>
          {type}: {message}
        </SnackBarText>
      </Snackbar>
    </SnackBarContainer>
  );
};
