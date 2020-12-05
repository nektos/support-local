// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vendor } = initSchema(schema);

export {
  Vendor
};