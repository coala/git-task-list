import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'https://api.github.com/search',
  defaults: {
    sort: 'created',
    order: 'desc',
    q: 'state:open'
  },
  query(store, type, query) {
    const q = query.q || ''
    if(!(q).match(this.defaults.q || '')) {
      query.q = q + ` ${this.defaults.q}`
    }
    return this._super(
      store,
      type,
      Ember.assign({}, this.defaults, query)
    );
  },
});
