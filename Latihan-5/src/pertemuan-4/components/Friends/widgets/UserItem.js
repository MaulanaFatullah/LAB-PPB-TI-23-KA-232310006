import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserItem = ({ item }) => {
  return (
    <View style={styles.search_container}>
      <Image
        source={require("../../../../../assets/icons/icon-boy.png")}
        style={styles.story_ava}
      />
      <View style={styles.info_container}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...styles.story_name, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text style={styles.story_name}>{item.fullname}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.btn_follow}>
          <Text style={styles.story_name}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  search_container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  story_ava: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "white",
    marginRight: 15,
  },
  info_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  story_name: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },
  btn_follow: {
    backgroundColor: "purple",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
