/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {OnBoarding} from './src/screens/OnBoarding';
import {CustomerHome} from './src/screens/customer/CustomerHome';

const App: () => React$Node = () => {
  return null;
};

const RootStack = createStackNavigator(
  {
    OnBoarding: OnBoarding,
    CustomerHome: CustomerHome,
    //Details: DetailsScreen,
  },
  {
    headerMode: 'none',
  },
);

//export default App;
export default createAppContainer(RootStack);
