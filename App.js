import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import StartScreen from './Screens/StartScreen'
import GameScreen from './Screens/GameScreen'
import GameScreen2 from './Screens/GameScreen2'
import GameScreen3 from './Screens/GameScreen3'

const Navigation = createStackNavigator({
  Start: {screen: StartScreen, navigationOptions: {headerShown: false}},
  Game: {screen: GameScreen, navigationOptions: {headerShown: false}},
  Game2: {screen: GameScreen2,navigationOptions: {headerShown: false}},
  Game3: {screen: GameScreen3,navigationOptions: {headerShown: false}} 
});

const App = createAppContainer(Navigation);
export default App;