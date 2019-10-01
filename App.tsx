/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { OnBoarding } from './src/screens/OnBoarding';
import { CustomerHome, CustomerPreview } from './src/screens/customer';
import { OperatorHome, OperatorList } from './src/screens/operator';
import reducers from './src/store/reducers';

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware());
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

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

const Navigation = createAppContainer(RootStack);
