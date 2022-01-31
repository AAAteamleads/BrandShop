// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Size, ProductItem, Gender, SizeProductItem } = initSchema(schema);

export {
  Size,
  ProductItem,
  Gender,
  SizeProductItem
};