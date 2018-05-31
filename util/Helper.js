import { AsyncStorage } from 'react-native';

const FLASHCARD_STORAGE_KEY = "FLASHCARD_STORAGE_KEY";

export const getDecks = () => {
  return Promise.resolve()
    .then(() => {
      return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
    })
    .then((result) => {
      const data = JSON.parse(result);
      return data;
    });
};

export const getDeck = (id) => {
  debugger;
  return getDecks()
  .then((results) => {
    return results[id];
  });
};

export const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }));
};

export const addCardToDeck = (title, card) => {
  return getDeck(title)
    .then((result) => {
      const data = result;
      data.questions.push(card);

      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
        [title]: data,
      }));
  });
};

// To manage your AsyncStorage database, you'll want to create four different helper methods.
//
// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
