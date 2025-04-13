import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import SplashScreen from './components/SplashScreen';
import ItemTypograph from './components/ItemTypograph';
import MyBioPage from './MyBioPage';

export default class App extends Component {
  state = {
    isLoading: true,
    page: 'home',
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    } else {
      if (this.state.page === 'home') {
        return (
          <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <ItemTypograph />
            </View>
            <View style={{ marginBottom: 24 }}>
              <Button
                title="Go to My Bio"
                onPress={() => this.setState({ page: 'b' })}
              />
            </View>
          </View>
        );
      }

      if (this.state.page === 'b') {
        return (
          <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <MyBioPage />
            </View>
            <View style={{ marginBottom: 24 }}>
              <Button
                title="Back to Home"
                onPress={() => this.setState({ page: 'home' })}
              />
            </View>
          </View>
        );
      }

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
});
