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
      bio
      followersCount
      followingCount
      createdAt
      updatedAt
      owner
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
      bio
      followersCount
      followingCount
      createdAt
      updatedAt
      owner
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
      bio
      followersCount
      followingCount
      createdAt
      updatedAt
      owner
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
export const updateHangouts = /* GraphQL */ `
  mutation UpdateHangouts(
    $input: UpdateHangoutsInput!
    $condition: ModelHangoutsConditionInput
  ) {
    updateHangouts(input: $input, condition: $condition) {
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
export const deleteHangouts = /* GraphQL */ `
  mutation DeleteHangouts(
    $input: DeleteHangoutsInput!
    $condition: ModelHangoutsConditionInput
  ) {
    deleteHangouts(input: $input, condition: $condition) {
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
export const createFriends = /* GraphQL */ `
  mutation CreateFriends(
    $input: CreateFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    createFriends(input: $input, condition: $condition) {
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
export const updateFriends = /* GraphQL */ `
  mutation UpdateFriends(
    $input: UpdateFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    updateFriends(input: $input, condition: $condition) {
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
export const deleteFriends = /* GraphQL */ `
  mutation DeleteFriends(
    $input: DeleteFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    deleteFriends(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
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
