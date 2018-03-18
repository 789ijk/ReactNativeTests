import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Realm from 'realm'

//var Realm = require('realm');
const Realm = require('realm');
var PersonSchema = {
  name: 'Person',
  primaryKey: 'id',
  properties: {
	id: 'int',
    firstName: {type:'string', indexed: true},
    lastName:  {type:'string', indexed: true}
  }
};

export default class RealmDBTest extends React.Component {
  constructor() {
    super();
    this.state = {
      realm: null,
      logText:"Start! "
    }
  }

  componentWillMount() {
    Realm.open({schema: [PersonSchema]}).then(realm => {
      realm.write(() => {
        realm.create('Person', {id:1, firstName: 'Bei', lastName:'Liu'},true);
        realm.create('Person', {id:2, firstName: 'Yu', lastName:'Guan'},true);
        realm.create('Person', {id:3, firstName: 'Fei', lastName:'Zhang'},true);
      });
      this.setState({ realm });
    });
  }

  componentDidMount() {
  }

  render() {
    const info = this.state.realm
    ? 'Number of Person in this Realm: ' + JSON.stringify(this.state.realm.objects('Person'))
    : 'Loading...';
    return (
      <View style={styles.container}>
        <Text>Hello RealmDB 6!</Text>
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
