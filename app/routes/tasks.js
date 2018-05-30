import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  // services
  github: inject(),
  organizations: inject(),
  store: inject(),

  queryParams: {
    org: {
      refreshModel: true,
    },
    labels: {
      refreshModel: true,
    },
  },

  beforeModel(transition) {
    const currentOrg = transition.queryParams.org;
    this.set('currentOrg', this.organizations.fetch(currentOrg));
  },

  setupController(controller) {
    controller.set('currentOrg', this.get('currentOrg'));
  },
});
