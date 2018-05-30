import EmberObject from '@ember/object';
import Service from '@ember/service';
import { getObject, setObject } from '../utils/storage';

const SETTINGS_KEY = 'user_settings';
const TOKENS_KEY = 'user_tokens';
const PROPERTIES = ['githubTokenModalSeen'];

// Use github_com instead of github.com for localstorage because of ember `set`
// and `get` internals
const userSettings = Service.extend({
  init(...args) {
    this._super(...args);
    this.tokens = EmberObject.create({
      github_com: null,
    });
    this.reload();
  },

  reload() {
    this.reloadSettings();
    this.reloadToken();
  },

  reloadSettings() {
    const settings = getObject(SETTINGS_KEY) || {};
    // Only set property defined in PROPERTIES
    PROPERTIES.forEach(property => this.set(property, settings[property]));
  },

  reloadToken() {
    const tokens = getObject(TOKENS_KEY) || {};
    Object.keys(tokens).forEach(key => this.tokens.set(key, tokens[key]));
  },

  setSetting(setting, value) {
    this.set(setting, value);
    this.persistSettings();
    return setting;
  },

  setToken(service, token) {
    this.tokens.set(service, token);
    this.persistTokens();
    return token;
  },

  persistSettings() {
    const currentSettings = {};
    PROPERTIES.forEach((property) => {
      currentSettings[property] = this.get(property);
    });
    setObject(SETTINGS_KEY, currentSettings);
  },

  persistTokens() {
    setObject(TOKENS_KEY, this.tokens);
  },

});

export default userSettings;
