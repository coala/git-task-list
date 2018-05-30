import Service, { inject } from '@ember/service';
import { GraphQLClient } from 'graphql-request';
import { tasksQuery, queryBuilder } from '../graphql/github';

export default Service.extend({
  userSettings: inject(),
  githubUrl: 'https://api.github.com/graphql',

  init(...args) {
    this._super(...args);
    this.client = new GraphQLClient(this.get('githubUrl'), {
      headers: {
        Authorization: `bearer ${this.userSettings.tokens.get('github_com')}`,
      },
    });
  },

  tasks(context) {
    const transform = response => response.search.nodes.map((node) => {
      const updatedNode = Object.assign({
        type: 'github-task',
      }, node);
      updatedNode.labels = node.labels.nodes;
      return updatedNode;
    });

    const request = this.client.request(
      tasksQuery,
      { searchQuery: queryBuilder(context) },
    );

    request.catch((e) => {
      e.payload = Object.assign((e.payload || {}), { service: 'github' });
      throw e;
    });
    return request.then(transform);
  },
});
