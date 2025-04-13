import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BioDetail from './components/BioDetail';

export default class MyBioPage extends Component {
  state = {
    MyBio: {
      identity: {
        npm: 212310006,
        firstname: "Maulana",
        lastname: "Fatullah",
      },
      educations: [
        { id: 1, school: "SDN Semplak 1" },
        { id: 2, school: "SMPN 1 Rancabungur" },
        { id: 3, school: "SMKN 1 Ciomas" },
      ],
      mobile_phone: '0812345679',
      email: "21231006@student.ibik.ac.id",
      gender: 'M',
      tall_body: 169,
      weight_body: 65
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <BioDetail data={this.state.MyBio} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
});
