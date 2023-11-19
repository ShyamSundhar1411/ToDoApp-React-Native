import React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import {
  CategoryComponentView,
  CategoryTile,
  CategoryText,
} from "./styles/styles";
import { LinearGradient } from "expo-linear-gradient";

export const CategoryComponent = ({ category }) => {
  const gradientColorWithOpacity = `${category.color}70`;
  return (
    <CategoryComponentView>
      <CategoryTile color={category.color}>
        <CategoryText>{category.name}</CategoryText>
      </CategoryTile>
    </CategoryComponentView>
  );
};
