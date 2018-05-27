import Component from '@ember/component';

export default Component.extend({
  actions: {
    searchIssues(query) {
      this.get('onSearch')(query);
    }
  },
  didRender() {
    this._super(...arguments)
  }
});
