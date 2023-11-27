import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground  } from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground
    source={require('../img/bck5.jpg')}
    style={styles.background}
  >
    <View style={styles.container}>

      <Image
        source={require('../img/novagni.png')} 
        style={styles.image}
      />
      <Text style={styles.txt}>This is Your Splash Screen!</Text>
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
    // backgroundColor: '#fffff0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '80%', // Set the width of your image
    height: 75, // Set the height of your image
    marginBottom: 20, // Adjust as needed
  },

  txt: {
    fontSize: 15,
    color: '#191970',
  },
});

export default SplashScreen;
