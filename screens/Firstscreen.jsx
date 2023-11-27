// firstScreen.js
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const FirstScreen = () => {
  return (
    <ImageBackground
      source={require('../img/bck3.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.txt}>This is Your first Screen!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'rgba(255,255,240,0.5)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 15,
    color: '#191970',
  },
});

export default FirstScreen;
