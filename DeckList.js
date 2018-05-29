import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
        {
          Object.entries(this.state.decks).map(([key, value]) => (
            <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('Deck', { title: key, deck: value })}>
              <Text>{value.title}</Text>
              <Text>{value.questions.length} cards</Text>
            </TouchableOpacity>
          ))
        }
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
