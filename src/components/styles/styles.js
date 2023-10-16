import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const TileView = styled.View`
  background-color: #ffffff;
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
  elevation: 4;
  border-radius: ${(props) => props.theme.space[3]};
`;

export const CarouselItemView = styled.View`
  flex: 1;
  justify-content: center;
  border: 1px;
  border-radius: 20px;
  overflow: hidden;
`;

export const CarouselView = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

export const GreetingText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h3};
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[5]};
`;

export const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const ButtonContainer = styled.Pressable`
  background-color: rgba(123, 104, 238, 0.8);
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 400px;
  border-radius: 35px;
  margin-horizontal: 20px;
  margin-vertical: 10px;
  border-width: 3px;
  border-color: white;
`;

export const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: white;
  letter-spacing: 0.5px;
`;
export const customStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "rgba(123, 104, 238, 0.8)",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    width: 400,
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "white",
  },
});
