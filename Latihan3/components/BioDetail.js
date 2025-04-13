import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BioDetail = ({ data }) => {
  const { identity, educations, mobile_phone, email, gender, tall_body, weight_body } = data;
  return (
    <View>
      <Text style={styles.header}>My Profile</Text>
      <Text>NPM: {identity.npm}</Text>
      <Text>Name: {identity.firstname} {identity.lastname}</Text>
      <Text>Gender: {gender}</Text>
      <Text>Height: {tall_body} cm</Text>
      <Text>Weight: {weight_body} kg</Text>
      <Text>Email: {email}</Text>
      <Text>Mobile: {mobile_phone}</Text>
      <Text style={styles.educationTitle}>Education:</Text>
      {educations.map((item) => (
        <Text key={item.id}>- {item.school}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  educationTitle: {
    marginTop: 10,
    fontWeight: 'bold',
  }
});

export default BioDetail;
