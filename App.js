import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';
import LoginScreen from './screens/auth/LoginScreen'
import SignupScreen from './screens/auth/SignupScreen'

import HomeScreen from './screens/HomeScreen'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import Login from './screens/Login';
import ChatScreen from './screens/ChatScreen';



export default class App extends React.Component {
  render(){
    //Initialize firebase...
      if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
      
    return (
      
      <AppNavigator />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  SignupScreen:SignupScreen,
  HomeScreen:HomeScreen,
  Login:Login,
  ChatScreen:ChatScreen,
  
});

const AppNavigator = createAppContainer
(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

