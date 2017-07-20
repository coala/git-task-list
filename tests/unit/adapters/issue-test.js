import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:issue', 'Unit | Adapter | issue', {
  // Specify the other units that are required for this test.
  needs: ['model:repository']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
