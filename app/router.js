import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function mainRoute() {
  return this.route('tasks', function tasksRoute() {
    this.route('github');
  });
});

export default Router;
