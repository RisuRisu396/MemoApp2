import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './src/components/Hello';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang>World</Hello>
      <Hello style={{fontSize: 16}}>small Workd</Hello>
      <Text>Open up App.js to start working on your app!</Text>
      {/* eslint-disable*/}
      <StatusBar style="auto" />
    </View>
  );
}
