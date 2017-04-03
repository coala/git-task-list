import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  model(params) {
    return this.issueOnly(this.store.query('issue', params, { include: 'repository' }));
  },
  issueOnly(model) {
    return model.then((issues) => {
      return issues.filter((issue) => {
        return !issue.get('pullRequest')
      });
    });
  }
});
