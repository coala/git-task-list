import { helper } from '@ember/component/helper';
import moment from 'moment';

export function timeAgo(params) {
  return moment(params[0]).fromNow();
}

export default helper(timeAgo);
