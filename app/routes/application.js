import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    searchIssues(query) {
      this.transitionTo('issues', { queryParams: { q: query} });
    }
  },
  model(params) {
    return params;
  }
});
