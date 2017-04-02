import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'https://api.github.com/search',
  defaults: {
    sort: 'created',
    order: 'desc',
    q: { state: 'open' }
  },
  query(store, type, query) {
    query['q']     = Ember.assign(this.defaults['q'], query['q'])
    const newQuery = Ember.assign(this.defaults, query);
    return this._super(store, type, newQuery);
  }
});
