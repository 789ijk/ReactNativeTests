//HomeScreen.js
import React from 'react';
import { Text,View,Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View>
      <Text>React Native test app!</Text>
      <Button
        onPress={() => navigate('RealmDBTest')}
        title="Go to Realm DB test"
      />
    </View>
    );
  }
}
