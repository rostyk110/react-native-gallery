import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { Authentication } from './src/navigation/Authentication';

import { bootstrap } from './src/bootstrap';
import { firebaseConfig } from './src/config/config';
import store from './src/store';

import * as firebase from 'firebase';

export default function App() {
  console.disableYellowBox = true;

  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Authentication />
    </Provider>
  );
}
