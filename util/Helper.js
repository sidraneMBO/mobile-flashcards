import { AsyncStorage } from 'react-native';

const FLASHCARD_STORAGE_KEY = "FLASHCARD_STORAGE_KEY";

export const getDecks = () => {
  return Promise.resolve()
          .then(() => {
            return {
              React: {
                title: 'React',
                questions: [
                  {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                  },
                  {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                  }
                ]
              },
              JavaScript: {
                title: 'JavaScript',
                questions: [
                  {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                  }
                ]
              }
            }
          });
//  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
};

export const getDeck = (id) => {
  return getDecks()
  .then((results) => {
    return results[id];
  });
};

export const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: undefined
  }));
};

export const addCardToDeck = (title, card) => {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: card,
  }));
};

// To manage your AsyncStorage database, you'll want to create four different helper methods.
//
// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
