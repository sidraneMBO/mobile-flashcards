import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Deck extends React.Component {

  render() {
    const title = this.props.navigation.state.params.deck.title;
    const questions = this.props.navigation.state.params.deck.questions;
    const questionsLength = questions == null ? 0 : questions.length;

    return (
      <View style={styles.container}>
        <View style={styles.cardInfo}>
          <Text style={styles.deckTitle}>{title}</Text>
          <Text>{questionsLength} cards</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('NewCard', { deck: this.props.navigation.state.params.deck })}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Quiz', { deck: this.props.navigation.state.params.deck })}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 20
  },
  cardInfo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  buttonsContainer: {
    bottom: 100,
  },
  button: {
    paddingLeft:30,
    paddingRight: 30,
    padding: 10,
    borderRadius: 2,
    borderWidth: 5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20
  }
});
