import { helper } from '@ember/component/helper';

function truncateText(params, hash) {
  const [value] = params;
  const { limit } = hash;
  let text = '';

  if (value && value.length > 0) {
    text = value.substr(0, limit);

    if (value.length > limit) {
      text += '...';
    }
  }

  return text;
}

export default helper(truncateText);
