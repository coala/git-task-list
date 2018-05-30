import { warn } from '@ember/debug';
import { isIterable } from '../utils/commons';

export const tasksQuery = `query($searchQuery: String!){
  search(query: $searchQuery, type: ISSUE, first: 100 ) {
    nodes {
      _type: __typename
      ... on Issue {
        id
        author {
          ...authorFragment
        }
        bodyText
        comments {
          totalCount
        }
        labels {
          ...labelsFragment
        }
        repository {
          ...repositoryFragment
        }
        title
        updatedAt
        url
      }
      ... on PullRequest {
        id
        author {
          ...authorFragment
        }
        bodyText
        comments {
          totalCount
        }
        labels {
          ...labelsFragment
        }
        repository {
          ...repositoryFragment
        }
        title
        updatedAt
        url
      }
    }
  }
}
fragment repositoryFragment on Repository {
  nameWithOwner
  owner {
    avatarUrl
  }
  url
}
fragment labelsFragment on LabelConnection {
  totalCount
  nodes {
    color
    description
    id
    name
  }
}
fragment authorFragment on Actor {
  url
  login
  avatarUrl
}`;

// return an array of github search queries, e.g [paramKey:paramValue[0], ...,
// paramKey:paramValue[-1]]
function buildParams(paramKey, paramValue) {
  if (isIterable(paramValue)) {
    return paramValue.reduce((seed, v) => [...seed, `${paramKey}:${v}`], []);
  } else if (paramValue) {
    return [`${paramKey}:${paramValue}`];
  }
  return [];
}

export function queryBuilder({ orgs, labels }) {
  let queries = ['sort:updated-desc', 'state:open', 'no:assignee', 'is:issue'];
  if (!orgs) {
    warn('Org is not defined.');
  } else {
    queries = queries.concat(buildParams('user', orgs));
  }
  if (labels) {
    queries = queries.concat(buildParams('label', labels));
  }
  return queries.join(' ');
}
