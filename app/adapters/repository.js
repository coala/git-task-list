import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  memberUrl: 'http://api.github.com/repos',
  singularModelName: 'repository',
  buildURL(modelName, id, snapshot, requestType, query) {
    if(requestType === 'findRecord') {
      this.host = id;
      id = '';
      modelName = '';
    }
    return this._super(modelName, id, snapshot, requestType, query);
  }
});
