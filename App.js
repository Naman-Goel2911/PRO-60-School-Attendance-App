import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import db from './config';

export default class App extends React.Component{
  render(){
    return(
      <View><HomeScreen/></View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);