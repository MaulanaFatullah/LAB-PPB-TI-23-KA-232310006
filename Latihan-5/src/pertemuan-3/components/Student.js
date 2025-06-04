import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, View } from "react-native";
import buttonAct from "./ButtonAct";

export default class Student extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4832/4832939.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <View>
          <Text>Student ID:</Text>
          <TextInput style={styles.input} placeholder="Enter your NPM" />
        </View>
        <View>
          <Text>Fullname:</Text>
          <TextInput style={styles.input} placeholder="Enter your name here" />
        </View>
        <View>
          <Text>Address:</Text>
          <TextInput
            style={styles.input}
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
          />
        </View>
        <Button title="Button from OS" />
        <TouchableOpacity activeOpacity={0.6}>
          {buttonAct("Touchable Opacity ")}
        </TouchableOpacity>
        <TouchableHighlight activeOpacity={0.6}>
          {buttonAct("Touchable Highlight ")}
        </TouchableHighlight>
        <TouchableWithoutFeedback activeOpacity={0.6}>
          {buttonAct("Touchable Without Feedback ")}
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
  },
});
