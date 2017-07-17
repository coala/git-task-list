import Ember from 'ember';
import organizationList from '../organizations';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  actions: {
    searchIssues(query) {
      this.transitionTo('issues', { queryParams: { q: query} });
    }
  },
  model(params) {
    return params;
  },
  setupController(controller, model) {
    controller.set('organizations', organizationList);
    controller.set('searchParams', model.q)
    this._super(controller, model);
  }

});
