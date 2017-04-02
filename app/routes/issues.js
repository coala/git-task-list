import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('issue', params);
  }
});
