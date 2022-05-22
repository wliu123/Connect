/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      name
      profile_picture
      email
      bio
      followersCount
      followingCount
      hangouts {
        items {
          id
          title
          location
          description
          created_by
          joined_by
          joined
          date
          public
          join_count
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        profile_picture
        email
        bio
        followersCount
        followingCount
        hangouts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        profile_picture
        email
        bio
        followersCount
        followingCount
        hangouts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getHangouts = /* GraphQL */ `
  query GetHangouts($id: ID!) {
    getHangouts(id: $id) {
      id
      title
      location
      description
      created_by
      joined_by
      joined
      date
      public
      join_count
      user {
        id
        name
        profile_picture
        email
        bio
        followersCount
        followingCount
        hangouts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listHangouts = /* GraphQL */ `
  query ListHangouts(
    $filter: ModelHangoutsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHangouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        location
        description
        created_by
        joined_by
        joined
        date
        public
        join_count
        user {
          id
          name
          profile_picture
          email
          bio
          followersCount
          followingCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHangouts = /* GraphQL */ `
  query SyncHangouts(
    $filter: ModelHangoutsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHangouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        location
        description
        created_by
        joined_by
        joined
        date
        public
        join_count
        user {
          id
          name
          profile_picture
          email
          bio
          followersCount
          followingCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getFriends = /* GraphQL */ `
  query GetFriends($id: ID!) {
    getFriends(id: $id) {
      id
      following
      followedBy
      name
      profile_picture
      email
      bio
      followersCount
      followingCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $filter: ModelFriendsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        following
        followedBy
        name
        profile_picture
        email
        bio
        followersCount
        followingCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFriends = /* GraphQL */ `
  query SyncFriends(
    $filter: ModelFriendsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFriends(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        following
        followedBy
        name
        profile_picture
        email
        bio
        followersCount
        followingCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
