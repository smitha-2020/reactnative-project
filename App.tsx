/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <StartGameScreen />
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
