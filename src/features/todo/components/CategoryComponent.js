import React from "react";
import { StyleSheet } from "react-native";
import {
  CategoryComponentView,
  CategoryTile,
  CategoryText,
  CategoryContent,
  CategoryContentContainer,
} from "./styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export const CategoryComponent = ({ category }) => {
  const gradientColorWithOpacity = `${category.color}70`;
  return (
    <CategoryComponentView>
      <CategoryTile color={category.color}>
        <CategoryContentContainer>
          {category.icon && (
            <FontAwesome
              style={styles.icon}
              name={category.icon}
              color="black"
              size={40}
            />
          )}
          <CategoryText numberOfLines={1} ellipsizeMode="tail">
            {category.name}
          </CategoryText>
          <CategoryContent>Total Tasks : 8</CategoryContent>
        </CategoryContentContainer>
      </CategoryTile>
    </CategoryComponentView>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 16,
    color: "rgba(255,255,255,0.8)",
  },
});
