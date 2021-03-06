import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

import { Actions } from 'react-native-router-flux';

import { authActions } from './components/actions';
import reducers from './components/reducers';
import Router from './Router';


class App extends Component {
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(`logged in user: ${JSON.stringify(user, null, 3)}`);
        this.myStore.dispatch(authActions.loggedIn(user));
        Actions.main();
      } else {
        console.log('logged out ....');
        this.myStore.dispatch(authActions.loggedOut());
      }
    });
  }
  myStore = null;

  render() {
    this.myStore = createStore(reducers, applyMiddleware(thunk));
    console.log('this.myStore.getState()');
    console.log(this.myStore.getState());
    return (
      <Provider store={this.myStore} >
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}


export default App;
