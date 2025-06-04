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
    </View>
  );
};
function Place2Go() {
  return <Text>We'r going to south west now, come on.</Text>;
}
