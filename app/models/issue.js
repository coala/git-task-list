import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  url: DS.attr(),
  repository_url: DS.attr(),
  repository_id: computed('repository_url', function() {
    const repoAry = this.get('repository_url').split('/');
    return repoAry[repoAry.length - 1] + '/' + repoAry[repoAry.length - 2];
  }),
  repository: DS.belongsTo(),
  labels_url: DS.attr(),
  comments_url: DS.attr(),
  events_url: DS.attr(),
  html_url: DS.attr(),
  number: DS.attr(),
  title: DS.attr(),
  state: DS.attr(),
  locked: DS.attr(),
  assignee: DS.attr(),
  milestone: DS.attr(),
  comments: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  closed_at: DS.attr(),
  body: DS.attr(),
  score: DS.attr(),
  user: DS.attr(),
  pullRequest: DS.attr(),

  summary: computed('body', function() {
    return this.get('body').slice(0, 30);
  })
});
