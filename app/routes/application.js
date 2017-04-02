import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      as: 'query'
    }
  },
  actions: {
    searchIssues(query) {
      this.transitionTo('issues', { queryParams: { q: query} });
    }
  },
  model(params) {
    return params;
  }
});
