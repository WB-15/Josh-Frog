import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: any;
  /** UUID String */
  UUID: any;
  /** Built-in java.math.BigDecimal */
  BigDecimal: any;
  /** Built-in scalar representing an instant in time */
  Instant: any;
  /** Unrepresentable type */
  UNREPRESENTABLE: any;
};



export type AddonEntity = {
  __typename?: 'AddonEntity';
  /** Addon's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Addon's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Addon's weight */
  weight?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Addon's title */
  title?: Maybe<Scalars['String']>;
  /** Addon's slug */
  slug?: Maybe<Scalars['String']>;
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  /** Address' ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Address' last name */
  lastName?: Maybe<Scalars['String']>;
  /** Address' city name */
  city?: Maybe<Scalars['String']>;
  /** Address' Magento Id */
  magentoId?: Maybe<Scalars['Long']>;
  /** Address' latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Address' postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Address' verification source */
  addressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Address' first name */
  firstName?: Maybe<Scalars['String']>;
  /** Address' residential status */
  residential?: Maybe<Scalars['Boolean']>;
  /** Address' company */
  company?: Maybe<Scalars['String']>;
  /** Address' state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Address' last line */
  line2?: Maybe<Scalars['String']>;
  /** Address' first line */
  line1?: Maybe<Scalars['String']>;
  /** Address' longitude */
  longitude?: Maybe<Scalars['Float']>;
};

export enum AddressVerificationSource {
  Unverified = 'Unverified',
  FedEx = 'FedEx',
  Ups = 'UPS',
  SmartyStreets = 'SmartyStreets'
}

export type AnimalEntity = {
  __typename?: 'AnimalEntity';
  /** Animal's parent */
  parent?: Maybe<AnimalEntity>;
  /** Animal's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Animal's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Animal's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Animal's children */
  children?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Animal's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Animal's slug */
  slug?: Maybe<Scalars['String']>;
};


export type BinEntity = {
  __typename?: 'BinEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Bin's human-readable ID */
  binId?: Maybe<Scalars['String']>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  /** Brand's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Brand's slug */
  slug?: Maybe<Scalars['String']>;
  /** Brand's simple products */
  products?: Maybe<Array<Maybe<SimpleProductEntity>>>;
};

export type CartEntity = {
  __typename?: 'CartEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Cart's subtotal */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Cart's sales tax */
  salesTax?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cart's item groups */
  cartItemGroups?: Maybe<Array<Maybe<CartItemGroupEntity>>>;
  /** Billing address' verification source */
  billingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' verification source */
  shippingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Cart's item count */
  cartItemsCount?: Maybe<Scalars['Long']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Cart's batch item count */
  cartBatchItemsCount?: Maybe<Scalars['Long']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Cart's items */
  cartItems?: Maybe<Array<Maybe<CartItemEntity>>>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
};

