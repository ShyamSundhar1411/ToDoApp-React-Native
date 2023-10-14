import styled from "styled-components/native";

const TileView = styled.View`
  background-color: #ffffff;
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
  elevation: 4;
  border-radius: ${(props) => props.theme.space[3]};
`;

const CarouselItemView = styled.View`
  flex: 1;
  justify-content: center;
  border: 1px;
  border-radius: 20px;
  overflow: hidden;
`;

const CarouselView = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

const GreetingText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h3};
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[5]};
`;

const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;