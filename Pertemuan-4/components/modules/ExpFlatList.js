import React from "react";
import { FlatList } from "react-native";
import UserItem from "../Friends/widgets/UserItem";

const ExpFlatList = ({ Users }) => {
  return (
    <FlatList
      data={Users}
      renderItem={({ item }) => <UserItem item={item} />}
    />
  );
};

export default ExpFlatList;