export type CartItemEntity = {
  __typename?: 'CartItemEntity';
  /** Cart item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Cart item's group */
  cartItemGroup?: Maybe<CartItemGroupEntity>;
  /** Cart item's regular price */
  regularPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item's discount price */
  discountPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item's overridden shipment needs type */
  overriddenShipmentNeedsType?: Maybe<ShippingNeedsType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Cart item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export type CartItemGroupEntity = {
  __typename?: 'CartItemGroupEntity';
  /** Cart item group's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Cart item group's regular price */
  regularPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item group's discount price */
  discountPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item group's kit product */
  kitProduct?: Maybe<KitProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  /** Category's parent */
  parent?: Maybe<CategoryEntity>;
  /** Category's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Category's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Category's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Category's published revision */
  publishedRevision?: Maybe<CategoryRevisionEntity>;
  /** Category's implicit products */
  implicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Category's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Category's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Category's children */
  children?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Category's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Category's slug */
  slug?: Maybe<Scalars['String']>;
};

export type CategoryRevisionEntity = {
  __typename?: 'CategoryRevisionEntity';
  /** Category revision's html content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type DepartmentEntity = {
  __typename?: 'DepartmentEntity';
  /** Department's parent */
  parent?: Maybe<DepartmentEntity>;
  /** Department's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Department's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Department's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Department's children */
  children?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Department's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Department's implicit products */
  implicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Department's slug */
  slug?: Maybe<Scalars['String']>;
};

export type GraphQlLikeQueryFilterInput = {
  /** Field pattern. */
  pattern?: Maybe<Scalars['String']>;
  /** Abbreviation for 'pattern'. */
  p?: Maybe<Scalars['String']>;
};

export type GraphQlPage_BrandEntity = {
  __typename?: 'GraphQLPage_BrandEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<BrandEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_CategoryEntity = {
  __typename?: 'GraphQLPage_CategoryEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_DepartmentEntity = {
  __typename?: 'GraphQLPage_DepartmentEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ProductEntity = {
  __typename?: 'GraphQLPage_ProductEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SalesOrderEntity = {
  __typename?: 'GraphQLPage_SalesOrderEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SalesOrderEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SimpleProductEntity = {
  __typename?: 'GraphQLPage_SimpleProductEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SimpleProductEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SupplierEntity = {
  __typename?: 'GraphQLPage_SupplierEntity';
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SupplierEntity>>>;
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
  /** Total elements count. */
  count: Scalars['Long'];
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
};

export type GraphQlPageableInput = {
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** The number of the page to display. */
  page?: Maybe<Scalars['Int']>;
  /** Sort conditions for the current view. */
  sort?: Maybe<Array<Maybe<GraphQlSortInput>>>;
};

export type GraphQlSingleValueFilter_BooleanInput = {
  /** Field value. */
  value?: Maybe<Scalars['Boolean']>;
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Abbreviation for 'value'. */
  v?: Maybe<Scalars['Boolean']>;
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
};

export type GraphQlSortInput = {
  /** Name of the field to sort by. */
  field?: Maybe<Scalars['String']>;
  /** Abbreviation for 'field'. */
  f?: Maybe<Scalars['String']>;
  /** Abbreviation for 'direction'. */
  d?: Maybe<SortDirection>;
  /** Direction of sorting (default: asc). */
  direction?: Maybe<SortDirection>;
};


export type InventoryCacheEntity = {
  __typename?: 'InventoryCacheEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cache's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
};

export type InventoryResult = {
  __typename?: 'InventoryResult';
  /** Result's global total quantity */
  globalQuantityTotal?: Maybe<Scalars['Long']>;
  /** Result's product */
  product?: Maybe<SimpleProductEntity>;
  /** Result's global available quantity */
  globalQuantityAvailable?: Maybe<Scalars['Long']>;
  /** Result's global unshipped quantity */
  globalQuantityUnshipped?: Maybe<Scalars['Long']>;
};

export type KitItemEntity = {
  __typename?: 'KitItemEntity';
  /** Kit item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Kit item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export type KitProductEntity = {
  __typename?: 'KitProductEntity';
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Kit's items */
  kitItems?: Maybe<Array<Maybe<KitItemEntity>>>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
};


export type MagentoSalesOrderEntity = {
  __typename?: 'MagentoSalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Magento order status */
  magentoStatus?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Magento order id */
  magentoId?: Maybe<Scalars['String']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Magento created at */
  magentoCreatedAt?: Maybe<Scalars['Instant']>;
  /** Magento shipping */
  magentoShipping?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Billing address' verification source */
  billingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Magento updated at */
  magentoUpdatedAt?: Maybe<Scalars['Instant']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' verification source */
  shippingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  /** Media's sequence */
  sequence?: Maybe<Scalars['Int']>;
  /** Media's product */
  product?: Maybe<ProductEntity>;
  /** Media's type */
  mediaType?: Maybe<MediaType>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Media's url */
  url?: Maybe<Scalars['String']>;
};

export enum MediaType {
  Image = 'Image',
  YouTubeVideo = 'YouTubeVideo',
  VimeoVideo = 'VimeoVideo',
  Panorama = 'Panorama'
}

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  /** Fetches shipping rates and returns the possibilities to the user */
  cartQuoteShippingRates?: Maybe<Array<Maybe<ShippingPossibility>>>;
  /** Triggers a re-index of all items in Elastic */
  maintenanceElasticReindexAll?: Maybe<Scalars['Boolean']>;
  /** Sets a department's parent */
  departmentSetParent?: Maybe<DepartmentEntity>;
  /** Refreshes a sales order (with Magento) by entity id */
  magentoSalesOrderRefresh?: Maybe<MagentoSalesOrderEntity>;
  /** Deletes an existing address */
  addressDelete: Scalars['Boolean'];
  /** Creates a new simple product */
  simpleProductCreate?: Maybe<SimpleProductEntity>;
  /** Updates bin on a simple product */
  simpleProductSetBin?: Maybe<SimpleProductEntity>;
  /** Updates an existing address */
  addressUpdate?: Maybe<AddressEntity>;
  /** Creates a new user, with password hash */
  userCreate?: Maybe<UserEntity>;
  /** Sets a category's parent */
  categorySetParent?: Maybe<CategoryEntity>;
  /** Registers a new user, with raw password */
  userRegister?: Maybe<UserEntity>;
  /** Adds inventory for a simple product */
  inventoryAdd?: Maybe<InventoryResult>;
  /** Removes all quantity of selected simple product from user's cart */
  cartRemoveAllSimpleProduct?: Maybe<CartEntity>;
  /** Sets inventory for a simple product */
  inventorySet?: Maybe<InventoryResult>;
  /** Triggers a re-sync of all categories with Magento */
  maintenanceMagentoSyncAllCategories?: Maybe<Scalars['Boolean']>;
  /** Verifies an existing address */
  addressVerify?: Maybe<AddressEntity>;
  /** Creates a new address */
  addressCreate?: Maybe<AddressEntity>;
  /** Gets inventory for a simple product */
  inventoryGet?: Maybe<InventoryResult>;
  /** Refreshes a simple product (with Magento) by entity id */
  simpleProductRefresh?: Maybe<SimpleProductEntity>;
  /** Creates a new category */
  categoryCreate?: Maybe<CategoryEntity>;
  /** Changes quantity of selected kit product in user's cart */
  cartChangeQuantityKitProduct?: Maybe<CartEntity>;
  /** Triggers a re-index of hibernate cache */
  maintenanceCacheFlushAll?: Maybe<Scalars['Boolean']>;
  /** Sets the shipping zip code, as a shortcut for shipping rates */
  cartSetShippingZip?: Maybe<CartEntity>;
  /** Sets the shipping address to one of the user's addresses */
  cartSetShippingAddress?: Maybe<CartEntity>;
  /** Changes quantity of selected simple product in user's cart */
  cartChangeQuantitySimpleProduct?: Maybe<CartEntity>;
  /** Removes all quantity of selected kit product from user's cart */
  cartRemoveAllKitProduct?: Maybe<CartEntity>;
  /** Removes bin from a simple product */
  simpleProductClearBin?: Maybe<SimpleProductEntity>;
  /** Triggers a re-sync of all products with Magento */
  maintenanceMagentoSyncAllProducts?: Maybe<Scalars['Boolean']>;
  /** Adds quantity of selected kit product to user's cart */
  cartAddKitProduct?: Maybe<CartEntity>;
  /** Sets active flag */
  categorySetActive?: Maybe<CategoryEntity>;
  /** Creates a new department */
  departmentCreate?: Maybe<DepartmentEntity>;
  /** Adds quantity of selected simple product to user's cart */
  cartAddSimpleProduct?: Maybe<CartEntity>;
  /** Sets the billing address to one of the user's addresses */
  cartSetBillingAddress?: Maybe<CartEntity>;
};


