import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const ThirdScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>This is Your third Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fffff0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt:{
    fontSize:15,
    color:'#191970',
  }
});

export default ThirdScreen;
