import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/pertemuan-5/components/Form/SignInScreen";
import FormRCC from "./src/pertemuan-6/FormRCC";
import FormRFC from "./src/pertemuan-6/FormRFC";
import SignIn from "./src/pertemuan-6/SignIn";
import Home from "./src/pertemuan-6/Home";
import CardMenu from "./src/pertemuan-6/home/CardMenu";
import MyCalender from "./src/pertemuan-6/home/MyCalender";

const Stack = createNativeStackNavigator();

const Page2 = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s Home</Text>;
};

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="SignIn">
    //     <Stack.Screen
    //       name="SignIn"
    //       component={SignInScreen}
    //       options={{ title: "Sign In" }}
    //     />
    //     <Stack.Screen name="Page2" component={Page2} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <FormRCC />
    // <FormRFC />
    // <SignIn />
    // <Home />
    // <CardMenu />
    // <MyCalender />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false, // Hide header jika tidak diperlukan
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
