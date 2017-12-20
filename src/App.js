import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

import reducers from './components/reducers';


class App extends Component {
  state={
    loggedIn: null,
  };

  /* remember that lifecycle methods are methods that are automatically invoked inside
      of our component all you have to do is to define the method
      */
  componentWillMount() {
    const config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    };
    console.log('config', JSON.stringify(config, null, 3));
    firebase.initializeApp(config);
    /*
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(`Login case User is ${user} `);
        this.setState(() => ({ loggedIn: true }));
      } else {
        console.log(`Logout case user :${user} `);
        this.setState(() => ({ loggedIn: false }));
      }
    });*/
  }

  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View>
          <Text> weclome to my app </Text>
        </View>
      </Provider>
    );
  }
}


export default App;
