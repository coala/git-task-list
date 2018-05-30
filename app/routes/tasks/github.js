import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import {
  getTrackerIdentifiers,
  getTrackerDefaultLabels,
} from '../../utils/task-utils';

export default Route.extend({
  // services
  github: inject(),
  organizations: inject(),
  store: inject(),
  currentOrg: null,
  currentOrgSlug: null,
  labels: null,

  beforeModel(transition) {
    const orgSlug = transition.queryParams.org;
    this.set('currentOrgSlug', orgSlug);
    this.set('currentOrg', this.get('organizations').fetch(orgSlug));

    const defaultLabels = getTrackerDefaultLabels(
      this.get('currentOrg'),
      'github',
    );
    this.set('labels', transition.queryParams.labels || defaultLabels);
  },

  model() {
    const store = this.get('store');
    const github = this.get('github');
    const identifiers = getTrackerIdentifiers(this.get('currentOrg'), 'github');

    const tasks = github.tasks({
      orgs: identifiers,
      labels: this.get('labels'),
    });

    tasks.then((data) => {
      data.forEach((task) => {
        const taskWithOrg = Object.assign(
          { organization: this.get('currentOrgSlug') },
          task,
        );
        store.pushPayload('github-task', taskWithOrg);
      });
      return data;
    });

    const onlySelectedOrg = task =>
      task.organization === this.get('currentOrgSlug');

    return tasks.then(() =>
      store.peekAll('github-task').filter(onlySelectedOrg));
  },

  setupController(controller, model) {
    controller.set('tasks', model);
    controller.set('isGithubpage', true);
  },

});
