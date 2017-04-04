import Ember from 'ember';

export default Ember.Controller.extend({
  toggleSidenav: true,
  actions: {
    searchIssues(query) {
      this.transitionToRoute('issues', { queryParams: { q: query} });
    },
    toggleSidenav() {
      console.log("editing sidenav");
      return this.set('toggleSidenav', !this.get('toggleSidenav'));
    },
    searchByOrg(org) {
      this.send('searchIssues', org.query.q);
    }
  }
});
