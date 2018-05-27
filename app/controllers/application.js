import Controller from '@ember/controller';

export default Controller.extend({
  toggleSidenav: true,
  actions: {
    searchIssues(query) {
      this.transitionToRoute('issues', { queryParams: { q: query } });
    },
    toggleSidenav() {
      return this.set('toggleSidenav', !this.get('toggleSidenav'));
    },
    searchByOrg(org) {
      this.send('searchIssues', org.query.q);
    }
  }
});
