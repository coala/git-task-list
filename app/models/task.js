import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr(),
  bodyText: DS.attr('string'),
  labels: DS.attr(),
  organization: DS.attr('string'),
  url: DS.attr('string'),
  updatedAt: DS.attr('date'),
  repository: DS.attr(),
  commentCount: DS.attr('number'),
  isPullRequest: DS.attr('boolean'),
});
