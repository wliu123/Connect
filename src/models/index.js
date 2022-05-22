// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Hangouts, Friends } = initSchema(schema);

export {
  Users,
  Hangouts,
  Friends
};