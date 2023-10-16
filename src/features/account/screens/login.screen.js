import React from "react";
import { Dimensions, View, StyleSheet, Pressable } from "react-native";
import {
  ButtonText,
  customStyleSheet,
} from "../../../components/styles/styles";
import Svg, { Image } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";
export const LoginScreen = () => {
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0],
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });
  const loginHandler = () => {
    imagePosition.value = 0;
  };
  return (
    <View style={customStyleSheet.container}>
      <Animated.View style={(StyleSheet.absoluteFille, imageAnimatedStyle)}>
        <Svg height={height} width={width}>
          <Image
            href={require("../../../../assets/background.png")}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
      </Animated.View>
      <View styles={{ height: height / 3 }}>
        <Pressable style={customStyleSheet.button} onPress={loginHandler}>
          <ButtonText>Login</ButtonText>
        </Pressable>
        <Pressable style={customStyleSheet.button} onPress={loginHandler}>
          <ButtonText>Register</ButtonText>
        </Pressable>
      </View>
    </View>
  );
};
