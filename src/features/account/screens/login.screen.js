import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { customStyleSheet } from "../../../components/styles/styles";
import Svg, { Image } from "react-native-svg";
import { AuthButtonComponent } from "../components/auth.buttons";
export const LoginScreen = () => {
  const { height, width } = Dimensions.get("window");
  return (
    <View style={customStyleSheet.container}>
      <View style={StyleSheet.absoluteFille}>
        <Svg height={height} width={width}>
          <Image
            href={require("../../../../assets/background.png")}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
      </View>
      <AuthButtonComponent />
    </View>
  );
};
