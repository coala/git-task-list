import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('issues', function() {
    this.route('issue', {path: "/post/:issue_id"});
  });
});

export default Router;
