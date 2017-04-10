import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    groupByRepo() {
      this.groupModelByRepo();
      this.set('groupByRepoVal', !this.get('groupByRepoVal'));
    }
  },
  groupModelByRepo() {
    if(!this.get('sorted')){
      let model = this.get('model');
      this.set('unsortedModel', model);
      this.set('model', model.sortBy('repository.id'));
      this.set('sortedModel', this.get('model'));
      this.set('sorted', true);
    } else {
      if(this.get('groupByRepoVal')){
        this.set('model', this.get('unsortedModel'));
      } else {
        this.set('model', this.get('sortedModel'));
      }
    }
  },

});
