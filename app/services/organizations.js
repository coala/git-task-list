import Object, { computed } from '@ember/object';
import Service from '@ember/service';
import organizations from '../data/organizations';

export default Service.extend({
  init(...args) {
    this._super(...args);
    this.organizations = Object.create(organizations);
  },

  list: computed('organizations', function getOrganizationList() {
    return this.organizations;
  }),

  fetch(slug) {
    return this.organizations.get(slug);
  },
});
