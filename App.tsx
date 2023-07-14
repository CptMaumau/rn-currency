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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from './src/store';
import Root from './src/components/Root';
import { darkTheme } from './src/themes/dark';
import { lightTheme } from './src/themes/light';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const isDarkMode = store.getState().app.theme === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
