import React from "react";
import { Text, View } from "react-native";

var name = "Honda";
name = "Yamaha";
const types = { type: "Matic", model: "Vario", harga: 15000000 };
const Motor = () => {
  return (
    <View>
      <Text>Hi I'm a Motorcycle</Text>
      <Text>Merek: {name}</Text>
      <Text></Text>
      <Text>Model: {types.type}</Text>
      <Text>Model: {types.model}</Text>
      <Text>Harga: {types.harga}</Text>
    </View>
  );
};

export default Motor;
