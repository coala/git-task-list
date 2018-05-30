import Component from '@ember/component';
import { calculateForegroundColor } from '../utils/label-utils';

export default Component.extend({
  init(...args) {
    this._super(...args);
  },
  didReceiveAttrs() {
    this.get('task').labels.map((label) => {
      const decoratedLabel = label;
      decoratedLabel.fontColor = calculateForegroundColor(label.color);
      return decoratedLabel;
    });
  },
  didInsertElement() {
    this.$().linkify({
      validate: {
        url(value) {
          return /^(http|ftp)s?:\/\//.test(value);
        },
      },
      formatHref(href, type) {
        if (type === 'mention') {
          return `https://github.com/${
            href.substring(1)}`;
        }
        return href;
      },
    });
  },
});
