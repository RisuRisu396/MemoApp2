import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  // 入力されたテキストを保持する。初期値は空.
  const [bodyText, SetBodyText] = useState('');
  // createボタンが押された時の処理
  function handlePress() {
    // ログインしているユーザをcurrentUserとして取得
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
    // 成功した時の処理
      .then((docRef) => {
        console.log('Created', docRef.id);
        navigation.goBack();
      })
    // 失敗した時の処理
      .catch((error) => {
        console.log('Error', error);
      });
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          // 入力されたテキストを受け取り、setBodyTextにtextを渡す
          onChangeText={(text) => { SetBodyText(text); }}
          // 開いた瞬間に編集モードになる
          autoFocus
        />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          handlePress();
        }}
      />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
