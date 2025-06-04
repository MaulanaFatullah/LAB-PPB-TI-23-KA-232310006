import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

class FormRCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "IBI Kesatuan",
      subTitle: "Bogor, Indonesia",
    };
  }
  render() {
    return (
      <SafeAreaView>
        <StatusBar hidden={false} />
        <View style={styles.header}>
          <Text
            style={{ ...styles.header_text, fontWeight: "bold", fontSize: 35 }}
          >
            {this.state.title}
          </Text>
          <Text style={{ ...styles.header_text, fontSize: 25 }}>
            {this.state.subTitle}
          </Text>
        </View>

        <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Change Text
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15 }}>Title</Text>
            <TextInput
              style={styles.form}
              placeholder="Input text"
              defaultValue={this.state.title}
              onChangeText={(text) => this.setState({ title: text })}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>Sub Title</Text>
            <TextInput
              style={styles.form}
              placeholder="Input text"
              defaultValue={this.state.subTitle}
              onChangeText={(text) => this.setState({ subTitle: text })}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 15,
    alignItems: "center",
  },

  header_text: {
    color: "purple",
  },

  form: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 4,
    marginVertical: 10,
  },
});

export default FormRCC;
