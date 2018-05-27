import { assign } from '@ember/polyfills';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://api.github.com',
  init() {
    this._super();
    this.defaults = {
      sort: 'created',
        order: 'desc',
        q: 'state:open'
    };
  },
  query(store, type, query) {
    const q = query.q || '';
    if(!(q).match(this.defaults.q || '')) {
      query.q = q + ` ${this.defaults.q}`
    }
    return this._super(
      store,
      type,
      assign({}, this.defaults, query)
    );
  },
});
