import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import { inject } from '@ember/service';

export default Component.extend({
  // Services
  userSettings: inject(),

  // Properties
  token_github_com: oneWay('userSettings.tokens.github_com'),

  init(...args) {
    this._super(...args);
  },
  actions: {
    hideModal() {
      this.set('isActive', false);
      this.userSettings.setSetting('githubTokenModalSeen', true);
    },
    saveSettings() {
      this.userSettings.setToken('github_com', this.get('token_github_com'));
      this.set('isActive', false);
    },
  },
  classNames: ['modal'],
  classNameBindings: ['isActive'],
  isActive: false,
});
