import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FriendsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HangoutsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersFriendsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersHangoutsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Users {
  readonly id: string;
  readonly name?: string | null;
  readonly profile_picture?: string | null;
  readonly email: string;
  readonly Friends?: (UsersFriends | null)[] | null;
  readonly Hangouts?: (UsersHangouts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class Friends {
  readonly id: string;
  readonly follower: string;
  readonly followed?: (string | null)[] | null;
  readonly userss?: (UsersFriends | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Friends, FriendsMetaData>);
  static copyOf(source: Friends, mutator: (draft: MutableModel<Friends, FriendsMetaData>) => MutableModel<Friends, FriendsMetaData> | void): Friends;
}

export declare class Hangouts {
  readonly id: string;
  readonly title: string;
  readonly location: string;
  readonly created_by: string;
  readonly joined_by?: (string | null)[] | null;
  readonly date: string;
  readonly public?: boolean | null;
  readonly userss?: (UsersHangouts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Hangouts, HangoutsMetaData>);
  static copyOf(source: Hangouts, mutator: (draft: MutableModel<Hangouts, HangoutsMetaData>) => MutableModel<Hangouts, HangoutsMetaData> | void): Hangouts;
}

export declare class UsersFriends {
  readonly id: string;
  readonly users: Users;
  readonly friends: Friends;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UsersFriends, UsersFriendsMetaData>);
  static copyOf(source: UsersFriends, mutator: (draft: MutableModel<UsersFriends, UsersFriendsMetaData>) => MutableModel<UsersFriends, UsersFriendsMetaData> | void): UsersFriends;
}

export declare class UsersHangouts {
  readonly id: string;
  readonly users: Users;
  readonly hangouts: Hangouts;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UsersHangouts, UsersHangoutsMetaData>);
  static copyOf(source: UsersHangouts, mutator: (draft: MutableModel<UsersHangouts, UsersHangoutsMetaData>) => MutableModel<UsersHangouts, UsersHangoutsMetaData> | void): UsersHangouts;
}