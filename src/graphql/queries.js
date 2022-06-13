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
      createdAt
      updatedAt
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const idByEmail = /* GraphQL */ `
  query IdByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    idByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        profile_picture
        email
        bio
        followersCount
        followingCount
        createdAt
        updatedAt
        owner
      }
      nextToken
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
      createdAt
      updatedAt
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const hangoutsByDate = /* GraphQL */ `
  query HangoutsByDate(
    $date: String!
    $sortDirection: ModelSortDirection
    $filter: ModelHangoutsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hangoutsByDate(
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        createdAt
        updatedAt
        owner
      }
      nextToken
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
      followee
      createdAt
      updatedAt
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
        followee
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        channelID
        author
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChannelID = /* GraphQL */ `
  query MessagesByChannelID(
    $channelID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChannelID(
      channelID: $channelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        channelID
        author
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      creator
      creator_name
      creator_picture
      chosen
      chosen_name
      chosen_picture
      createdAt
      updatedAt
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creator
        creator_name
        creator_picture
        chosen
        chosen_name
        chosen_picture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
