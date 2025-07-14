
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Kantin IBIK' }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'Keranjang Belanja' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}