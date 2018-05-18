import Route from '@ember/routing/route';
export default Route.extend({
  model() {
    // Query params is available on parant route
    const query = this.modelFor('application');
    return this.issueOnly(this.store.query('issue',
                                            query,
                                            { include: 'repository' }));
  },
  issueOnly(model) {
    return model.then((issues) => {
      return issues.filter((issue) => {
        return !issue.get('pullRequest')
      });
    });
  }
});
