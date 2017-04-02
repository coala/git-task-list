import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchIssues(query) {
      this.transitionToRoute('issues', { queryParams: { q: query} });
    }
  },
});
