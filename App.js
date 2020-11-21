import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from "react-navigation-tabs";
import ReadStory from "./screens/readStory";
import WriteStory from "./screens/writeStory"

export default class App extends React.Component {
  render(){
  return (
        <AppContainer />
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Read:{ screen :ReadStory },
  Write:{ screen :WriteStory}
})

const AppContainer = createAppContainer(TabNavigator)

