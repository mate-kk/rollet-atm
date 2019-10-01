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
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {OnBoarding} from './src/screens/OnBoarding';
import {CustomerHome} from './src/screens/customer/CustomerHome';
import {CustomerPreview} from './src/screens/customer/CustomerPreview';
import {OperatorHome} from './src/screens/operator/OperatorHome';
import {OperatorList} from './src/screens/operator/OperatorList';

const App: () => React$Node = () => {
  return null;
};

const OperatorTab = createBottomTabNavigator({
  OperatorHome,
  OperatorList,
});

const CustomerStack = createStackNavigator(
  {
    CustomerHome,
    CustomerPreview,
  },
  {
    headerMode: 'none',
  },
);

const RootStack = createStackNavigator(
  {
    OnBoarding: OnBoarding,
    CustomerRoute: CustomerStack,
    OperatorRoute: OperatorTab,
  },
  {
    headerMode: 'none',
  },
);

//export default App;
export default createAppContainer(RootStack);
