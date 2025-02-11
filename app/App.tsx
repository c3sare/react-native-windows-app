/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import '../global.css';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <View className="mt-8 py-6">
      <Text className="text-xl font-bold text-black dark:text-white">
        {title}
      </Text>
      <Text className="mt-2 text-xl font-normal text-black dark:text-white">
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const backgroundStyle = 'bg-white/20 dark:bg-black/20';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar className={backgroundStyle} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <Header />
        <View className="bg-white dark:bg-black">
          <Section title="Step One">
            Edit <Text className="font-bold">App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
