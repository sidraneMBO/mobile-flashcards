import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { saveDeckTitle, getDeck } from './util/Helper';

export default class NewDeck extends React.Component {
  state = {
    title: ""
  };

  handleTitleChange = (title) => {
    this.setState({
      title
    });
  };

  submit = () => {
    const title = this.state.title;

    saveDeckTitle(title)
    .then(() => {
      return getDeck(title);
    })
    .then((deck) => {
      // Clear old value
      this.setState({
        title: ""
      });

      this.props.navigation.navigate('Deck', { deck });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Title"
        value={this.state.title}
        onChangeText={this.handleTitleChange}
        />
        <TouchableOpacity onPress={() => this.submit() }>
          <Text>Create Deck</Text>
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
