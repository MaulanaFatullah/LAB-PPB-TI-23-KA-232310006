import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <FontAwesome5 name="search" size={25} color="grey" />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    flexDirection: "row",
    borderwidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
    width: "90%",
    color: "white",
  },
});
