import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchIssues(query) {
      this.get('onSearch')(query);
    }
  },

  owner: Ember.computed(function() {
    return Ember.getOwner(this)
  }),

  searchParams: Ember.computed('params.q', function() {
    return this.get('owner').lookup('router:main').router.state.queryParams['q'];
  })
});
