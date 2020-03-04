import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.text}>Hello, React!</Text>
        <Image
          style={s.image}
          source={{uri: 'https://i.imgur.com/eoTELkV.jpg'}}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
  image: {
    width: 500,
    height: 'auto',
  },
});

export default App;
