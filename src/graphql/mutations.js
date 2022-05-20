/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createHangouts = /* GraphQL */ `
  mutation CreateHangouts(
    $input: CreateHangoutsInput!
    $condition: ModelHangoutsConditionInput
  ) {
    createHangouts(input: $input, condition: $condition) {
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
export const updateHangouts = /* GraphQL */ `
  mutation UpdateHangouts(
    $input: UpdateHangoutsInput!
    $condition: ModelHangoutsConditionInput
  ) {
    updateHangouts(input: $input, condition: $condition) {
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
export const deleteHangouts = /* GraphQL */ `
  mutation DeleteHangouts(
    $input: DeleteHangoutsInput!
    $condition: ModelHangoutsConditionInput
  ) {
    deleteHangouts(input: $input, condition: $condition) {
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
export const createFriends = /* GraphQL */ `
  mutation CreateFriends(
    $input: CreateFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    createFriends(input: $input, condition: $condition) {
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
export const updateFriends = /* GraphQL */ `
  mutation UpdateFriends(
    $input: UpdateFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    updateFriends(input: $input, condition: $condition) {
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
export const deleteFriends = /* GraphQL */ `
  mutation DeleteFriends(
    $input: DeleteFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    deleteFriends(input: $input, condition: $condition) {
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
export const createUsersFriends = /* GraphQL */ `
  mutation CreateUsersFriends(
    $input: CreateUsersFriendsInput!
    $condition: ModelUsersFriendsConditionInput
  ) {
    createUsersFriends(input: $input, condition: $condition) {
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
export const updateUsersFriends = /* GraphQL */ `
  mutation UpdateUsersFriends(
    $input: UpdateUsersFriendsInput!
    $condition: ModelUsersFriendsConditionInput
  ) {
    updateUsersFriends(input: $input, condition: $condition) {
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
export const deleteUsersFriends = /* GraphQL */ `
  mutation DeleteUsersFriends(
    $input: DeleteUsersFriendsInput!
    $condition: ModelUsersFriendsConditionInput
  ) {
    deleteUsersFriends(input: $input, condition: $condition) {
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
export const createUsersHangouts = /* GraphQL */ `
  mutation CreateUsersHangouts(
    $input: CreateUsersHangoutsInput!
    $condition: ModelUsersHangoutsConditionInput
  ) {
    createUsersHangouts(input: $input, condition: $condition) {
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
export const updateUsersHangouts = /* GraphQL */ `
  mutation UpdateUsersHangouts(
    $input: UpdateUsersHangoutsInput!
    $condition: ModelUsersHangoutsConditionInput
  ) {
    updateUsersHangouts(input: $input, condition: $condition) {
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
export const deleteUsersHangouts = /* GraphQL */ `
  mutation DeleteUsersHangouts(
    $input: DeleteUsersHangoutsInput!
    $condition: ModelUsersHangoutsConditionInput
  ) {
    deleteUsersHangouts(input: $input, condition: $condition) {
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
