import DS from 'ember-data';

export default DS.Model.extend({
  total_count: DS.attr(),
  incomplete_results: DS.attr(),
  url: DS.attr(),
  repository_url: DS.attr(),
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
  summary: Ember.computed('body', function() {
    return this.get('body').slice(0, 30);
  })
});
