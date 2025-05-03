import React from "react";
import { SectionList, Text } from "react-native";
import UserItem from "../Friends/widgets/UserItem";

const ExpSectionList = ({ Users }) => {
  const data = [
    { title: "Suggested", data: Users },
    { title: "Followers", data: Users },
  ];
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <UserItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "white" }}>{title}</Text>
      )}
    />
  );
};

export default ExpSectionList;