/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

// react-native-paper
import { PaperProvider } from 'react-native-paper';

// store
import { Provider } from 'react-redux';
import store from 'store';

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
