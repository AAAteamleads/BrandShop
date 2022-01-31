import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SizeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GenderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SizeProductItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Size {
  readonly id: string;
  readonly size_title?: string;
  readonly ProductItems?: (SizeProductItem | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Size, SizeMetaData>);
  static copyOf(source: Size, mutator: (draft: MutableModel<Size, SizeMetaData>) => MutableModel<Size, SizeMetaData> | void): Size;
}

export declare class ProductItem {
  readonly id: string;
  readonly product_name?: string;
  readonly cost?: number;
  readonly description?: string;
  readonly genderID: string;
  readonly sizes?: (SizeProductItem | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProductItem, ProductItemMetaData>);
  static copyOf(source: ProductItem, mutator: (draft: MutableModel<ProductItem, ProductItemMetaData>) => MutableModel<ProductItem, ProductItemMetaData> | void): ProductItem;
}

export declare class Gender {
  readonly id: string;
  readonly title?: string;
  readonly ProductItems?: (ProductItem | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Gender, GenderMetaData>);
  static copyOf(source: Gender, mutator: (draft: MutableModel<Gender, GenderMetaData>) => MutableModel<Gender, GenderMetaData> | void): Gender;
}

export declare class SizeProductItem {
  readonly id: string;
  readonly size: Size;
  readonly productItem: ProductItem;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SizeProductItem, SizeProductItemMetaData>);
  static copyOf(source: SizeProductItem, mutator: (draft: MutableModel<SizeProductItem, SizeProductItemMetaData>) => MutableModel<SizeProductItem, SizeProductItemMetaData> | void): SizeProductItem;
}