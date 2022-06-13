/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($owner: String) {
    onCreateUsers(owner: $owner) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($owner: String) {
    onUpdateUsers(owner: $owner) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($owner: String) {
    onDeleteUsers(owner: $owner) {
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
export const onCreateHangouts = /* GraphQL */ `
  subscription OnCreateHangouts($owner: String) {
    onCreateHangouts(owner: $owner) {
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
export const onUpdateHangouts = /* GraphQL */ `
  subscription OnUpdateHangouts($owner: String) {
    onUpdateHangouts(owner: $owner) {
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
export const onDeleteHangouts = /* GraphQL */ `
  subscription OnDeleteHangouts($owner: String) {
    onDeleteHangouts(owner: $owner) {
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
export const onCreateFriends = /* GraphQL */ `
  subscription OnCreateFriends($owner: String) {
    onCreateFriends(owner: $owner) {
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
export const onUpdateFriends = /* GraphQL */ `
  subscription OnUpdateFriends($owner: String) {
    onUpdateFriends(owner: $owner) {
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
export const onDeleteFriends = /* GraphQL */ `
  subscription OnDeleteFriends($owner: String) {
    onDeleteFriends(owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel {
    onCreateChannel {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel {
    onUpdateChannel {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel {
    onDeleteChannel {
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
