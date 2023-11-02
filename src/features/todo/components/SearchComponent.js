import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

export const SearchBarComponent = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <Searchbar
      value={searchKeyword}
      placeholder="Search"
      onChangeText={(text) => {
        setSearchKeyword(text);
      }}
    />
  );
};
