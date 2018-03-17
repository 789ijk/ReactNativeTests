import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Realm from 'realm'

//var Realm = require('realm');
const Realm = require('realm');

export default class RealmDBTest extends React.Component {
  constructor() {
    super();
    this.state = {
      realm: null,
      logText:"Start! "
    }
  }

  componentWillMount() {
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Bella'});
        realm.create('Dog', {name: 'Lucy'});
      });
      this.setState({ realm });
    });
  }

  componentDidMount() {
  }

  render() {
    const info = this.state.realm
    ? 'Number of dogs in this Realm: ' + JSON.stringify(this.state.realm.objects('Dog'))
    : 'Loading...';
    return (
      <View style={styles.container}>
        <Text>Hello RealmDB 4!</Text>
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
