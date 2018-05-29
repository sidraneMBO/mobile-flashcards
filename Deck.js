import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Deck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
