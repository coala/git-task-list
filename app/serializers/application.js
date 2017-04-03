import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  singularModelName: 'issue',
  normalizeArrayResponse(store, primaryModelClass, payload) {
    payload[this.singularModelName] = payload.items;
    delete payload.items;
    delete payload.total_count;
    delete payload.incomplete_results;
    return this._super(...arguments)
  },
});
