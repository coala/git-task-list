import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  // services
  userSettings: inject(),
  github: inject(),
  organizations: inject(),

  model() {
    return this.get('organizations').get('list');
  },

  setupController(controller, model) {
    // show modal when user has no github token
    if (!this.userSettings.get('githubTokenModalSeen')) { controller.set('showModal', !this.userSettings.tokens.get('github_com')); }
    this._super(controller, model);
  },

});
