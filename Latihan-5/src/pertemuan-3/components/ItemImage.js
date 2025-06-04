import React from "react";
import { Image, View } from "react-native";

const ItemImage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/145/145973.png",
        }}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};

export { ItemImage };
