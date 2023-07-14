import React, { FC } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, useColorScheme } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';

import Section from './Section';
import { Highlight } from './style';
import { darkTheme } from '../../themes/dark';
import { lightTheme } from '../../themes/light';
import { RootState } from '../../store';

const Root: FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.app.theme) === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? darkTheme.backgroundColor.primary
      : lightTheme.backgroundColor.primary,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View style={backgroundStyle}>
          <Section title="Step One">
            Edit <Highlight>App.tsx</Highlight> to change this screen and then come back to see your
            edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">Read the docs to discover what to do next:</Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Root;
