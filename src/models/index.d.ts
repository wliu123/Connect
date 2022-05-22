import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HangoutsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FriendsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Users {
  readonly id: string;
  readonly name?: string | null;
  readonly profile_picture?: string | null;
  readonly email: string;
  readonly bio?: string | null;
  readonly followersCount?: number | null;
  readonly followingCount?: number | null;
  readonly hangouts?: (Hangouts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class Hangouts {
  readonly id: string;
  readonly title: string;
  readonly location: string;
  readonly description: string;
  readonly joined_by?: (string | null)[] | null;
  readonly joined?: boolean | null;
  readonly date: string;
  readonly public?: boolean | null;
  readonly join_count?: number | null;
  readonly user?: Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Hangouts, HangoutsMetaData>);
  static copyOf(source: Hangouts, mutator: (draft: MutableModel<Hangouts, HangoutsMetaData>) => MutableModel<Hangouts, HangoutsMetaData> | void): Hangouts;
}

export declare class Friends {
  readonly id: string;
  readonly following: boolean;
  readonly followedBy: boolean;
  readonly name?: string | null;
  readonly profile_picture?: string | null;
  readonly email: string;
  readonly bio?: string | null;
  readonly followersCount?: number | null;
  readonly followingCount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Friends, FriendsMetaData>);
  static copyOf(source: Friends, mutator: (draft: MutableModel<Friends, FriendsMetaData>) => MutableModel<Friends, FriendsMetaData> | void): Friends;
}