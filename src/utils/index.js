// 日付を文字列に変換
import { format } from 'date-fns';
// eslint-disable-next-line import/prefer-default-export
export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

// エラーを翻訳
export function translateError(code) {
  const error = { title: 'エラー', description: '時間をおいてお試しください' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'メールアドレスが不正です。';
      break;
    case 'auth/user-disabled':
      error.description = 'メールアドレスが無効です。';
      break;
    case 'auth/user-not-found':
      error.description = 'ユーザーが見つかりませんでした。';
      break;
    case 'auth/wrong-password':
      error.description = 'パスワードが間違っています。';
      break;

    case 'auth/email-already-in-use':
      error.description = 'メールアドレスが使用されています';
      break;
    case 'auth/operation-not-allowed':
      error.description = '開発者にお問い合わせください。';
      break;
    case 'auth/week-password':
      error.description = 'パスワードが簡単すぎます。';
      break;
    default:
  }
  return error;
}
