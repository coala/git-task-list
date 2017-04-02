import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  afterModel: (model) => model.reload,
  model(params) {
    return this.issueOnly(this.store.query('issue', params));
  },
  issueOnly(model) {
    return model.then((issues) => {
      return issues.filter((issue) => {
        return !issue.get('pullRequest')
      });
    });
  }
});
