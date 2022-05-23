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
          owner
        }
        nextToken
      }
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
          owner
        }
        nextToken
      }
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
          owner
        }
        nextToken
      }
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
        }
        createdAt
        updatedAt
        owner
      }
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
        }
        createdAt
        updatedAt
        owner
      }
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
        }
        createdAt
        updatedAt
        owner
      }
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
      createdAt
      updatedAt
      owner
    }
  }
`;
