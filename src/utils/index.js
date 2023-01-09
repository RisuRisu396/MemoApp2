// 日付を文字列に変換
import { format } from 'date-fns';
// eslint-disable-next-line import/prefer-default-export
export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}
