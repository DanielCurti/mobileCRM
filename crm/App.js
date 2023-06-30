import { StatusBar } from 'expo-status-bar';
import React from 'react';
// android 227203302334-0chppkb282ddtco4lm6mgstbo7t3atvo.apps.googleusercontent.com
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#38A69D' barStyle='ligth-content'/>
      <Routes />
    </NavigationContainer>
  );
}


