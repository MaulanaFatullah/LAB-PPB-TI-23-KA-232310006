import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import SearchBar from "./widgets/SearchBar";
import Users from "../const-data/User";
import ExpScrollView from "../modules/ExpScrollView";
import ExpFlatList from "../modules/ExpFlatList";
import ExpSectionList from "../modules/ExpSectionList";

export default class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} style="light" />
        <View style={styles.header}>
          <SearchBar />
        </View>
        <View style={styles.body}>
          {/* <ExpScrollView Users={Users} /> */}
          {/* <ExpFlatList Users={Users} /> */}
          <ExpSectionList Users={Users} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "black",
  },
  body: {
    flex: 10,
    backgroundColor: "black",
  },
});
