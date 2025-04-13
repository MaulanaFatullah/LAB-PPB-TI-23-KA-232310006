import React from 'react';
import { View, Text, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#81007F',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 80,
      paddingBottom: 24
    }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LOGO_IBIK.png/1200px-LOGO_IBIK.png" }}
          style={{ width: 128, height: 128 }}
        />
      </View>

      <Text style={{
        fontSize: 20,
        color: 'white',
      }}>
        Loading ...
      </Text>
    </View>
  );
};

export default SplashScreen;
