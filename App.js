import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './DeckList';
import Deck from './Deck';
import NewDeck from './NewDeck';
import NewCard from './NewCard';
import Quiz from './Quiz';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { setLocalNotification } from './util/Helper';

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{height: 24}} />
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
  }
});

const MainNavigator = createStackNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        header: null
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTitle: "Deck"
      }
    },
    NewCard: {
      screen: NewCard,
      navigationOptions: {
        headerTitle: "NewCard"
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTitle: "Quiz"
      }
    }
  }
);

const Tabs = createMaterialTopTabNavigator(
  {
    MainNavigator: {
      screen: MainNavigator,
      navigationOptions: {
        title: "Decks"
      }
    },
    NewDeck: {
      screen: NewDeck
    }
  }
);
