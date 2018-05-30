import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    if (transition.queryParams.org) {
      this.transitionTo('tasks.github');
    } else {
      this.transitionTo('/');
    }
  },
});
