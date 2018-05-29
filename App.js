import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './DeckList';
import { createStackNavigator } from 'react-navigation';
import Deck from './Deck';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const MainNavigator = createStackNavigator(
  {
    DeckList: {
      screen: DeckList
    },
    Deck: {
      screen: Deck,
    }
  },
  {
    initialRouteName: 'DeckList'
  }
);
