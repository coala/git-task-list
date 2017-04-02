import Ember from 'ember';
// import GitHub from 'npm:github-api';

export default Ember.Service.extend({
  github: Ember.computed('token', function() {
    if(this.get('token')) {
      return new GitHub({ token: this.token });
    } else {
      return new GitHub();
    }
  }),
  issues: [],
  users: [],
  labels: [],
  token: null,
  // https://developer.github.com/v3/search/#search-issues
  // parameters
  //   {
  //     q: "", => Search query
  //     sort: "", => Sort by
  //     order: "" => Ordering
  //   }
  getIssues(params) {
    this.set('token', 'cae5b1c414a260d027507065c5c7db1dd50f9b7f');
    return this.get('github').search().forIssues({q: 'label:bug', page: 1}).then((val) => console.log(val));
  }
});
