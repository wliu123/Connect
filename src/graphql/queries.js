/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      name
      profile_picture
      email
      Friends {
        nextToken
        startedAt
      }
      Hangouts {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      created_by
      joined_by
      date
      public
      userss {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        created_by
        joined_by
        date
        public
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        created_by
        joined_by
        date
        public
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      follower
      followed
      userss {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        follower
        followed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        follower
        followed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsersFriends = /* GraphQL */ `
  query GetUsersFriends($id: ID!) {
    getUsersFriends(id: $id) {
      id
      usersID
      friendsID
      users {
        id
        name
        profile_picture
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      friends {
        id
        follower
        followed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsersFriends = /* GraphQL */ `
  query ListUsersFriends(
    $filter: ModelUsersFriendsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersID
        friendsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsersFriends = /* GraphQL */ `
  query SyncUsersFriends(
    $filter: ModelUsersFriendsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersFriends(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usersID
        friendsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsersHangouts = /* GraphQL */ `
  query GetUsersHangouts($id: ID!) {
    getUsersHangouts(id: $id) {
      id
      usersID
      hangoutsID
      users {
        id
        name
        profile_picture
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      hangouts {
        id
        title
        location
        created_by
        joined_by
        date
        public
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsersHangouts = /* GraphQL */ `
  query ListUsersHangouts(
    $filter: ModelUsersHangoutsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersHangouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersID
        hangoutsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsersHangouts = /* GraphQL */ `
  query SyncUsersHangouts(
    $filter: ModelUsersHangoutsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersHangouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usersID
        hangoutsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
