import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchIssues(query) {
      this.get('onSearch')(query);
    }
  },
  searchParams: Ember.computed('params.q', function() {
    return this.get('params')['q'];
  })
});
