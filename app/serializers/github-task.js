import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  pushPayload(store, payload) {
    const decoratedPayload = Object.assign({}, payload);
    decoratedPayload.commentCount = payload.comments.totalCount;
    decoratedPayload.isPullRequest = payload._type === 'PullRequest';
    store.push(this.normalize(store.modelFor('github-task'), decoratedPayload));
    return decoratedPayload;
  },
});
