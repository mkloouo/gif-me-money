import React from 'react';
import {Text, Image, StyleSheet, SafeAreaView} from 'react-native';

class App extends React.Component {
  render() {
    const reactNativeJpg = require('../images/react-native.jpg');

    return (
      <SafeAreaView style={s.container}>
        <Text style={s.text}>Hello, React!</Text>
        <Image style={s.image} source={reactNativeJpg} />
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
  image: {
    height: 400,
    width: 350,
  },
});

export default App;
