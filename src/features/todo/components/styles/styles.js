import styled from "styled-components/native";

export const CategoryComponentView = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  align-self: center;
`;

export const CategoryTile = styled.View`
  background-color: ${(props) => props.color};
  height: 120px;
  width: 170px;
  border-radius: 20px;
  margin: 5px;
  border-width: 1px;
`;

export const CategoryText = styled.Text`
  color: black;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding-top: ${(props) => props.theme.space[7]};
  padding-left: ${(props) => props.theme.space[3]};
`;

export const CategoryListView = styled.View`
  justify-content: space-evenly;
  padding: 25px;
`;
