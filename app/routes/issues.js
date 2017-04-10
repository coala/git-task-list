import Ember from 'ember';

export default Ember.Route.extend({
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
