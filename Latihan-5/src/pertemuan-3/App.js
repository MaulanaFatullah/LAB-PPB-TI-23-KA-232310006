import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Student from "./components/Student";
import { ItemTypograp } from "./components/ItemTypograp";
import { ItemImage } from "./components/ItemImage";
import Bicycle from "./components/Bicycle";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Bicycle />
      {/* <Student /> */}
    </View>

    // <SafeAreaView style={{ flex: 1 }}>
    //   <StatusBar hidden={true} />
    //   {/* <View style={{ flex: 1, backgroundColor: "red" }} />
    //   <View style={{ flex: 2, backgroundColor: "darkorange" }} />
    //   <View style={{ flex: 3, backgroundColor: "green" }} /> */}
    //   <View style={styles.container}>
    //     <ItemTypograp />
    //     <ItemImage />
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "",
    justifyContent: "",
  },
});
