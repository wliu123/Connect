// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Friends, Hangouts, UsersFriends, UsersHangouts } = initSchema(schema);

export {
  Users,
  Friends,
  Hangouts,
  UsersFriends,
  UsersHangouts
};