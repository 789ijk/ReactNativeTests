import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import RealmDBTest from './RealmDB';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  RealmDBTest: { screen: RealmDBTest}
});

export default App;
