import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Realm from 'realm'

//var Realm = require('realm');
export default class RealmDBTest extends React.Component {
  constructor() {
    super();
    this.state = {
      realm: null,
      logText:"Start! "
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const info = this.state.realm
    ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
    : 'Loading...';
    return (
      <View style={styles.container}>
        <Text>Hello RealmDB!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>{info}</Text>
        <Text>{this.state.logText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
