import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import StartScreen from './Screens/StartScreen'
import GameScreen from './Screens/GameScreen'

const Navigation = createStackNavigator({
  Start: {screen: StartScreen},
  Game: {screen: GameScreen}
});

const App = createAppContainer(Navigation);
export default App;