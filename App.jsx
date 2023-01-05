import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroudColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      {/* ログアウト */}
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text styke={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
      {/* 買い物リスト */}
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年12月24日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年12月24日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年12月24日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      {/* プラスボタン */}
      <View>
        <Text>+</Text>
      </View>

    </View>
  );
}
