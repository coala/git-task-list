import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload) {
    payload['issue'] = payload.items;
    return this._super(...arguments)
  },
});
