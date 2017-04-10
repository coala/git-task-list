import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://api.github.com',
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
