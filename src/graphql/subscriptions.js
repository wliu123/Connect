/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateHangouts = /* GraphQL */ `
  subscription OnCreateHangouts {
    onCreateHangouts {
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
export const onUpdateHangouts = /* GraphQL */ `
  subscription OnUpdateHangouts {
    onUpdateHangouts {
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
export const onDeleteHangouts = /* GraphQL */ `
  subscription OnDeleteHangouts {
    onDeleteHangouts {
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
export const onCreateFriends = /* GraphQL */ `
  subscription OnCreateFriends {
    onCreateFriends {
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
export const onUpdateFriends = /* GraphQL */ `
  subscription OnUpdateFriends {
    onUpdateFriends {
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
export const onDeleteFriends = /* GraphQL */ `
  subscription OnDeleteFriends {
    onDeleteFriends {
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
export const onCreateUsersFriends = /* GraphQL */ `
  subscription OnCreateUsersFriends {
    onCreateUsersFriends {
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
export const onUpdateUsersFriends = /* GraphQL */ `
  subscription OnUpdateUsersFriends {
    onUpdateUsersFriends {
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
export const onDeleteUsersFriends = /* GraphQL */ `
  subscription OnDeleteUsersFriends {
    onDeleteUsersFriends {
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
export const onCreateUsersHangouts = /* GraphQL */ `
  subscription OnCreateUsersHangouts {
    onCreateUsersHangouts {
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
export const onUpdateUsersHangouts = /* GraphQL */ `
  subscription OnUpdateUsersHangouts {
    onUpdateUsersHangouts {
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
export const onDeleteUsersHangouts = /* GraphQL */ `
  subscription OnDeleteUsersHangouts {
    onDeleteUsersHangouts {
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
