import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  organizations: inject(),
  queryParams: ['org'],
});
