import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Card extends React.Component {
  state = {
    showQuestion: true
  };

  setShowQuestion = (value) => {
    this.setState({
      showQuestion: value
    });
  };

  componentWillReceiveProps() {
    this.setState({
      showQuestion: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.showQuestion
          ? <View style={styles.container}>
              <Text style={styles.question}>{this.props.question}</Text>
              <TouchableOpacity onPress={() => this.setShowQuestion(false)}>
                <Text style={styles.flipButton}>Answer</Text>
              </TouchableOpacity>
            </View>
          : <View style={styles.container}>
              <Text style={styles.answer}>{this.props.answer}</Text>
              <TouchableOpacity onPress={() => this.setShowQuestion(true)}>
                <Text style={styles.flipButton}>Question</Text>
              </TouchableOpacity>
            </View>
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
  question: {
    fontSize: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answer: {
    fontSize: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipButton: {
    fontSize: 15,
    color: "#8b0000",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
