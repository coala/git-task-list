import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  needs: ['service:userSettings', 'service:github', 'service:organizations'],
});

test('it exists', function applicationRouteTest(assert) {
  const route = this.subject();
  assert.ok(route);
});
