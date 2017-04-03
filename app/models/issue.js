import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  url: DS.attr(),
  repository_url: DS.attr(),
  repository: DS.belongsTo('repository'),
  repository_id: Ember.computed('repository_url', function() {
    const repoAry = this.get('repository_url').split('/');
    return repoAry[a.length - 1] + '/' + repoAry[a.length - 2];
  }),
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

  summary: Ember.computed('body', function() {
    return this.get('body').slice(0, 30);
  })
});
