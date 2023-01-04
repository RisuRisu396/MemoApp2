/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* eslint-disable*/}
      <StatusBar style="auto" />
    </View>
  );
}
