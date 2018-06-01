import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const FLASHCARD_STORAGE_KEY = "FLASHCARD_STORAGE_KEY";
const FLASHCARD_NOTIFICATION_KEY = "FLASHCARD_NOTIFICATION_KEY";

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

export const clearLocalNotifications = () => {
  return AsyncStorage.removeItem(FLASHCARD_NOTIFICATION_KEY)
    .then(() => {
      Notifications.cancelAllScheduledNotificationsAsync();
    });
};

export const createNotification = () => {
  return {
    title: 'Quiz time!',
    body: 'You haven\'t played yet, please play.',
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  };
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(FLASHCARD_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if(status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(FLASHCARD_NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
};
