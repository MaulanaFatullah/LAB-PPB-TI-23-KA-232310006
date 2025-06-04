import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const { width } = Dimensions.get("window");

const CardMenu = () => {
  const menuList = [
    { id: 1, name: "Attendance", icon: "calendar-check" },
    { id: 2, name: "Hot Line", icon: "headset" },
    { id: 3, name: "Activity", icon: "chart-line" },
    { id: 4, name: "PCF", icon: "edit" },
    { id: 5, name: "Counselor", icon: "comments" },
    { id: 6, name: "Others", icon: "ellipsis-h" },
  ];

  return (
    <View style={styles.cardContainer}>
      <View style={styles.menuGrid}>
        {menuList.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

const MenuItem = ({ item }) => {
  return (
    <View style={styles.cardItem}>
      <FontAwesome5 name={item.icon} size={24} color="#800080" />
      <Text style={styles.cardText}>{item.name}</Text>
    </View>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardItem: {
    width: "30%", // Ensures exactly 3 items per row
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    paddingHorizontal: 5,
  },
  cardText: {
    marginTop: 8,
    fontSize: 13,
    color: "#800080",
    textAlign: "center",
    fontWeight: "500",
  },
});
