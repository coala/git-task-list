import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  keyForRelationship(key) {
    return key + '_url';
  },
  keyForLink(key, rel) {
    if(rel === 'belongsTo') {
      return key + '_id'
    }
    return this._super(...arguments);
  },
  normalizeArrayResponse(store, primaryModelClass, payload) {
    payload.items.forEach((val) => {
      val.links = { repository_url: val.repository_url}
      return val;
    })
    return this._super(...arguments)
  }
});
