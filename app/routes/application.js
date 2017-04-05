import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    searchIssues(query) {
      this.transitionTo('issues', { queryParams: { q: query} });
    }
  },

  setupController(controller, model) {
    controller.set('organizations', [{
      name: 'Discourse',
      query: { q: 'is:open is:issue user:discourse' },
    }, {
      name: 'Wikimedia',
      query: { q: 'is:open is:issue user:wikimedia' },
    }, {
      name: 'openSUSE',
      query: { q: 'is:open is:issue user:opensuse' },
    }]);
    this._super(controller, model);
  }

});
