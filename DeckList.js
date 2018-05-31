import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { getDecks } from './util/Helper';

export default class DeckList extends React.Component {
  state = {
    decks: []
  };

  loadDecksToState() {
    getDecks()
    .then((result) => {
      if (result == null) {
        result = {};
      }

      this.setState({
        decks: result
      });
    });
  }

  componentDidMount() {
    this.loadDecksToState();
  }

  componentWillReceiveProps() {
    this.loadDecksToState();
  }

  render() {
    return (
      <View style={styles.container}>
      {
        Object.entries(this.state.decks).length === 0
        ? <Text style={styles.noDecks}>Please add a new Deck!</Text>
        : null
      }
        <ScrollView>
        {
          Object.entries(this.state.decks).map(([key, value]) => (
            <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('Deck', { deck: value })} style={styles.deck}>
            <Text style={styles.deckTitle}>{value.title}</Text>
              {
                value.questions == null
                ? <Text>0 cards</Text>
                : <Text>{value.questions.length} cards</Text>
              }
            </TouchableOpacity>
          ))
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  deck: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  deckTitle: {
    fontSize: 20
  },
  noDecks: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 200,
    left: 100    
  }
});
