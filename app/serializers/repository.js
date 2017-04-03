import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {repository: payload}
    return this._super(store, primaryModelClass, payload, id, requestType)
  }
});
