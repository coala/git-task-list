import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showSettingsModal() {
      this.set('showModal', true);
    },
  },
});
