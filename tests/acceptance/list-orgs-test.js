import { module, test } from 'qunit';
import { visit, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list orgs', function listOrgsAcceptanceTest(hooks) {
  setupApplicationTest(hooks);

  test('should show list of organizations', async function showListOfOrgTest(assert) {
    await visit('/');
    const totalDefaultOrg = findAll('.organization-card').length;
    assert.equal(totalDefaultOrg, 11);
  });
});
