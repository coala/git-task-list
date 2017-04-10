import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchIssues(query) {
      this.get('onSearch')(query);
    }
  },
  didRender() {
    this._super(...arguments)
  }
});
