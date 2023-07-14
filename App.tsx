/**
 * Sample React Native App
 * https://github.com/CptMaumau/RNBootstrap
 *
 * @format
 */

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/store';
import Root from './src/components/Root';
import { darkTheme } from './src/themes/dark';
import { lightTheme } from './src/themes/light';

function App(): JSX.Element {
  const isDarkMode = store.getState().app.theme === 'dark';

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
