import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Car from "./components/Car";
import Bicycle from "./components/Bicycle";
import Motor from "./components/Motor";
import Student from "./components/Student";
import { ItemTypograp } from "./components/ItemTypograp";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Car /> */}
    //   <Motor />
    //   {/* <Bicycle /> */}
    //   {/* <Student />
    //   <ItemTypograp /> */}
    // </View>

    <ImageBackground
      // source={{
      //   uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LOGO_IBIK.png/1200px-LOGO_IBIK.png",
      // }}
      source={require("./assets/icon/logo.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <StatusBar hidden={true} />
      <SafeAreaView>
        <Car />
      </SafeAreaView>
    </ImageBackground>

    // <SafeAreaView>
    //   <Bicycle />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 100,
  },
});
