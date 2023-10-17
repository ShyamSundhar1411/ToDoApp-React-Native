import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Pressable, Text } from "react-native";
import {
  ButtonText,
  customStyleSheet,
} from "../components/styles/account.styles";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { LoginFormComponent } from "../components/login.form";
import { RegisterFormComponent } from "../components/register.form";
export const AuthenticationScreen = () => {
  const { height, width } = Dimensions.get("window");
  const [isLogin, setIsLogin] = useState(false);
  const imagePosition = useSharedValue(1);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0],
    );
    return {
      transform: [
        {
          translateY: withTiming(interpolation, { duration: 1000 }),
        },
      ],
      ...StyleSheet.absoluteFillObject,
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });
  const closeButtonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });
  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });
  const loginHandler = () => {
    imagePosition.value = 0;
    setIsLogin(true);
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    setIsLogin(false);
  };
  return (
    <View style={customStyleSheet.container}>
      <Animated.View style={imageAnimatedStyle}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require("../../../../assets/background.png")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View
          style={[
            customStyleSheet.closeButtonContainer,
            closeButtonAnimatedStyle,
          ]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={customStyleSheet.bottomContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={customStyleSheet.button} onPress={loginHandler}>
            <ButtonText>Login</ButtonText>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={customStyleSheet.button} onPress={registerHandler}>
            <ButtonText>Register</ButtonText>
          </Pressable>
        </Animated.View>
        {isLogin ? (
          <Animated.View
            style={[formAnimatedStyle, customStyleSheet.formLoginContainer]}
          >
            <LoginFormComponent />
          </Animated.View>
        ) : (
          <Animated.View
            style={[formAnimatedStyle, customStyleSheet.formRegisterContainer]}
          >
            <RegisterFormComponent />
          </Animated.View>
        )}
      </View>
    </View>
  );
};
