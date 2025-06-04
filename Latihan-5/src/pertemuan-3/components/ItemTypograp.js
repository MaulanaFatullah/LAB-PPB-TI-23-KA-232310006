import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ItemTypograp = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fffff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
        }}
      >
        History Of Bicycle
      </Text>
      <Text style={styles.paragraf}>
        A bicycle, also called a
        <Text style={{ ...styles.paragraf, color: "red" }}>pedal cycle</Text>,
        <Text style={{ ...styles.paragraf, fontWeight: "bold" }}>bike</Text>,
        <Text style={{ ...styles.paragraf, fontStyle: "italic" }}>
          push-bike or cycle
        </Text>
        , is a human-poweres or, motor-powered assisted, pedal-driven,
        single-track vehicle, having two wheels attached to a frame, one behind
        the other. A bicycle rider is called a cyclist, or bicylist.
      </Text>
    </View>
  );
};

export { ItemTypograp };

const styles = StyleSheet.create({
  paragraf: {
    borderColor: 1,
    fontSize: 18,
    padding: 10,
  },
});
