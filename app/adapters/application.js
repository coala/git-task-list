import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'https://api.github.com/search',
  defaults: {
    sort: 'created',
    order: 'desc',
    q: '',
    state: 'open'
  },
  query(store, type, query) {
    return this._super(
      store,
      type,
      Ember.assign({}, this.defaults, query)
    );
  },
});