/** Mutation root */
export type MutationCartQuoteShippingRatesArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationDepartmentSetParentArgs = {
  parent: Scalars['UUID'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationMagentoSalesOrderRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationAddressDeleteArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductCreateArgs = {
  price: Scalars['BigDecimal'];
  title: Scalars['String'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductSetBinArgs = {
  bin: Scalars['String'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAddressUpdateArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential: Scalars['Boolean'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  id: Scalars['UUID'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationUserCreateArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  passwordHash: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationCategorySetParentArgs = {
  parent: Scalars['UUID'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationUserRegisterArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationInventoryAddArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartRemoveAllSimpleProductArgs = {
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationInventorySetArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAddressVerifyArgs = {
  commit: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAddressCreateArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential: Scalars['Boolean'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationInventoryGetArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationCategoryCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationCartChangeQuantityKitProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartSetShippingZipArgs = {
  zip: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartSetShippingAddressArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  addressId: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartChangeQuantitySimpleProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartRemoveAllKitProductArgs = {
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationSimpleProductClearBinArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartAddKitProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCategorySetActiveArgs = {
  active: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationDepartmentCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationCartAddSimpleProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartSetBillingAddressArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  addressId: Scalars['UUID'];
};

export type PdfContents = {
  __typename?: 'PdfContents';
  /** PDF's filename */
  fileName?: Maybe<Scalars['String']>;
  /** PDF's data */
  data?: Maybe<Scalars['String']>;
  /** PDF's HTML content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
};

export type ProductRevisionEntity = {
  __typename?: 'ProductRevisionEntity';
  /** Product revision's html content */
  htmlContent?: Maybe<Scalars['String']>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  /** Provides user info for current user */
  userInfo?: Maybe<UserEntity>;
  /** Generate a PDF for the sales order */
  salesOrderGeneratePdf?: Maybe<PdfContents>;
  /** Lists brands */
  brandList?: Maybe<GraphQlPage_BrandEntity>;
  /** Locates the root department */
  departmentRoot?: Maybe<DepartmentEntity>;
  /** Lists departments */
  departmentList?: Maybe<GraphQlPage_DepartmentEntity>;
  /** Provides user info by email */
  userFindByEmail?: Maybe<UserEntity>;
  /** Search categories */
  categorySearch?: Maybe<GraphQlPage_CategoryEntity>;
  /** Lists address for current user */
  addressList?: Maybe<Array<Maybe<AddressEntity>>>;
  /** Locates a product by slug */
  productBySlug?: Maybe<ProductEntity>;
  /** Lists categories */
  categoryList?: Maybe<GraphQlPage_CategoryEntity>;
  /** Locates a simple product by id */
  simpleProductInfo?: Maybe<SimpleProductEntity>;
  /** Lists suppliers */
  supplierList?: Maybe<GraphQlPage_SupplierEntity>;
  /** Provides warehouse info */
  warehouseWarehouseFindByName?: Maybe<WarehouseEntity>;
  /** Search products */
  productSearch?: Maybe<SearchResults>;
  /** Locates a category by slug */
  categoryBySlug?: Maybe<CategoryEntity>;
  /** Locates a simple product by UPC */
  simpleProductFindByUpc?: Maybe<SimpleProductEntity>;
  /** Locates the root category */
  categoryRoot?: Maybe<CategoryEntity>;
  /** Lists sales orders */
  salesOrderList?: Maybe<GraphQlPage_SalesOrderEntity>;
  /** Lists simple products */
  simpleProductList?: Maybe<GraphQlPage_SimpleProductEntity>;
  /** Locates a department by slug */
  departmentBySlug?: Maybe<DepartmentEntity>;
  /** Locates a simple product by SKU */
  simpleProductFindBySku?: Maybe<SimpleProductEntity>;
  /** Filters simple products */
  simpleProductFilter?: Maybe<GraphQlPage_SimpleProductEntity>;
  /** Locates a product by id */
  productInfo?: Maybe<ProductEntity>;
  /** Provides cart info for current user */
  cartInfo?: Maybe<CartEntity>;
  /** Retrieves a sales order */
  salesOrderInfo?: Maybe<SalesOrderEntity>;
  /** Filters sales orders */
  salesOrderFilter?: Maybe<GraphQlPage_SalesOrderEntity>;
  /** Lists products */
  productList?: Maybe<GraphQlPage_ProductEntity>;
};


/** Query root */
export type QueryBrandListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryDepartmentListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryUserFindByEmailArgs = {
  email: Scalars['String'];
};


/** Query root */
export type QueryCategorySearchArgs = {
  query: Scalars['String'];
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryProductBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QueryCategoryListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QuerySimpleProductInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QuerySupplierListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryWarehouseWarehouseFindByNameArgs = {
  name: Scalars['String'];
};


/** Query root */
export type QueryProductSearchArgs = {
  query?: Maybe<Scalars['String']>;
  animal?: Maybe<Scalars['String']>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
};


/** Query root */
export type QueryCategoryBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFindByUpcArgs = {
  upc: Scalars['String'];
};


/** Query root */
export type QuerySalesOrderListArgs = {
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
};


/** Query root */
export type QuerySimpleProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryDepartmentBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFindBySkuArgs = {
  sku: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFilterArgs = {
  supplier?: Maybe<Scalars['String']>;
  active?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  sku?: Maybe<GraphQlLikeQueryFilterInput>;
  title?: Maybe<GraphQlLikeQueryFilterInput>;
  brand?: Maybe<Scalars['String']>;
};


/** Query root */
export type QueryProductInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryCartInfoArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Query root */
export type QuerySalesOrderInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QuerySalesOrderFilterArgs = {
  billingLastName?: Maybe<GraphQlLikeQueryFilterInput>;
  orderNumber?: Maybe<GraphQlLikeQueryFilterInput>;
  billingFirstName?: Maybe<GraphQlLikeQueryFilterInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  email?: Maybe<GraphQlLikeQueryFilterInput>;
};


/** Query root */
export type QueryProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};

export enum QueryCondition {
  Eq = 'eq',
  Ne = 'ne',
  Gt = 'gt',
  Ge = 'ge',
  Lt = 'lt',
  Le = 'le',
  IsNull = 'isNull',
  NotNull = 'notNull'
}

export type SalesOrderEntity = {
  __typename?: 'SalesOrderEntity';
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Billing address' verification source */
  billingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' verification source */
  shippingAddressVerificationSource?: Maybe<AddressVerificationSource>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
};

export type SalesOrderItemEntity = {
  __typename?: 'SalesOrderItemEntity';
  /** Order item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Order item's discount */
  discountAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Order item's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order item's line cost */
  lineAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's name */
  name?: Maybe<Scalars['String']>;
  /** Order item's unit cost */
  unitAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's shipping amount */
  shippingAmount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Order item's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Order item's tax amount */
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's group */
  salesOrderItemGroup?: Maybe<SalesOrderItemGroupEntity>;
};

export type SalesOrderItemGroupEntity = {
  __typename?: 'SalesOrderItemGroupEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
};

export enum SalesOrderStatus {
  PendingPayment = 'PendingPayment',
  PendingReleaseOfHold = 'PendingReleaseOfHold',
  PendingScheduling = 'PendingScheduling',
  Unshipped = 'Unshipped',
  PartiallyShipped = 'PartiallyShipped',
  Shipped = 'Shipped',
  Cancelled = 'Cancelled'
}

export enum SalesTaxRules {
  Taxable = 'TAXABLE',
  NotTaxable = 'NOT_TAXABLE'
}

export type SearchResults = {
  __typename?: 'SearchResults';
  /** Result's animal */
  animal?: Maybe<AnimalEntity>;
  /** Result's category */
  category?: Maybe<CategoryEntity>;
  /** Result's brand */
  brand?: Maybe<BrandEntity>;
  /** Result's products */
  products?: Maybe<GraphQlPage_ProductEntity>;
};

export type ShipmentItemPossibility = {
  __typename?: 'ShipmentItemPossibility';
  /** Shipment item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Shipment item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
};

export type ShipmentPossibility = {
  __typename?: 'ShipmentPossibility';
  /** Shipment possibility's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Shipment possibility's items */
  shipmentItems?: Maybe<Array<Maybe<ShipmentItemPossibility>>>;
  /** Shipment possibility's shipping needs */
  shippingNeedsType?: Maybe<ShippingNeedsType>;
};

export enum ShippingNeedsType {
  ItemNotShipped = 'ItemNotShipped',
  ScheduleWithCustomer = 'ScheduleWithCustomer',
  OneDayService = 'OneDayService',
  TwoDayService = 'TwoDayService',
  GroundService = 'GroundService',
  FreeShipping = 'FreeShipping'
}

export type ShippingPossibility = {
  __typename?: 'ShippingPossibility';
  /** Shipping possibility's hold SWA flag */
  holdShipsWithAnimals?: Maybe<Scalars['Boolean']>;
  /** Shipping possibility's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentPossibility>>>;
};

export type SimpleProductEntity = {
  __typename?: 'SimpleProductEntity';
  /** Simple product's sales tax rules */
  salesTaxRules?: Maybe<SalesTaxRules>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Simple product's shipping restrictions */
  shippingRestrictions?: Maybe<Scalars['String']>;
  /** Simple product's weather shipping rule set */
  weatherShippingRuleSet?: Maybe<WeatherShippingRuleSetEntity>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['BigDecimal']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['BigDecimal']>;
  /** Simple product's supplier */
  supplier?: Maybe<SupplierEntity>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Simple product's brand */
  brand?: Maybe<BrandEntity>;
  /** Simple product's inventory caches */
  inventoryCaches?: Maybe<Array<Maybe<InventoryCacheEntity>>>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Simple product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Simple product's bins */
  bins?: Maybe<Array<Maybe<BinEntity>>>;
  /** Simple product's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Simple product's warehouses */
  warehouses?: Maybe<Array<Maybe<WarehouseEntity>>>;
  /** Simple product's weight */
  weight?: Maybe<Scalars['BigDecimal']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's explicit department */
  explicitDepartment?: Maybe<DepartmentEntity>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SupplierEntity = {
  __typename?: 'SupplierEntity';
  /** Supplier's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Supplier's slug */
  slug?: Maybe<Scalars['String']>;
  /** Supplier's simple products */
  products?: Maybe<Array<Maybe<SimpleProductEntity>>>;
};


export type UserEntity = {
  __typename?: 'UserEntity';
  /** User's first name */
  firstName?: Maybe<Scalars['String']>;
  /** User's last name */
  lastName?: Maybe<Scalars['String']>;
  /** User's addresses */
  addresses?: Maybe<Array<Maybe<AddressEntity>>>;
  /** User's email is confirmed */
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  /** User's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** User is an admin */
  admin?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** User's email address */
  email?: Maybe<Scalars['String']>;
};


export type VariationSetEntity = {
  __typename?: 'VariationSetEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Variation set's products */
  products?: Maybe<Array<Maybe<ProductEntity>>>;
};

export type WarehouseEntity = {
  __typename?: 'WarehouseEntity';
  /** Warehouse' ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Warehouse's city name */
  city?: Maybe<Scalars['String']>;
  /** Warehouse's postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Warehouse's latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Warehouse's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Warehouse's state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Warehouse's last line */
  line2?: Maybe<Scalars['String']>;
  /** Warehouse's first line */
  line1?: Maybe<Scalars['String']>;
  /** Warehouse's longitude */
  longitude?: Maybe<Scalars['Float']>;
};

export type WeatherShippingRuleEntity = {
  __typename?: 'WeatherShippingRuleEntity';
  /** Weather shipping rule's lag voided  */
  lagVoided?: Maybe<Scalars['Boolean']>;
  /** Weather shipping rule's local addons */
  localAddons?: Maybe<Array<Maybe<AddonEntity>>>;
  /** Weather shipping rule's distant addons */
  distantAddons?: Maybe<Array<Maybe<AddonEntity>>>;
  /** Weather shipping rule's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Weather shipping rule's priority */
  priority?: Maybe<Scalars['Long']>;
  /** Weather shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
};

export type WeatherShippingRuleSetEntity = {
  __typename?: 'WeatherShippingRuleSetEntity';
  /** Weather shipping rule set's destMoreThan60F */
  destMoreThan60F?: Maybe<WeatherShippingRuleEntity>;
  /** Weather shipping rule set's destLessThan10F */
  destLessThan10F?: Maybe<WeatherShippingRuleEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Weather shipping rule set's destLessThan30F */
  destLessThan30F?: Maybe<WeatherShippingRuleEntity>;
  /** Weather shipping rule set's destLessThan20F */
  destLessThan20F?: Maybe<WeatherShippingRuleEntity>;
  /** Weather shipping rule set's destLessThan50F */
  destLessThan50F?: Maybe<WeatherShippingRuleEntity>;
  /** Weather shipping rule set's destLessThan40F */
  destLessThan40F?: Maybe<WeatherShippingRuleEntity>;
  /** Weather shipping rule set's destLessThan0F */
  destLessThan0F?: Maybe<WeatherShippingRuleEntity>;
  /** Weather shipping rule set's destLessThan60F */
  destLessThan60F?: Maybe<WeatherShippingRuleEntity>;
  /** Weather shipping rule set's srcLessThan32F */
  srcLessThan32F?: Maybe<WeatherShippingRuleEntity>;
  /** Weather shipping rule set's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Weather shipping rule set's slug */
  slug?: Maybe<Scalars['String']>;
};

export type InventoryAddMutationVariables = Exact<{
  id: Scalars['UUID'];
  quantity: Scalars['Long'];
}>;


export type InventoryAddMutation = (
  { __typename?: 'Mutation' }
  & { inventoryAdd?: Maybe<(
    { __typename?: 'InventoryResult' }
    & Pick<InventoryResult, 'globalQuantityUnshipped' | 'globalQuantityAvailable' | 'globalQuantityTotal'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'title'>
    )> }
  )> }
);

export type InventoryGetMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type InventoryGetMutation = (
  { __typename?: 'Mutation' }
  & { inventoryGet?: Maybe<(
    { __typename?: 'InventoryResult' }
    & Pick<InventoryResult, 'globalQuantityUnshipped' | 'globalQuantityAvailable' | 'globalQuantityTotal'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'title'>
    )> }
  )> }
);

export type SimpleProductFilterQueryVariables = Exact<{
  pageable: GraphQlPageableInput;
  title?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
}>;


export type SimpleProductFilterQuery = (
  { __typename?: 'Query' }
  & { simpleProductFilter?: Maybe<(
    { __typename?: 'GraphQLPage_SimpleProductEntity' }
    & Pick<GraphQlPage_SimpleProductEntity, 'count' | 'page' | 'pageSize'>
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'title' | 'active' | 'price' | 'shippingNeeds'>
      & { explicitDepartment?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'DepartmentEntity' }
          & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
        )> }
      )>, brand?: Maybe<(
        { __typename?: 'BrandEntity' }
        & Pick<BrandEntity, 'id' | 'slug' | 'name'>
      )>, supplier?: Maybe<(
        { __typename?: 'SupplierEntity' }
        & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
      )>, medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>>, explicitCategories?: Maybe<Array<Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
          & { parent?: Maybe<(
            { __typename?: 'CategoryEntity' }
            & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
          )> }
        )> }
      )>>>, weatherShippingRuleSet?: Maybe<(
        { __typename?: 'WeatherShippingRuleSetEntity' }
        & Pick<WeatherShippingRuleSetEntity, 'id' | 'slug' | 'name'>
      )> }
    )>>> }
  )> }
);

export type SimpleProductFindBySkuQueryVariables = Exact<{
  sku: Scalars['String'];
}>;


export type SimpleProductFindBySkuQuery = (
  { __typename?: 'Query' }
  & { simpleProductFindBySku?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
    )>>>, inventoryCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryCacheEntity' }
      & Pick<InventoryCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, weatherShippingRuleSet?: Maybe<(
      { __typename?: 'WeatherShippingRuleSetEntity' }
      & Pick<WeatherShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductFindByUpcQueryVariables = Exact<{
  upc: Scalars['String'];
}>;


export type SimpleProductFindByUpcQuery = (
  { __typename?: 'Query' }
  & { simpleProductFindByUpc?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
    )>>>, inventoryCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryCacheEntity' }
      & Pick<InventoryCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, weatherShippingRuleSet?: Maybe<(
      { __typename?: 'WeatherShippingRuleSetEntity' }
      & Pick<WeatherShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductInfoQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type SimpleProductInfoQuery = (
  { __typename?: 'Query' }
  & { simpleProductInfo?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
    )>>>, inventoryCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryCacheEntity' }
      & Pick<InventoryCacheEntity, 'id' | 'quantityAvailableForSale'>
    )>>>, explicitDepartment?: Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id' | 'slug' | 'name'>
      )> }
    )>, brand?: Maybe<(
      { __typename?: 'BrandEntity' }
      & Pick<BrandEntity, 'id' | 'slug' | 'name'>
    )>, supplier?: Maybe<(
      { __typename?: 'SupplierEntity' }
      & Pick<SupplierEntity, 'id' | 'slug' | 'name'>
    )>, medias?: Maybe<Array<Maybe<(
      { __typename?: 'MediaEntity' }
      & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
    )>>>, explicitCategories?: Maybe<Array<Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'CategoryEntity' }
        & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        & { parent?: Maybe<(
          { __typename?: 'CategoryEntity' }
          & Pick<CategoryEntity, 'id' | 'slug' | 'name'>
        )> }
      )> }
    )>>>, weatherShippingRuleSet?: Maybe<(
      { __typename?: 'WeatherShippingRuleSetEntity' }
      & Pick<WeatherShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type UserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoQuery = (
  { __typename?: 'Query' }
  & { userInfo?: Maybe<(
    { __typename?: 'UserEntity' }
    & Pick<UserEntity, 'email' | 'firstName' | 'lastName' | 'admin' | 'emailConfirmed'>
  )> }
);

export const InventoryAddDocument = gql`
    mutation inventoryAdd($id: UUID!, $quantity: Long!) {
  inventoryAdd(id: $id, quantity: $quantity) {
    product {
      id
      slug
      sku
      title
    }
    globalQuantityUnshipped
    globalQuantityAvailable
    globalQuantityTotal
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryAddGQL extends Apollo.Mutation<InventoryAddMutation, InventoryAddMutationVariables> {
    document = InventoryAddDocument;
    
  }
export const InventoryGetDocument = gql`
    mutation inventoryGet($id: UUID!) {
  inventoryGet(id: $id) {
    product {
      id
      slug
      sku
      title
    }
    globalQuantityUnshipped
    globalQuantityAvailable
    globalQuantityTotal
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryGetGQL extends Apollo.Mutation<InventoryGetMutation, InventoryGetMutationVariables> {
    document = InventoryGetDocument;
    
  }
export const SimpleProductFilterDocument = gql`
    query simpleProductFilter($pageable: GraphQLPageableInput!, $title: String, $sku: String, $active: Boolean, $brand: String, $supplier: String, $category: String) {
  simpleProductFilter(title: {pattern: $title}, sku: {pattern: $sku}, active: {value: $active}, brand: $brand, supplier: $supplier, category: $category, page: $pageable, sort: {field: "sku", direction: ASC}) {
    data {
      id
      slug
      sku
      title
      active
      explicitDepartment {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
      brand {
        id
        slug
        name
      }
      supplier {
        id
        slug
        name
      }
      price
      shippingNeeds
      medias {
        id
        mediaType
        url
      }
      explicitCategories {
        id
        slug
        name
        parent {
          id
          slug
          name
          parent {
            id
            slug
            name
          }
        }
      }
      weatherShippingRuleSet {
        id
        slug
        name
      }
    }
    count
    page
    pageSize
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFilterGQL extends Apollo.Query<SimpleProductFilterQuery, SimpleProductFilterQueryVariables> {
    document = SimpleProductFilterDocument;
    
  }
export const SimpleProductFindBySkuDocument = gql`
    query simpleProductFindBySku($sku: String!) {
  simpleProductFindBySku(sku: $sku) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
    }
    inventoryCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    weatherShippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFindBySkuGQL extends Apollo.Query<SimpleProductFindBySkuQuery, SimpleProductFindBySkuQueryVariables> {
    document = SimpleProductFindBySkuDocument;
    
  }
export const SimpleProductFindByUpcDocument = gql`
    query simpleProductFindByUpc($upc: String!) {
  simpleProductFindByUpc(upc: $upc) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
    }
    inventoryCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    weatherShippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductFindByUpcGQL extends Apollo.Query<SimpleProductFindByUpcQuery, SimpleProductFindByUpcQueryVariables> {
    document = SimpleProductFindByUpcDocument;
    
  }
export const SimpleProductInfoDocument = gql`
    query simpleProductInfo($id: UUID!) {
  simpleProductInfo(id: $id) {
    id
    slug
    sku
    upc
    title
    active
    price
    cost
    weight
    shippingNeeds
    shippingRestrictions
    warehouses {
      id
      name
    }
    bins {
      id
      binId
    }
    inventoryCaches {
      id
      quantityAvailableForSale
    }
    explicitDepartment {
      id
      slug
      name
      parent {
        id
        slug
        name
      }
    }
    brand {
      id
      slug
      name
    }
    supplier {
      id
      slug
      name
    }
    medias {
      id
      mediaType
      url
    }
    explicitCategories {
      id
      slug
      name
      parent {
        id
        slug
        name
        parent {
          id
          slug
          name
        }
      }
    }
    weatherShippingRuleSet {
      id
      slug
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SimpleProductInfoGQL extends Apollo.Query<SimpleProductInfoQuery, SimpleProductInfoQueryVariables> {
    document = SimpleProductInfoDocument;
    
  }
export const UserInfoDocument = gql`
    query userInfo {
  userInfo {
    email
    firstName
    lastName
    admin
    emailConfirmed
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserInfoGQL extends Apollo.Query<UserInfoQuery, UserInfoQueryVariables> {
    document = UserInfoDocument;
    
  }