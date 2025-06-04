import React from "react";
import { Image, Text, View } from "react-native";

function Bicycle() {
  const city = "south west";
  const peoples = [
    { name: "Rohmah", fams: "Sister" },
    { name: "Risma", fams: "Newphew" },
  ];
  return (
    <View>
      <Text>Hi I'm a Bicycle</Text>
      <TakeARide peoples={peoples} />
      {Place2Go(city)}
    </View>
  );
}

export default Bicycle;

const TakeARide = ({ peoples }) => {
  // return <Text>Let's go riding with me</Text>;
  return (
    <View style={{ padding: 10 }}>
      <Text>Let's go riding with us:</Text>
      {peoples.map((v, index) => (
        <View key={index}>
          <Text>
            {v.name} my {v.fams}
          </Text>
        </View>
      ))}
      <View>
        <Text>Sepeda Gunung</Text>
        <Image
          source={{
            uri: "https://media.rodalink.com/catalog/product/cache/image/680x510/e9c3970ab036de70892d86c6d221abfe/5/0/502891.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View>
        <Text>Sepeda Listrik</Text>
        <Image
          source={require("../assets/icon/listrik.jpg")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
};
function Place2Go() {
  return <Text>We'r going to south west now, come on.</Text>;
}
