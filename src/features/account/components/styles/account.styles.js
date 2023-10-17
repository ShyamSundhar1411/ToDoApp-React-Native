import styled from "styled-components/native";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: white;
  letter-spacing: 0.5px;
`;

export const customStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "rgba(123, 104, 238, 0.8)",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  bottomContainer: {
    justifyContent: "center",
    height: height / 3,
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    top: -20,
  },
  formLoginContainer: {
    justifyContent: "center",
    marginBottom: 70,
    padding: 20,
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  formRegisterContainer: {
    justifyContent: "center",
    marginBottom: 70,
    padding: 20,
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});
