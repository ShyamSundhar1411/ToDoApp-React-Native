import styled from "styled-components/native";

export const CategoryComponentView = styled.View`
  padding: ${(props) => props.theme.space[1]};
`;

export const CategoryTile = styled.View`
  background-color: ${(props) => props.color};

  height: 120px;
  width: 170px;
  border-radius: 10px;
  border-width: 1px;
`;

export const CategoryText = styled.Text`
  color: white;
  padding: ${(props) => props.theme.space[3]};
`;
