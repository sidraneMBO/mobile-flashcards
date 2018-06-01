import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { addCardToDeck, setLocalNotification, clearLocalNotifications } from './util/Helper';
import Card from './Card';

export default class Quiz extends React.Component {
  state = {
    score: 0,
    currentQuestion: 0
  };

  correctAnswer = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        score: prevState.score + 1,
        currentQuestion: prevState.currentQuestion + 1
      };
    });
  };

  wrongAnswer = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currentQuestion: prevState.currentQuestion + 1
      };
    });
  };

  componentDidMount() {
    clearLocalNotifications()
      .then(() => {
        setLocalNotification();
      });
  }

  render() {
    const questions = this.props.navigation.state.params.deck.questions;
    const questionsLength = questions == null ? 0 : questions.length;
    const showQuizCompleted = (this.state.currentQuestion + 1) > questionsLength;

    return (
      <View style={styles.container}>
      {
        showQuizCompleted
        ? <Text style={styles.score}>Wohoo, you scored {this.state.score}/{questionsLength}!</Text>
        : <View style={styles.container}>
            <Text style={styles.quizCount}>{this.state.currentQuestion + 1}/{questionsLength}</Text>
            <View style={styles.quizContainer}>
              <Card
                question={questions[this.state.currentQuestion].question}
                answer={questions[this.state.currentQuestion].answer}
              />
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => this.correctAnswer()}>
                  <Text style={styles.positiveButtonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.wrongAnswer()}>
                  <Text style={styles.negativeButtonText}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            </View>
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
  },
  quizContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    flex: 1,
    backgroundColor: '#fff',
    top: 200,
    left: 100
  },
  buttonsContainer: {
    paddingBottom: 30,
  },
  button: {
    paddingLeft:30,
    paddingRight: 30,
    padding: 10,
    borderRadius: 2,
    borderWidth: 5,
    borderColor: '#d6d7da',
  },
  positiveButtonText: {
    fontSize: 20,
    color: "#006400"
  },
  negativeButtonText: {
    fontSize: 20,
    color: "#8b0000"
  },
  card: {
  },
  quizCount: {
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingLeft: 10,
  }
});
