import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { addCardToDeck } from './util/Helper';

export default class NewCard extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  handleQuestionChange = (question) => {
    this.setState({
      question
    });
  };

  handleAnswerChange = (answer) => {
    this.setState({
      answer
    });
  };

  submit = () => {
    const title = this.props.navigation.state.params.deck.title;
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };

    addCardToDeck(title, card)
    .then(() => {
      this.props.navigation.navigate('DeckList', { reload: true });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="Question"
        value={this.state.question}
        onChangeText={this.handleQuestionChange}
        style={styles.input}
        />
        <TextInput
        placeholder="Answer"
        value={this.state.answer}
        onChangeText={this.handleAnswerChange}
        style={styles.input}
        />
        <TouchableOpacity onPress={() => this.submit() }>
          <Text>Submit</Text>
        </TouchableOpacity>
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
  input: {
    width: 100
  }
});
