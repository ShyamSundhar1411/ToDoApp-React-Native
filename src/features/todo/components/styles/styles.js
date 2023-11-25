import styled from "styled-components/native";

export const CategoryComponentView = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  align-self: center;
`;

export const CategoryTile = styled.View`
  background-color: ${(props) => props.color};
  height: 100px;
  width: 170px;
  border-radius: 20px;
  margin: 5px;
  border-width: 1px;
`;

export const CategoryText = styled.Text`
  color: black;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding-left: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[2]};
`;

export const CategoryListView = styled.View`
  justify-content: space-evenly;
  padding: 20px;
`;

export const CategoryContentContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: ${(props) => props.theme.space[3]};
`;

export const CategoryContent = styled.Text`
  color: "rgba(169, 169, 169, 1)";
  padding-left: ${(props) => props.theme.space[3]};
`;

export const ToDoTileView = styled.View`
  justify-content: start;
  padding: ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[2]};
  border-radius: 10px;
  border-width: 1px;
  background-color: #ddddff;
  height: 80px;
`;
