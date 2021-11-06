import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const UsrItem = ({item}) => {
  //   console.log(item);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.email}</Text>
      <Text style={styles.text}>{item.createdAt}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 4,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 2,
    flexDirection: 'row',
    borderRadius: 6,
    padding: 16,
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
});
