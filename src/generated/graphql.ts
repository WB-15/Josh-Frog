import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Built-in java.math.BigDecimal */
  BigDecimal: any;
  /** Built-in scalar representing an instant in time */
  Instant: any;
  /** Built-in scalar representing a local date */
  LocalDate: any;
  /** Long type */
  Long: any;
  /** Use SPQR's SchemaPrinter to remove this from SDL */
  UNREPRESENTABLE: any;
  /** UUID String */
  UUID: any;
};



export type AddonEntity = {
  __typename?: 'AddonEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Addon's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Addon's slug */
  slug?: Maybe<Scalars['String']>;
  /** Addon's title */
  title?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Addon's weight */
  weight?: Maybe<Scalars['BigDecimal']>;
};

export type AddonSetDestinationRequirementEntity = {
  __typename?: 'AddonSetDestinationRequirementEntity';
  /** Addon rule's addon set */
  addonSet?: Maybe<AddonSetEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Addon rule's comparison */
  comparison?: Maybe<Comparison>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Addon rule's temperature */
  temp?: Maybe<Scalars['Int']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AddonSetEntity = {
  __typename?: 'AddonSetEntity';
  /** Addon set's addons */
  addons?: Maybe<Array<Maybe<AddonEntity>>>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Addon set's name */
  name?: Maybe<Scalars['String']>;
  /** Addon set's priority */
  priority?: Maybe<Scalars['Long']>;
  /** Addon set's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AddonSetSourceRequirementEntity = {
  __typename?: 'AddonSetSourceRequirementEntity';
  /** Addon rule's addon set */
  addonSet?: Maybe<AddonSetEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Addon rule's comparison */
  comparison?: Maybe<Comparison>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Addon rule's temperature */
  temp?: Maybe<Scalars['Int']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  /** Address' validation source */
  addressValidationSource?: Maybe<AddressValidationSource>;
  /** Address' city name */
  city?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Address' company */
  company?: Maybe<Scalars['String']>;
  /** Address' ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Address' first name */
  firstName?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Address' last name */
  lastName?: Maybe<Scalars['String']>;
  /** Address' latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Address' first line */
  line1?: Maybe<Scalars['String']>;
  /** Address' last line */
  line2?: Maybe<Scalars['String']>;
  /** Address' longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Address' Magento Id */
  magentoId?: Maybe<Scalars['Long']>;
  /** Address' postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Address' residential status */
  residential?: Maybe<Scalars['Boolean']>;
  /** Address' state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum AddressValidationSource {
  FedEx = 'FedEx',
  SmartyStreets = 'SmartyStreets',
  Ups = 'UPS',
  Unverified = 'Unverified'
}

export type AmazonProfileEntity = {
  __typename?: 'AmazonProfileEntity';
  /** Amazon profile's ASIN */
  asin?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Amazon profile's Seller SKU */
  sellerSku?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AmazonSalesOrderEntity = {
  __typename?: 'AmazonSalesOrderEntity';
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Amazon created at */
  amazonCreatedAt?: Maybe<Scalars['Instant']>;
  /** Amazon updated at */
  amazonUpdatedAt?: Maybe<Scalars['Instant']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Sales order's comments */
  comments?: Maybe<Array<Maybe<SalesOrderCommentsEntity>>>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Order's fulfillment channel */
  fulfillmentChannelType?: Maybe<FulfillmentChannelType>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's hold status */
  hold?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Sales order's payments */
  payments?: Maybe<Array<Maybe<PaymentEntity>>>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Sales order's discounts */
  salesOrderDiscounts?: Maybe<Array<Maybe<SalesOrderDiscountEntity>>>;
  /** Sales order's item groups */
  salesOrderItemGroups?: Maybe<Array<Maybe<SalesOrderItemGroupEntity>>>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order's type */
  salesOrderType?: Maybe<SalesOrderType>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Sales order's shipping method */
  shippingMethod?: Maybe<Scalars['String']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type AnimalEntity = {
  __typename?: 'AnimalEntity';
  /** Animal's children */
  children?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Animal's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Animal's name */
  name?: Maybe<Scalars['String']>;
  /** Animal's parent */
  parent?: Maybe<AnimalEntity>;
  /** Animal's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Animal's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Animal's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};


export type BinEntity = {
  __typename?: 'BinEntity';
  /** Bin's human-readable ID */
  binId?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Bin's zone membership */
  zone?: Maybe<ZoneEntity>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Brand's name */
  name?: Maybe<Scalars['String']>;
  /** Brand's simple products */
  products?: Maybe<Array<Maybe<SimpleProductEntity>>>;
  /** Brand's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum Carrier {
  Dhl = 'DHL',
  Fedex = 'FEDEX',
  Generic = 'GENERIC',
  Lasership = 'LASERSHIP',
  Ups = 'UPS',
  Usps = 'USPS'
}

export type CarrierRestrictionEntity = {
  __typename?: 'CarrierRestrictionEntity';
  /** Shipping rule's carriers */
  carriers?: Maybe<Array<Maybe<Carrier>>>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's packagings */
  packagings?: Maybe<Array<Maybe<Packaging>>>;
  /** Shipping rule's services */
  services?: Maybe<Array<Maybe<Service>>>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type CartDiscount = {
  __typename?: 'CartDiscount';
  /** Cart discount's amount */
  amount?: Maybe<Scalars['BigDecimal']>;
  /** Cart discount's name */
  name?: Maybe<Scalars['String']>;
};

export type CartEntity = {
  __typename?: 'CartEntity';
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Cart's batch item count */
  cartBatchItemsCount?: Maybe<Scalars['Long']>;
  /** Cart's discounts */
  cartDiscounts?: Maybe<Array<Maybe<CartDiscount>>>;
  /** Cart's item groups */
  cartItemGroups?: Maybe<Array<Maybe<CartItemGroupEntity>>>;
  /** Cart's items */
  cartItems?: Maybe<Array<Maybe<CartItemEntity>>>;
  /** Cart's item count */
  cartItemsCount?: Maybe<Scalars['Long']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Cart's coupon code */
  couponCode?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Cart's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Cart's email */
  email?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cart's phone */
  phone?: Maybe<Scalars['String']>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Cart's subtotal */
  subtotal?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type CartItemEntity = {
  __typename?: 'CartItemEntity';
  /** Cart item's carrier preference */
  carrierPreference?: Maybe<Carrier>;
  /** Cart item's group */
  cartItemGroup?: Maybe<CartItemGroupEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Cart item's delivery date preference */
  deliveryDatePreference?: Maybe<Scalars['LocalDate']>;
  /** Cart item's discount price */
  discountPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item's earliest possible ship date */
  earliestPossibleShipDate?: Maybe<Scalars['LocalDate']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cart item's overridden shipping needs type */
  overriddenShippingNeedsType?: Maybe<ShippingNeedsType>;
  /** Cart item's regular price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Cart item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Cart item's regular price */
  regularPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item's sale price */
  salePrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type CartItemGroupEntity = {
  __typename?: 'CartItemGroupEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Cart item group's discount price */
  discountPrice?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cart item group's kit product */
  kitProduct?: Maybe<KitProductEntity>;
  /** Cart item group's regular price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Cart item group's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Cart item group's regular price */
  regularPrice?: Maybe<Scalars['BigDecimal']>;
  /** Cart item group's sale price */
  salePrice?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  /** Category's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Category's children */
  children?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Category's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Category's implicit products */
  implicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Category's Magento Id */
  magentoIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Category's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Category's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Category's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Category's name */
  name?: Maybe<Scalars['String']>;
  /** Category's parent */
  parent?: Maybe<CategoryEntity>;
  /** Category's published revision */
  publishedRevision?: Maybe<CategoryRevisionEntity>;
  /** Category's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Category's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Category's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type CategoryResults = {
  __typename?: 'CategoryResults';
  /** Result's category */
  category?: Maybe<CategoryEntity>;
  /** Result's products */
  products?: Maybe<GraphQlPage_ProductEntity>;
};

export type CategoryRevisionEntity = {
  __typename?: 'CategoryRevisionEntity';
  /** Category revision's html content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type ClientTokenDetail = {
  __typename?: 'ClientTokenDetail';
  /** Client token */
  clientToken?: Maybe<Scalars['String']>;
};

export enum Comparison {
  GreaterThan = 'GREATER_THAN',
  LessThan = 'LESS_THAN'
}

export type ConfigurableItemEntity = {
  __typename?: 'ConfigurableItemEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Configurable item's position */
  position?: Maybe<Scalars['Long']>;
  /** Configurable item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ConfigurableProductEntity = {
  __typename?: 'ConfigurableProductEntity';
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['Float']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Configurables's items */
  configurableItems?: Maybe<Array<Maybe<ConfigurableItemEntity>>>;
  /** Product's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['Long']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's explicit department */
  explicitDepartment?: Maybe<DepartmentEntity>;
  /** Product's explicit discounts */
  explicitDiscounts?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** Product's explicit promotions */
  explicitPromotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Product's featured status */
  featured?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's implicit department */
  implicitDepartments?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Product's implicit discounts */
  implicitDiscounts?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** Product's implicit promotions */
  implicitPromotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Product's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  salePrice?: Maybe<Scalars['BigDecimal']>;
  /** Product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Product's special price */
  specialPrice?: Maybe<Scalars['BigDecimal']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Product's upsells */
  upsellProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Product's variation key */
  variationKey?: Maybe<Scalars['String']>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
  /** Product's visible flag */
  visible?: Maybe<Scalars['Boolean']>;
  /** Product's wholesale price */
  wholesalePrice?: Maybe<Scalars['BigDecimal']>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  /** Dashboard's stats, last week */
  lastWeek?: Maybe<Stats>;
  /** Dashboard's late count */
  lateCount?: Maybe<Scalars['Int']>;
  /** Dashboard's needs scheduling count */
  needsSchedulingCount?: Maybe<Scalars['Int']>;
  /** Dashboard's next open date */
  nextOpenDate?: Maybe<Scalars['String']>;
  /** Dashboard's on-hold count */
  onHoldCount?: Maybe<Scalars['Int']>;
  /** Dashboard's pending count */
  pendingCount?: Maybe<Scalars['Int']>;
  /** Dashboard's summaries */
  summaries?: Maybe<Array<Maybe<Summary>>>;
  /** Dashboard's stats, this week */
  thisWeek?: Maybe<Stats>;
  /** Dashboard's timezone */
  timezone?: Maybe<Scalars['String']>;
  /** Dashboard's today */
  today?: Maybe<Scalars['String']>;
  /** Dashboard's warehouse */
  warehouse?: Maybe<Scalars['String']>;
};

export type DepartmentEntity = {
  __typename?: 'DepartmentEntity';
  /** Department's children */
  children?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Department's explicit products */
  explicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Department's implicit products */
  implicitProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Department's name */
  name?: Maybe<Scalars['String']>;
  /** Department's parent */
  parent?: Maybe<DepartmentEntity>;
  /** Department's promotions */
  promotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Department's route key */
  routeKey?: Maybe<Scalars['String']>;
  /** Department's route path */
  routePath?: Maybe<Scalars['String']>;
  /** Department's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type DestinationRestrictionEntity = {
  __typename?: 'DestinationRestrictionEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Destination restriction's domestic only */
  domesticOnly?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Destination restriction's prohibited states */
  prohibitedStates?: Maybe<Array<Maybe<State>>>;
  /** Destination restriction's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type DiscountEntity = {
  __typename?: 'DiscountEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum DomesticServiceType {
  Ground = 'Ground',
  OvernightEarly = 'OvernightEarly',
  OvernightEvening = 'OvernightEvening',
  OvernightMorning = 'OvernightMorning',
  PostOfficeLastMile = 'PostOfficeLastMile',
  SameDay = 'SameDay',
  ThreeDay = 'ThreeDay',
  TwoDay = 'TwoDay'
}

export enum FulfillmentChannelType {
  DirectFulfillment = 'DirectFulfillment',
  ThirdPartyFulfillment = 'ThirdPartyFulfillment'
}

export type GraphQlLikeQueryFilterInput = {
  /** Abbreviation for 'pattern'. */
  p?: Maybe<Scalars['String']>;
  /** Field pattern. */
  pattern?: Maybe<Scalars['String']>;
};

export type GraphQlPage_AnimalEntity = {
  __typename?: 'GraphQLPage_AnimalEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_BrandEntity = {
  __typename?: 'GraphQLPage_BrandEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<BrandEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_CategoryEntity = {
  __typename?: 'GraphQLPage_CategoryEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ConfigurableProductEntity = {
  __typename?: 'GraphQLPage_ConfigurableProductEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ConfigurableProductEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_DepartmentEntity = {
  __typename?: 'GraphQLPage_DepartmentEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_DiscountEntity = {
  __typename?: 'GraphQLPage_DiscountEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_KitProductEntity = {
  __typename?: 'GraphQLPage_KitProductEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<KitProductEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ProductEntity = {
  __typename?: 'GraphQLPage_ProductEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ProductEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ProfitabilitySummary = {
  __typename?: 'GraphQLPage_ProfitabilitySummary';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ProfitabilitySummary>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_PurchaseRequestEntity = {
  __typename?: 'GraphQLPage_PurchaseRequestEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<PurchaseRequestEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ReviewEntity = {
  __typename?: 'GraphQLPage_ReviewEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ReviewEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SalesOrderEntity = {
  __typename?: 'GraphQLPage_SalesOrderEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SalesOrderEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_ShipmentEntity = {
  __typename?: 'GraphQLPage_ShipmentEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SimpleProductEntity = {
  __typename?: 'GraphQLPage_SimpleProductEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SimpleProductEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_SupplierEntity = {
  __typename?: 'GraphQLPage_SupplierEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<SupplierEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_TeamEntity = {
  __typename?: 'GraphQLPage_TeamEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<TeamEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_TradeShowEntity = {
  __typename?: 'GraphQLPage_TradeShowEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<TradeShowEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPage_UserEntity = {
  __typename?: 'GraphQLPage_UserEntity';
  /** Total elements count. */
  count: Scalars['Long'];
  /** Collection of object on the current page. */
  data?: Maybe<Array<Maybe<UserEntity>>>;
  /** The current page number. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** If the collection is not pages it means it displays all elements in the current view. */
  paged: Scalars['Boolean'];
  /** Total pages count. */
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlPageableInput = {
  /** The number of the page to display. */
  page?: Maybe<Scalars['Int']>;
  /** Size of each page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** Sort conditions for the current view. */
  sort?: Maybe<Array<Maybe<GraphQlSortInput>>>;
};

export type GraphQlSingleValueFilter_BooleanInput = {
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
  /** Abbreviation for 'value'. */
  v?: Maybe<Scalars['Boolean']>;
  /** Field value. */
  value?: Maybe<Scalars['Boolean']>;
};

export type GraphQlSingleValueFilter_LongInput = {
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
  /** Abbreviation for 'value'. */
  v?: Maybe<Scalars['Long']>;
  /** Field value. */
  value?: Maybe<Scalars['Long']>;
};

export type GraphQlSingleValueFilter_ShipmentStatusInput = {
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
  /** Abbreviation for 'value'. */
  v?: Maybe<ShipmentStatus>;
  /** Field value. */
  value?: Maybe<ShipmentStatus>;
};

export type GraphQlSingleValueFilter_StringInput = {
  /** Abbreviation for 'condition'. */
  c?: Maybe<QueryCondition>;
  /** Filter condition (default: eq). */
  condition?: Maybe<QueryCondition>;
  /** Abbreviation for 'value'. */
  v?: Maybe<Scalars['String']>;
  /** Field value. */
  value?: Maybe<Scalars['String']>;
};

export type GraphQlSortInput = {
  /** Abbreviation for 'direction'. */
  d?: Maybe<SortDirection>;
  /** Direction of sorting (default: asc). */
  direction?: Maybe<SortDirection>;
  /** Abbreviation for 'field'. */
  f?: Maybe<Scalars['String']>;
  /** Name of the field to sort by. */
  field?: Maybe<Scalars['String']>;
};

export type GraphQlValueRangeQueryFilter_BigDecimalInput = {
  /** Abbreviation for 'from'. */
  f?: Maybe<Scalars['BigDecimal']>;
  /** Value from (inclusive). */
  from?: Maybe<Scalars['BigDecimal']>;
  /** Abbreviation for 'to'. */
  t?: Maybe<Scalars['BigDecimal']>;
  /** Value to (inclusive). */
  to?: Maybe<Scalars['BigDecimal']>;
};

export type GraphQlValueRangeQueryFilter_DoubleInput = {
  /** Abbreviation for 'from'. */
  f?: Maybe<Scalars['Float']>;
  /** Value from (inclusive). */
  from?: Maybe<Scalars['Float']>;
  /** Abbreviation for 'to'. */
  t?: Maybe<Scalars['Float']>;
  /** Value to (inclusive). */
  to?: Maybe<Scalars['Float']>;
};


export type InventoryDetails = {
  __typename?: 'InventoryDetails';
  /** Result's product */
  product?: Maybe<SimpleProductEntity>;
  /** Result's warehouse quantity available */
  warehouseQuantityAvailable?: Maybe<Scalars['Long']>;
  /** Result's warehouse quantity on shelf */
  warehouseQuantityOnShelf?: Maybe<Scalars['Long']>;
  /** Result's warehouse quantity unshipped */
  warehouseQuantityUnshipped?: Maybe<Scalars['Long']>;
  /** Result's warehouse run out days, 85% confidence */
  warehouseRunOutDays85?: Maybe<Scalars['Float']>;
  /** Result's warehouse run out days, 97% confidence */
  warehouseRunOutDays97?: Maybe<Scalars['Float']>;
  /** Result's warehouse weekly consumption rate */
  warehouseWeeklyConsumptionRate?: Maybe<Scalars['Float']>;
  /** Result's warehouse weekly consumption variance */
  warehouseWeeklyConsumptionVariance?: Maybe<Scalars['Float']>;
};

export type InventoryQuantityCacheEntity = {
  __typename?: 'InventoryQuantityCacheEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cache's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  /** Cache's quantity on shelf */
  quantityOnShelf?: Maybe<Scalars['Long']>;
  /** Cache's timestamp */
  timestamp?: Maybe<Scalars['Instant']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Cache's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
};

export type InventoryResult = {
  __typename?: 'InventoryResult';
  /** Result's global available quantity */
  globalQuantityAvailable?: Maybe<Scalars['Long']>;
  /** Result's global total quantity */
  globalQuantityTotal?: Maybe<Scalars['Long']>;
  /** Result's global unshipped quantity */
  globalQuantityUnshipped?: Maybe<Scalars['Long']>;
  /** Result's product */
  product?: Maybe<SimpleProductEntity>;
};

export type InventoryStatsCacheEntity = {
  __typename?: 'InventoryStatsCacheEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Cache's timestamp */
  timestamp?: Maybe<Scalars['Instant']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Cache's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
  /** Cache's weekly consumption rate */
  weeklyConsumptionRate?: Maybe<Scalars['Float']>;
  /** Cache's weekly consumption variance */
  weeklyConsumptionVariance?: Maybe<Scalars['Float']>;
};

export type KitItemEntity = {
  __typename?: 'KitItemEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Kit item's position */
  position?: Maybe<Scalars['Long']>;
  /** Kit item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Kit item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type KitProductEntity = {
  __typename?: 'KitProductEntity';
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['Float']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['Long']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's explicit department */
  explicitDepartment?: Maybe<DepartmentEntity>;
  /** Product's explicit discounts */
  explicitDiscounts?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** Product's explicit promotions */
  explicitPromotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Product's featured status */
  featured?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's implicit department */
  implicitDepartments?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Product's implicit discounts */
  implicitDiscounts?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** Product's implicit promotions */
  implicitPromotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Kit's items */
  kitItems?: Maybe<Array<Maybe<KitItemEntity>>>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Product's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  salePrice?: Maybe<Scalars['BigDecimal']>;
  /** Product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Product's special price */
  specialPrice?: Maybe<Scalars['BigDecimal']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Product's upsells */
  upsellProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Product's variation key */
  variationKey?: Maybe<Scalars['String']>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
  /** Product's visible flag */
  visible?: Maybe<Scalars['Boolean']>;
  /** Product's wholesale price */
  wholesalePrice?: Maybe<Scalars['BigDecimal']>;
};

export type LineItem = {
  __typename?: 'LineItem';
  /** Line item's line amount */
  lineAmount?: Maybe<Scalars['BigDecimal']>;
  /** Line item's name */
  name?: Maybe<Scalars['String']>;
  /** Line item's order number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Line item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Line item's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Line item's unit amount */
  unitAmount?: Maybe<Scalars['BigDecimal']>;
};

export type LiveArrivalGuaranteeEntity = {
  __typename?: 'LiveArrivalGuaranteeEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Live arrival rule's max temp */
  maxTemp?: Maybe<Scalars['Int']>;
  /** Live arrival rule's min temp */
  minTemp?: Maybe<Scalars['Int']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Live arrival rule's transit time type */
  transitTimeType?: Maybe<TransitTimeType>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum LiveArrivalGuaranteeState {
  Guaranteed = 'Guaranteed',
  NotApplicable = 'NotApplicable',
  NotGuaranteed = 'NotGuaranteed',
  UnableToDetermine = 'UnableToDetermine'
}



export type MagentoSalesOrderEntity = {
  __typename?: 'MagentoSalesOrderEntity';
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Sales order's comments */
  comments?: Maybe<Array<Maybe<SalesOrderCommentsEntity>>>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Order's fulfillment channel */
  fulfillmentChannelType?: Maybe<FulfillmentChannelType>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's hold status */
  hold?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Magento created at */
  magentoCreatedAt?: Maybe<Scalars['Instant']>;
  /** Magento order status */
  magentoStatus?: Maybe<Scalars['String']>;
  /** Magento updated at */
  magentoUpdatedAt?: Maybe<Scalars['Instant']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Sales order's payments */
  payments?: Maybe<Array<Maybe<PaymentEntity>>>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Sales order's discounts */
  salesOrderDiscounts?: Maybe<Array<Maybe<SalesOrderDiscountEntity>>>;
  /** Sales order's item groups */
  salesOrderItemGroups?: Maybe<Array<Maybe<SalesOrderItemGroupEntity>>>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order's type */
  salesOrderType?: Maybe<SalesOrderType>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Sales order's shipping method */
  shippingMethod?: Maybe<Scalars['String']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Media's type */
  mediaType?: Maybe<MediaType>;
  /** Media's product */
  product?: Maybe<ProductEntity>;
  /** Media's sequence */
  sequence?: Maybe<Scalars['Int']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Media's url */
  url?: Maybe<Scalars['String']>;
};

export enum MediaType {
  Image = 'Image',
  Panorama = 'Panorama',
  VimeoVideo = 'VimeoVideo',
  YouTubeVideo = 'YouTubeVideo'
}

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  /** Completes checkout and processes payment. */
  cartCheckout?: Maybe<SalesOrderEntity>;
  /** Marks the purchase request as ordered */
  purchaseRequestOrder?: Maybe<PurchaseRequestEntity>;
  /** Refreshes a sales order (with Amazon) by entity id */
  amazonSalesOrderRefresh?: Maybe<AmazonSalesOrderEntity>;
  /** Triggers an update to all inventory caches */
  maintenanceUpdateInventoryCaches?: Maybe<Scalars['Boolean']>;
  /** Validates the address, updates it if necessary */
  shipmentValidateAddress?: Maybe<ShipmentEntity>;
  /** Updates bin on a simple product */
  simpleProductSetBin?: Maybe<SimpleProductEntity>;
  /** Adds user to marketing list */
  marketingSubscribe: Scalars['Boolean'];
  /** Clears the cart's phone */
  cartClearPhone?: Maybe<CartEntity>;
  /** Calculates a sales tax rate based on zip code */
  salesTaxRate?: Maybe<TaxDetail>;
  /** Generates a shipment dashboard */
  shipmentDashboard?: Maybe<Dashboard>;
  /** Triggers a re-sync of all orders with Magento */
  maintenanceMagentoReSyncOrders?: Maybe<Scalars['Boolean']>;
  /** Sets the cart's phone */
  cartSetPhone?: Maybe<CartEntity>;
  /** Triggers a re-sync of all categories with Magento */
  maintenanceMagentoSyncAllCategories?: Maybe<Scalars['Boolean']>;
  /** Refreshes a simple product (with Magento) by entity id */
  simpleProductRefresh?: Maybe<SimpleProductEntity>;
  /** Refreshes a new user with Magento */
  userRefresh?: Maybe<UserEntity>;
  /** Changes quantity of selected kit product in user's cart */
  cartChangeQuantityKitProduct?: Maybe<CartEntity>;
  /** Calculates the implicit products a discount */
  discountEvaluateImplicitProducts?: Maybe<DiscountEntity>;
  /** Gets inventory details for a simple product */
  inventoryGetDetails?: Maybe<InventoryDetails>;
  /** Triggers a re-index of hibernate cache */
  maintenanceCacheFlushAll?: Maybe<Scalars['Boolean']>;
  /** Looks up weather for shipment */
  shipmentLookupWeather?: Maybe<Array<Maybe<Weather>>>;
  /** Enrolls a workstation for use with AutoPrint */
  autoprintEnrollWorkstation?: Maybe<WorkstationEntity>;
  /** Ships a multi-piece shipment */
  shipmentShipMultiPiece?: Maybe<ShipmentEntity>;
  /** Gets the next shipment to print at this workstation's printer */
  autoprintGetNextForPrinter?: Maybe<Array<Maybe<PrintJob>>>;
  /** Refreshes a sales order (with Walmart) by purchase order id */
  walmartSalesOrderRefresh?: Maybe<WalmartSalesOrderEntity>;
  /** Sends a shipper performance report */
  maintenanceSendShipperPerformance?: Maybe<Scalars['Boolean']>;
  /** Sets the billing address to one of the user's addresses */
  cartSetBillingAddressById?: Maybe<CartEntity>;
  /** Triggers a re-sync of all products with Magento */
  maintenanceMagentoSyncAllProducts?: Maybe<Scalars['Boolean']>;
  /** Lists all POS terminals */
  tradeShowListTerminals?: Maybe<Array<Maybe<PosTerminalEntity>>>;
  /** Recomputes shipping estimates for all products */
  maintenanceRecomputeShippingEstimates?: Maybe<Scalars['Boolean']>;
  /** Removes a preparation from a product */
  preppedProductsRemovePreparation?: Maybe<PreparationSummary>;
  /** Reroutes shipments from a queue */
  autoprintReroute: Scalars['Boolean'];
  /** Adds quantity of selected simple product to user's cart */
  cartAddSimpleProduct?: Maybe<CartEntity>;
  /** Creates a new kit product */
  kitProductCreate?: Maybe<KitProductEntity>;
  /** Adds inventory for a simple product */
  inventoryAddDetails?: Maybe<InventoryDetails>;
  /** Sets the cart's email */
  cartSetEmail?: Maybe<CartEntity>;
  /** Sets the shipping address to one of the user's addresses */
  cartSetShippingAddressById?: Maybe<CartEntity>;
  /** Triggers a re-sync of updated orders with Walmart */
  maintenanceWalmartSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Triggers a fix to clean up inventory issues */
  maintenanceFixInventoryIssues?: Maybe<Scalars['Boolean']>;
  /** Triggers a re-sync of products quantities available for sale */
  maintenanceInventoryUpdateQuantitiesAvailableForSale?: Maybe<Scalars['Boolean']>;
  /** Assigns a pos terminal to a tradeshow */
  tradeShowAssignTerminal?: Maybe<TradeShowEntity>;
  /** Sets a carrier preference for a cart item */
  cartSetCarrierPreference?: Maybe<CartEntity>;
  /** Sets a product as requiring preparation */
  simpleProductSetRequiresPrep?: Maybe<SimpleProductEntity>;
  /** Gets rates for a multi-piece shipment */
  shipmentRateMultiPiece?: Maybe<Array<Maybe<RateQuote>>>;
  /** Clears the cart's email */
  cartClearEmail?: Maybe<CartEntity>;
  /** Confirm user's email */
  userConfirmEmail?: Maybe<Scalars['Boolean']>;
  /** Refreshes a kit product (with Magento) by entity id */
  kitProductRefresh?: Maybe<KitProductEntity>;
  /** Adds inventory for a simple product */
  inventoryAdd?: Maybe<InventoryResult>;
  /** Change a user's password */
  userChangePasswordByHash?: Maybe<Scalars['Boolean']>;
  /** Removes a purchase request item */
  purchaseRequestRemoveItem?: Maybe<PurchaseRequestEntity>;
  /** Creates a new address */
  addressCreate?: Maybe<AddressEntity>;
  /** Reschedule a shipment */
  shipmentReschedule?: Maybe<ShipmentEntity>;
  /** Tests a workstation for use with AutoPrint */
  autoprintTestWorkstation?: Maybe<WorkstationEntity>;
  /** Triggers a re-sync of updated orders with Magento */
  maintenanceMagentoSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Adds a purchase request item */
  purchaseRequestAddItem?: Maybe<PurchaseRequestEntity>;
  /** Approves a purchase request */
  purchaseRequestApprove?: Maybe<PurchaseRequestEntity>;
  /** Triggers a re-sync of updated orders with Amazon */
  maintenanceAmazonReSyncOrders?: Maybe<Scalars['Boolean']>;
  /** Removes bin from a simple product */
  simpleProductClearBin?: Maybe<SimpleProductEntity>;
  /** Sets a shipment to be reprinted */
  autoprintReprint: Scalars['Boolean'];
  /** Sets a carrier preference for a cart item */
  cartClearCarrierPreference?: Maybe<CartEntity>;
  /** Recomputes shipping estimates for a simple product */
  simpleProductRecomputeShippingEstimates?: Maybe<SimpleProductEntity>;
  /** Reindexes all products */
  maintenanceReindexProducts?: Maybe<Scalars['Boolean']>;
  /** Update's a user's admin status */
  userUpdateAdmin?: Maybe<UserEntity>;
  /** Verifies an existing address */
  addressVerifyRaw?: Maybe<AddressEntity>;
  /** Unssigns a pos terminal to a tradeshow */
  tradeShowUnassignTerminal?: Maybe<TradeShowEntity>;
  /** Sets the billing address */
  cartSetBillingAddress?: Maybe<CartEntity>;
  /** Removes a warehouse from a simple product */
  simpleProductRemoveWarehouse?: Maybe<SimpleProductEntity>;
  /** Returns the tradeshow report */
  tradeShowReport?: Maybe<ShowReport>;
  /** Triggers a re-sync of products with Price2Spy */
  maintenancePrice2SpyUpdateProducts?: Maybe<Scalars['Boolean']>;
  /** Creates a new tradeshow */
  tradeShowCreateShow?: Maybe<TradeShowEntity>;
  /** Sends the tradeshow report */
  tradeShowSendReport?: Maybe<Scalars['Boolean']>;
  /** Adds a printer to an existing workstation */
  autoprintAddPrinter?: Maybe<PrinterEntity>;
  /** Reroute a shipment */
  shipmentReroute?: Maybe<ShipmentEntity>;
  /** Triggers a re-sync of all kits with Magento */
  maintenanceMagentoSyncAllKits?: Maybe<Scalars['Boolean']>;
  /** Acknowledges a shipment's print job has been cancelled */
  autoprintCancelAcknowledgeForPrinter: Scalars['Boolean'];
  /** Adds a warehouse to a simple product */
  simpleProductAddWarehouse?: Maybe<SimpleProductEntity>;
  /** Acknowledges a shipment's print job has downloaded */
  autoprintDownloadAcknowledgeForPrinter: Scalars['Boolean'];
  /** Sends an email confirmation email */
  userSendEmailConfirmation?: Maybe<Scalars['Boolean']>;
  /** Sets the cart's coupon code */
  cartSetCouponCode?: Maybe<CartEntity>;
  /** Refreshes a configurable product (with Magento) by entity id */
  configurableProductRefresh?: Maybe<ConfigurableProductEntity>;
  /** Clears the shipping address */
  cartClearShippingAddress?: Maybe<CartEntity>;
  /** Sets a delivery date preference for a cart item */
  cartSetDeliveryDatePreference?: Maybe<CartEntity>;
  /** Refreshes a sales order (with Magento) by entity id */
  magentoSalesOrderRefresh?: Maybe<MagentoSalesOrderEntity>;
  /** Marks the purchase request as received */
  purchaseRequestReceive?: Maybe<PurchaseRequestEntity>;
  /** Acknowledges a shipment's print job has printed */
  autoprintPrintAcknowledgeForPrinter: Scalars['Boolean'];
  /** Refreshes a sales order (with Magento) by entity id */
  magentoSalesOrderRefreshAsync: Scalars['Boolean'];
  /** Gets status if customer is already signed up */
  marketingStatus: Scalars['Boolean'];
  /** Registers a new user, with raw password */
  userRegister?: Maybe<UserEntity>;
  /** Sets the shipment's hold status */
  salesOrderSetHold?: Maybe<SalesOrderEntity>;
  /** Removes all quantity of selected simple product from user's cart */
  cartRemoveAllSimpleProduct?: Maybe<CartEntity>;
  /** Verifies an existing address */
  addressVerify?: Maybe<AddressEntity>;
  /** Reindexes a simple product */
  simpleProductReindex?: Maybe<SimpleProductEntity>;
  /** Refreshes a simple product (with Magento) by sku */
  simpleProductRefreshBySku?: Maybe<SimpleProductEntity>;
  /** Creates a new category */
  categoryCreate?: Maybe<CategoryEntity>;
  /** Retrieves cross-sells for the given cart */
  cartCrossSells?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Adds zone to a simple product */
  simpleProductAddZone?: Maybe<SimpleProductEntity>;
  /** Refreshes a kit product (with Magento) by sku */
  kitProductRefreshBySku?: Maybe<KitProductEntity>;
  /** Creates a new POS terminal */
  tradeShowCreateTerminal?: Maybe<PosTerminalEntity>;
  /** Updates a shipment's address */
  shipmentUpdateAddress?: Maybe<ShipmentEntity>;
  /** Creates a purchase request */
  purchaseRequestCreate?: Maybe<PurchaseRequestEntity>;
  /** Gets earliest delivery date option */
  cartGetEarliestDeliveryDate?: Maybe<Scalars['LocalDate']>;
  /** Triggers sync of transactions with Poynt */
  maintenancePoyntSyncTransactions?: Maybe<Scalars['Boolean']>;
  /** Sets active flag */
  categorySetActive?: Maybe<CategoryEntity>;
  /** Triggers sync of products with Poynt */
  maintenancePoyntSyncProducts?: Maybe<Scalars['Boolean']>;
  /** Generates a USPS scan form */
  shipmentScanForm?: Maybe<Scalars['String']>;
  /** Sets a delivery date preference for a cart item */
  cartClearDeliveryDatePreference?: Maybe<CartEntity>;
  /** Clears a product from requiring preparation */
  simpleProductClearRequiresPrep?: Maybe<SimpleProductEntity>;
  /** Triggers a re-index of all items in Elastic */
  maintenanceElasticReindexAll?: Maybe<Scalars['Boolean']>;
  /** Updates a user's password */
  userUpdatePassword?: Maybe<UserEntity>;
  /** Summarizes the cart's totals */
  cartSummarize?: Maybe<SalesOrderEntity>;
  /** Sets a department's parent */
  departmentSetParent?: Maybe<DepartmentEntity>;
  /** Cancels the order and removes the shipments */
  salesOrderOfflineRefund?: Maybe<SalesOrderEntity>;
  /** Refreshes a configurable product (with Magento) by sku */
  configurableProductRefreshBySku?: Maybe<ConfigurableProductEntity>;
  /** Creates a simple product */
  simpleProductCreate?: Maybe<SimpleProductEntity>;
  /** Deletes an existing address */
  addressDelete: Scalars['Boolean'];
  /** Creates a new user, with password hash */
  userCreate?: Maybe<UserEntity>;
  /** Clears the billing address */
  cartClearBillingAddress?: Maybe<CartEntity>;
  /** Updates an existing address */
  addressUpdate?: Maybe<AddressEntity>;
  /** Looks up weather for a zip code */
  shipmentLookupWeatherByZip?: Maybe<Array<Maybe<Weather>>>;
  /** Creates a new department */
  teamCreate?: Maybe<TeamEntity>;
  /** Triggers a re-sync of updated orders with Amazon */
  maintenanceAmazonSyncUpdatedOrders?: Maybe<Scalars['Boolean']>;
  /** Sets a category's parent */
  categorySetParent?: Maybe<CategoryEntity>;
  /** Validates the address, updates it if necessary */
  salesOrderValidateAddress?: Maybe<SalesOrderEntity>;
  /** Removes a zone from a simple product */
  simpleProductRemoveZone?: Maybe<SimpleProductEntity>;
  /** Add a preparation to a product */
  preppedProductsAddPreparation?: Maybe<PreparationSummary>;
  /** Provides making stock status */
  makingStockStatus?: Maybe<Array<Maybe<InventoryDetails>>>;
  /** Sends a password reset email */
  userSendPasswordReset?: Maybe<Scalars['Boolean']>;
  /** Sets inventory for a simple product */
  inventorySetDetails?: Maybe<InventoryDetails>;
  /** Gets printers for an existing workstation */
  autoprintListPrinters?: Maybe<Array<Maybe<PrinterEntity>>>;
  /** Pushes a simple product to Poynt */
  simpleProductPush: Scalars['Boolean'];
  /** Triggers a re-sync of packaging orders with Magento */
  maintenanceMagentoSyncPackaging?: Maybe<Scalars['Boolean']>;
  /** Triggers sync a transaction with Poynt */
  maintenancePoyntSyncTransaction?: Maybe<Scalars['Boolean']>;
  /** Sets the shipping zip code, as a shortcut for shipping rates */
  cartSetShippingZip?: Maybe<CartEntity>;
  /** Changes quantity of selected simple product in user's cart */
  cartChangeQuantitySimpleProduct?: Maybe<CartEntity>;
  /** Sets the shipping address */
  cartSetShippingAddress?: Maybe<CartEntity>;
  /** Generates a client token for current user. */
  checkoutGetClientToken?: Maybe<ClientTokenDetail>;
  /** Removes all quantity of selected kit product from user's cart */
  cartRemoveAllKitProduct?: Maybe<CartEntity>;
  /** Adds quantity of selected kit product to user's cart */
  cartAddKitProduct?: Maybe<CartEntity>;
  /** Voids a shipment */
  shipmentVoid?: Maybe<ShipmentEntity>;
  /** Requests a notification when a product is placed back into stock */
  productRequestBackInStockNotification?: Maybe<Scalars['Boolean']>;
  /** Creates a new department */
  departmentCreate?: Maybe<DepartmentEntity>;
  /** Clears the cart's coupon code */
  cartClearCouponCode?: Maybe<CartEntity>;
  /** Triggers a fix to clean up inventory issues */
  maintenanceFixInventoryIssue?: Maybe<Scalars['Boolean']>;
};


/** Mutation root */
export type MutationCartCheckoutArgs = {
  method: Scalars['String'];
  cartId: Scalars['UUID'];
  deviceData?: Maybe<Scalars['String']>;
  giftCardPin?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  giftCardCode?: Maybe<Scalars['String']>;
  useRewardPoints?: Maybe<Scalars['Boolean']>;
  nonce?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationPurchaseRequestOrderArgs = {
  amount: Scalars['BigDecimal'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAmazonSalesOrderRefreshArgs = {
  amazonId: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentValidateAddressArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductSetBinArgs = {
  bin: Scalars['String'];
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationMarketingSubscribeArgs = {
  email?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationCartClearPhoneArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationSalesTaxRateArgs = {
  postalCode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationShipmentDashboardArgs = {
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetPhoneArgs = {
  phone: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationSimpleProductRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationUserRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationCartChangeQuantityKitProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationDiscountEvaluateImplicitProductsArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationInventoryGetDetailsArgs = {
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentLookupWeatherArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAutoprintEnrollWorkstationArgs = {
  machineKey: Scalars['String'];
  name: Scalars['String'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentShipMultiPieceArgs = {
  carrier: Carrier;
  service: Service;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  reseller?: Maybe<Reseller>;
  packaging?: Maybe<Packaging>;
  id: Scalars['UUID'];
  packages: Array<Maybe<PackageSizeInput>>;
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintGetNextForPrinterArgs = {
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
};


/** Mutation root */
export type MutationWalmartSalesOrderRefreshArgs = {
  purchaseOrderId: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetBillingAddressByIdArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  addressId: Scalars['UUID'];
};


/** Mutation root */
export type MutationPreppedProductsRemovePreparationArgs = {
  productId: Scalars['UUID'];
  preparationId: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationCartAddSimpleProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationKitProductCreateArgs = {
  price: Scalars['BigDecimal'];
  title: Scalars['String'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationInventoryAddDetailsArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetEmailArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  email: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetShippingAddressByIdArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  addressId: Scalars['UUID'];
};


/** Mutation root */
export type MutationTradeShowAssignTerminalArgs = {
  tradeshowId: Scalars['UUID'];
  terminalId: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartSetCarrierPreferenceArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  simpleProductId: Scalars['UUID'];
  carrierPreference: Carrier;
};


/** Mutation root */
export type MutationSimpleProductSetRequiresPrepArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationShipmentRateMultiPieceArgs = {
  packaging?: Maybe<Packaging>;
  id: Scalars['UUID'];
  packages: Array<Maybe<PackageSizeInput>>;
  shipDate?: Maybe<Scalars['String']>;
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearEmailArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationUserConfirmEmailArgs = {
  hash: Scalars['String'];
};


/** Mutation root */
export type MutationKitProductRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationInventoryAddArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationUserChangePasswordByHashArgs = {
  password: Scalars['String'];
  hash: Scalars['String'];
};


/** Mutation root */
export type MutationPurchaseRequestRemoveItemArgs = {
  itemId?: Maybe<Scalars['UUID']>;
  requestId?: Maybe<Scalars['UUID']>;
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
export type MutationShipmentRescheduleArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAutoprintTestWorkstationArgs = {
  machineKey: Scalars['String'];
};


/** Mutation root */
export type MutationPurchaseRequestAddItemArgs = {
  amount?: Maybe<Scalars['BigDecimal']>;
  quantity?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationPurchaseRequestApproveArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductClearBinArgs = {
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintReprintArgs = {
  shipment: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartClearCarrierPreferenceArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  simpleProductId: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductRecomputeShippingEstimatesArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationUserUpdateAdminArgs = {
  admin: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAddressVerifyRawArgs = {
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
export type MutationTradeShowUnassignTerminalArgs = {
  tradeshowId: Scalars['UUID'];
  terminalId: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartSetBillingAddressArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductRemoveWarehouseArgs = {
  productId: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationTradeShowReportArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationTradeShowCreateShowArgs = {
  endDate: Scalars['LocalDate'];
  city: Scalars['String'];
  postalCode: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  startDate: Scalars['LocalDate'];
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationTradeShowSendReportArgs = {
  emails: Array<Maybe<Scalars['String']>>;
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAutoprintAddPrinterArgs = {
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentRerouteArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAutoprintCancelAcknowledgeForPrinterArgs = {
  shipment: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductAddWarehouseArgs = {
  productId: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintDownloadAcknowledgeForPrinterArgs = {
  shipment: Scalars['UUID'];
};


/** Mutation root */
export type MutationCartSetCouponCodeArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  couponCode?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationConfigurableProductRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearShippingAddressArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartSetDeliveryDatePreferenceArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  simpleProductId: Scalars['UUID'];
  deliveryDatePreference: Scalars['LocalDate'];
};


/** Mutation root */
export type MutationMagentoSalesOrderRefreshArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationPurchaseRequestReceiveArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationAutoprintPrintAcknowledgeForPrinterArgs = {
  shipment: Scalars['UUID'];
};


/** Mutation root */
export type MutationMagentoSalesOrderRefreshAsyncArgs = {
  magentoId: Scalars['String'];
};


/** Mutation root */
export type MutationUserRegisterArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationSalesOrderSetHoldArgs = {
  id: Scalars['UUID'];
  hold: Scalars['Boolean'];
};


/** Mutation root */
export type MutationCartRemoveAllSimpleProductArgs = {
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationAddressVerifyArgs = {
  commit: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductReindexArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductRefreshBySkuArgs = {
  sku: Scalars['String'];
};


/** Mutation root */
export type MutationCategoryCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationCartCrossSellsArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationSimpleProductAddZoneArgs = {
  productId: Scalars['UUID'];
  zoneId: Scalars['UUID'];
};


/** Mutation root */
export type MutationKitProductRefreshBySkuArgs = {
  sku: Scalars['String'];
};


/** Mutation root */
export type MutationTradeShowCreateTerminalArgs = {
  urn: Scalars['String'];
  assetTag: Scalars['String'];
};


/** Mutation root */
export type MutationShipmentUpdateAddressArgs = {
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
export type MutationPurchaseRequestCreateArgs = {
  comments?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  team: Scalars['String'];
  items?: Maybe<Array<Maybe<PurchaseRequestItemInput>>>;
};


/** Mutation root */
export type MutationCartGetEarliestDeliveryDateArgs = {
  quantity: Scalars['Long'];
  cartId?: Maybe<Scalars['UUID']>;
  simpleProductId: Scalars['UUID'];
};


/** Mutation root */
export type MutationMaintenancePoyntSyncTransactionsArgs = {
  updatedBefore: Scalars['Instant'];
  updatedAfter: Scalars['Instant'];
};


/** Mutation root */
export type MutationCategorySetActiveArgs = {
  active: Scalars['Boolean'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationShipmentScanFormArgs = {
  date: Scalars['String'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearDeliveryDatePreferenceArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  simpleProductId: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductClearRequiresPrepArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationUserUpdatePasswordArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationCartSummarizeArgs = {
  cartId?: Maybe<Scalars['UUID']>;
  useRewardPoints?: Maybe<Scalars['Boolean']>;
};


/** Mutation root */
export type MutationDepartmentSetParentArgs = {
  parent: Scalars['UUID'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSalesOrderOfflineRefundArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationConfigurableProductRefreshBySkuArgs = {
  sku: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductCreateArgs = {
  cost?: Maybe<Scalars['BigDecimal']>;
  price: Scalars['BigDecimal'];
  upc?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  sku: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  vendorRef?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddressDeleteArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationUserCreateArgs = {
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearBillingAddressArgs = {
  cartId?: Maybe<Scalars['UUID']>;
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
export type MutationShipmentLookupWeatherByZipArgs = {
  zip: Scalars['String'];
};


/** Mutation root */
export type MutationTeamCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationCategorySetParentArgs = {
  parent: Scalars['UUID'];
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSalesOrderValidateAddressArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationSimpleProductRemoveZoneArgs = {
  productId: Scalars['UUID'];
  zoneId: Scalars['UUID'];
};


/** Mutation root */
export type MutationPreppedProductsAddPreparationArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationMakingStockStatusArgs = {
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationUserSendPasswordResetArgs = {
  email: Scalars['String'];
};


/** Mutation root */
export type MutationInventorySetDetailsArgs = {
  quantity: Scalars['Long'];
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Mutation root */
export type MutationAutoprintListPrintersArgs = {
  machineKey: Scalars['String'];
};


/** Mutation root */
export type MutationSimpleProductPushArgs = {
  price?: Maybe<Scalars['BigDecimal']>;
  name?: Maybe<Scalars['String']>;
  sku: Scalars['String'];
  shortCode?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationMaintenancePoyntSyncTransactionArgs = {
  orderNumber?: Maybe<Scalars['String']>;
  transactionId: Scalars['String'];
};


/** Mutation root */
export type MutationCartSetShippingZipArgs = {
  zip: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartChangeQuantitySimpleProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartSetShippingAddressArgs = {
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  residential?: Maybe<Scalars['Boolean']>;
  city: Scalars['String'];
  postalCode: Scalars['String'];
  cartId?: Maybe<Scalars['UUID']>;
  company?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
};


/** Mutation root */
export type MutationCartRemoveAllKitProductArgs = {
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationCartAddKitProductArgs = {
  quantity: Scalars['Long'];
  productId: Scalars['UUID'];
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationShipmentVoidArgs = {
  id: Scalars['UUID'];
};


/** Mutation root */
export type MutationProductRequestBackInStockNotificationArgs = {
  id: Scalars['UUID'];
  email: Scalars['String'];
};


/** Mutation root */
export type MutationDepartmentCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


/** Mutation root */
export type MutationCartClearCouponCodeArgs = {
  cartId?: Maybe<Scalars['UUID']>;
};


/** Mutation root */
export type MutationMaintenanceFixInventoryIssueArgs = {
  productId?: Maybe<Scalars['UUID']>;
};

export type PackageSizeInput = {
  height?: Maybe<Scalars['BigDecimal']>;
  length?: Maybe<Scalars['BigDecimal']>;
  weight: Scalars['BigDecimal'];
  width?: Maybe<Scalars['BigDecimal']>;
};

export enum Packaging {
  CardboardBox = 'CARDBOARD_BOX',
  FedexEnvelope = 'FEDEX_ENVELOPE',
  FlatRateEnvelope = 'FLAT_RATE_ENVELOPE',
  PolyBag_12X15 = 'POLY_BAG_12X15',
  RegionalBoxA = 'REGIONAL_BOX_A',
  RegionalBoxB = 'REGIONAL_BOX_B'
}

export type PaymentEntity = {
  __typename?: 'PaymentEntity';
  /** Payment's amount */
  amount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Payment's status */
  paymentStatus?: Maybe<PaymentStatus>;
  /** Payment's placed timestamp */
  placedAt?: Maybe<Scalars['Instant']>;
  /** Payment's sales order */
  salesOrder?: Maybe<SalesOrderEntity>;
  /** Payment's transaction id */
  transactionId?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum PaymentStatus {
  AuthorizationExpired = 'AUTHORIZATION_EXPIRED',
  Authorized = 'AUTHORIZED',
  Authorizing = 'AUTHORIZING',
  Failed = 'FAILED',
  GatewayRejected = 'GATEWAY_REJECTED',
  ProcessorDeclined = 'PROCESSOR_DECLINED',
  Settled = 'SETTLED',
  SettlementDeclined = 'SETTLEMENT_DECLINED',
  SettlementPending = 'SETTLEMENT_PENDING',
  Settling = 'SETTLING',
  SubmittedForSettlement = 'SUBMITTED_FOR_SETTLEMENT',
  Voided = 'VOIDED'
}

export type PdfContents = {
  __typename?: 'PdfContents';
  /** PDF's data */
  data?: Maybe<Scalars['String']>;
  /** PDF's filename */
  fileName?: Maybe<Scalars['String']>;
  /** PDF's HTML content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type PosTerminalEntity = {
  __typename?: 'PosTerminalEntity';
  /** POS terminal's asset tag */
  assetTag?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  tradeShowEntities?: Maybe<Array<Maybe<TradeShowEntity>>>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** POS terminal's urn */
  urn?: Maybe<Scalars['String']>;
};

export type PreparationEntity = {
  __typename?: 'PreparationEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Preparation's preparer */
  preparer?: Maybe<Scalars['String']>;
  /** Preparation's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Preparation's ship date */
  shipDate?: Maybe<Scalars['LocalDate']>;
  /** Preparation's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Preparation's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
};

export type PreparationSummary = {
  __typename?: 'PreparationSummary';
  /** Preparation summary's quantity needed */
  quantityNeeded?: Maybe<Scalars['Long']>;
  /** Preparation summary's quantity ordered */
  quantityOrdered?: Maybe<Scalars['Long']>;
  /** Preparation summary's quantity prepped */
  quantityPrepped?: Maybe<Scalars['Long']>;
  /** Preparation summary's quantity shipped */
  quantityShipped?: Maybe<Scalars['Long']>;
  /** Preparation summary's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Preparation summary's preparations */
  todaysPreparations?: Maybe<Array<Maybe<PreparationEntity>>>;
};

export type PrintJob = {
  __typename?: 'PrintJob';
  /** Print job's data */
  dataBase64?: Maybe<Scalars['String']>;
  /** Print job's name */
  name?: Maybe<Scalars['String']>;
  /** Print job's printer */
  printer?: Maybe<Scalars['String']>;
  /** Print job's rotation */
  rotate?: Maybe<Scalars['Boolean']>;
  /** Print job's tray */
  tray?: Maybe<Scalars['String']>;
};

export type PrinterEntity = {
  __typename?: 'PrinterEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Printer's name */
  name?: Maybe<Scalars['String']>;
  /** Printer's rotation */
  rotate?: Maybe<Scalars['Boolean']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['Float']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['Long']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's explicit department */
  explicitDepartment?: Maybe<DepartmentEntity>;
  /** Product's explicit discounts */
  explicitDiscounts?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** Product's explicit promotions */
  explicitPromotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Product's featured status */
  featured?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's implicit department */
  implicitDepartments?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Product's implicit discounts */
  implicitDiscounts?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** Product's implicit promotions */
  implicitPromotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Product's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  salePrice?: Maybe<Scalars['BigDecimal']>;
  /** Product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Product's special price */
  specialPrice?: Maybe<Scalars['BigDecimal']>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Product's upsells */
  upsellProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Product's variation key */
  variationKey?: Maybe<Scalars['String']>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
  /** Product's visible flag */
  visible?: Maybe<Scalars['Boolean']>;
  /** Product's wholesale price */
  wholesalePrice?: Maybe<Scalars['BigDecimal']>;
};

export type ProductRevisionEntity = {
  __typename?: 'ProductRevisionEntity';
  /** Product revision's html content */
  htmlContent?: Maybe<Scalars['String']>;
};

export type ProfitabilitySummary = {
  __typename?: 'ProfitabilitySummary';
  /** Summary's average cost */
  averageCost?: Maybe<Scalars['BigDecimal']>;
  /** Summary's average price */
  averagePrice?: Maybe<Scalars['BigDecimal']>;
  /** Summary's gross margin */
  grossMargin?: Maybe<Scalars['Float']>;
  /** Summary's product */
  product?: Maybe<SimpleProductEntity>;
  /** Summary's profit */
  profit?: Maybe<Scalars['BigDecimal']>;
  /** Summary's number sold */
  sold?: Maybe<Scalars['Long']>;
  /** Summary's stock out */
  stockOut?: Maybe<Scalars['Float']>;
  /** Summary's velocity */
  velocity?: Maybe<Scalars['Float']>;
};

export type PromotionEntity = {
  __typename?: 'PromotionEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type PurchaseRequestEntity = {
  __typename?: 'PurchaseRequestEntity';
  /** Request's approver */
  approver?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Request's comments */
  comments?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Request's estimated amount */
  estimatedAmount?: Maybe<Scalars['BigDecimal']>;
  /** Request's final amount */
  finalAmount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Request's ordered date */
  orderedDate?: Maybe<Scalars['LocalDate']>;
  /** Request's orderer */
  orderer?: Maybe<Scalars['String']>;
  /** Request's items */
  purchaseRequestItems?: Maybe<Array<Maybe<PurchaseRequestItemEntity>>>;
  /** Request's status */
  purchaseRequestStatus?: Maybe<PurchaseRequestStatus>;
  /** Request's received date */
  receivedDate?: Maybe<Scalars['LocalDate']>;
  /** Request's receiver */
  receiver?: Maybe<Scalars['String']>;
  /** Request's number */
  requestNumber?: Maybe<Scalars['String']>;
  /** Request's requested date */
  requestedDate?: Maybe<Scalars['LocalDate']>;
  /** Request's requester */
  requester?: Maybe<Scalars['String']>;
  /** Request's supplier */
  supplier?: Maybe<Scalars['String']>;
  /** Request's team */
  team?: Maybe<TeamEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type PurchaseRequestItemEntity = {
  __typename?: 'PurchaseRequestItemEntity';
  /** Requests item's amount */
  amount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Requests item's name */
  name?: Maybe<Scalars['String']>;
  /** Requests item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type PurchaseRequestItemInput = {
  amount?: Maybe<Scalars['BigDecimal']>;
  name: Scalars['String'];
  quantity: Scalars['Long'];
};

export enum PurchaseRequestStatus {
  Approved = 'APPROVED',
  NeedsClarification = 'NEEDS_CLARIFICATION',
  Pending = 'PENDING',
  Purchased = 'PURCHASED',
  Received = 'RECEIVED'
}

/** Query root */
export type Query = {
  __typename?: 'Query';
  /** Lists animals */
  animalList?: Maybe<GraphQlPage_AnimalEntity>;
  /** Provides user info a user */
  userInfo?: Maybe<UserEntity>;
  /** Creates transient shipments for sales order items, then rolls back */
  salesOrderComputeBestShipping?: Maybe<SalesOrderEntity>;
  /** Deletes and recomputes shipments for a sales order */
  salesOrderNukeAndComputeBestShipping?: Maybe<SalesOrderEntity>;
  /** Generate a PDF for the sales order */
  salesOrderGeneratePdf?: Maybe<PdfContents>;
  /** Returns the user's reward points balance */
  rewardPointsBalance?: Maybe<Scalars['Long']>;
  /** Locates the root department */
  departmentRoot?: Maybe<DepartmentEntity>;
  /** Retrieves product reviews */
  reviewListForProduct?: Maybe<ReviewResults>;
  /** Search categories */
  categorySearch?: Maybe<GraphQlPage_CategoryEntity>;
  /** Calculates a secure hash */
  shipmentSecureHash?: Maybe<Scalars['String']>;
  /** Locates a product by slug */
  productBySlug?: Maybe<ProductEntity>;
  /** Filters purchase requests */
  purchaseRequestFilter?: Maybe<GraphQlPage_PurchaseRequestEntity>;
  /** Provides warehouse info */
  warehouseFindByName?: Maybe<WarehouseEntity>;
  /** Lists kit products */
  kitProductList?: Maybe<GraphQlPage_KitProductEntity>;
  /** Lists departments */
  teamList?: Maybe<GraphQlPage_TeamEntity>;
  /** Lists suppliers */
  supplierList?: Maybe<GraphQlPage_SupplierEntity>;
  /** Searches for a shipment */
  shipmentSearch?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Locates a configurable product by SKU */
  configurableProductFindBySku?: Maybe<ConfigurableProductEntity>;
  /** Search products */
  productSearch?: Maybe<SearchResults>;
  /** Calculates a secure hash */
  salesOrderSecureHash?: Maybe<Scalars['String']>;
  /** Provides warehouse info */
  warehouseList?: Maybe<Array<Maybe<WarehouseEntity>>>;
  /** Locates a category by slug */
  categoryBySlug?: Maybe<CategoryResults>;
  /** Provides user info for current user */
  userSelf?: Maybe<UserEntity>;
  /** Locates a configurable product by id */
  configurableProductInfo?: Maybe<ConfigurableProductEntity>;
  /** Locates a department by slug */
  departmentBySlug?: Maybe<DepartmentEntity>;
  /** Calculates a secure hash */
  userSecureHash?: Maybe<Scalars['String']>;
  /** Filters simple products */
  simpleProductFilter?: Maybe<GraphQlPage_SimpleProductEntity>;
  /** Locates a product by id */
  productInfo?: Maybe<ProductEntity>;
  /** Provides cart info for current user */
  cartInfo?: Maybe<CartEntity>;
  /** Locates a discount by id */
  discountInfo?: Maybe<DiscountEntity>;
  /** Looks up an order by secure hash */
  shipmentByHash?: Maybe<ShipmentEntity>;
  /** Filters users */
  userFilter?: Maybe<GraphQlPage_UserEntity>;
  /** Returns a tradeshow */
  tradeShowInfo?: Maybe<TradeShowEntity>;
  /** Filter shipments */
  shipmentFilter?: Maybe<GraphQlPage_ShipmentEntity>;
  /** Filters sales orders */
  salesOrderFilter?: Maybe<GraphQlPage_SalesOrderEntity>;
  /** Lists products */
  productList?: Maybe<GraphQlPage_ProductEntity>;
  /** Locates a kit product by slug */
  kitProductBySlug?: Maybe<KitProductEntity>;
  /** Lists discounts */
  discountList?: Maybe<GraphQlPage_DiscountEntity>;
  /** Looks up an order by secure hash */
  salesOrderByHash?: Maybe<SalesOrderEntity>;
  /** Locates a simple product by slug */
  simpleProductBySlug?: Maybe<SimpleProductEntity>;
  /** Locates a simple product by bin */
  simpleProductFindByBin?: Maybe<SimpleProductEntity>;
  /** Retrieves a shipment */
  shipmentFind?: Maybe<ShipmentEntity>;
  /** Returns a purchase request by id */
  purchaseRequestInfo?: Maybe<PurchaseRequestEntity>;
  /** Lists brands */
  brandList?: Maybe<GraphQlPage_BrandEntity>;
  /** Lists departments */
  departmentList?: Maybe<GraphQlPage_DepartmentEntity>;
  /** Returns the gift card's balance */
  giftCardBalance?: Maybe<Scalars['BigDecimal']>;
  /** Locates a department by slug */
  teamBySlug?: Maybe<TeamEntity>;
  /** Locates a kit product by UPC */
  kitProductFindByUpc?: Maybe<KitProductEntity>;
  /** Provides user info by email */
  userFindByEmail?: Maybe<UserEntity>;
  /** Lists prepped products */
  preppedProductsList?: Maybe<Array<Maybe<PreparationSummary>>>;
  /** Locates a configurable product by slug */
  configurableProductBySlug?: Maybe<ConfigurableProductEntity>;
  /** Lists address for current user */
  addressList?: Maybe<Array<Maybe<AddressEntity>>>;
  /** Lists categories */
  categoryList?: Maybe<GraphQlPage_CategoryEntity>;
  /** Locates a simple product by id */
  simpleProductInfo?: Maybe<SimpleProductEntity>;
  /** Lists configurable products */
  configurableProductList?: Maybe<GraphQlPage_ConfigurableProductEntity>;
  /** Locates a kit product by SKU */
  kitProductFindBySku?: Maybe<KitProductEntity>;
  /** Queries a preparation summary for a product */
  preppedProductsInfo?: Maybe<PreparationSummary>;
  /** Retrieves a shipment */
  shipmentInfo?: Maybe<ShipmentEntity>;
  /** Provides zone info */
  zoneList?: Maybe<Array<Maybe<ZoneEntity>>>;
  /** Filters configurable products */
  configurableProductFilter?: Maybe<GraphQlPage_ConfigurableProductEntity>;
  /** Locates a simple product by UPC */
  simpleProductFindByUpc?: Maybe<SimpleProductEntity>;
  /** Locates the root category */
  categoryRoot?: Maybe<CategoryEntity>;
  /** Lists sales orders */
  salesOrderList?: Maybe<GraphQlPage_SalesOrderEntity>;
  /** Filters kit products */
  kitProductFilter?: Maybe<GraphQlPage_KitProductEntity>;
  /** Lists simple products */
  simpleProductList?: Maybe<GraphQlPage_SimpleProductEntity>;
  /** Locates a kit product by id */
  kitProductInfo?: Maybe<KitProductEntity>;
  /** Locates a simple product by SKU */
  simpleProductFindBySku?: Maybe<SimpleProductEntity>;
  /** Retrieves a sales order */
  salesOrderInfo?: Maybe<SalesOrderEntity>;
  /** Filters tradeshows */
  tradeShowFilter?: Maybe<GraphQlPage_TradeShowEntity>;
  simpleProductProfitabilityReport?: Maybe<GraphQlPage_ProfitabilitySummary>;
};


/** Query root */
export type QueryAnimalListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryUserInfoArgs = {
  id?: Maybe<Scalars['UUID']>;
};


/** Query root */
export type QuerySalesOrderComputeBestShippingArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QuerySalesOrderNukeAndComputeBestShippingArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryReviewListForProductArgs = {
  productId: Scalars['UUID'];
  rating?: Maybe<Scalars['Long']>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryCategorySearchArgs = {
  query: Scalars['String'];
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryShipmentSecureHashArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryProductBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QueryPurchaseRequestFilterArgs = {
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  team?: Maybe<Scalars['String']>;
  status?: Maybe<PurchaseRequestStatus>;
};


/** Query root */
export type QueryWarehouseFindByNameArgs = {
  name: Scalars['String'];
};


/** Query root */
export type QueryKitProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryTeamListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QuerySupplierListArgs = {
  page: GraphQlPageableInput;
};


/** Query root */
export type QueryShipmentSearchArgs = {
  query: Scalars['String'];
};


/** Query root */
export type QueryConfigurableProductFindBySkuArgs = {
  sku: Scalars['String'];
};


/** Query root */
export type QueryProductSearchArgs = {
  price?: Maybe<GraphQlValueRangeQueryFilter_BigDecimalInput>;
  query?: Maybe<Scalars['String']>;
  rating?: Maybe<GraphQlValueRangeQueryFilter_DoubleInput>;
  animal?: Maybe<Scalars['String']>;
  inStock?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
};


/** Query root */
export type QuerySalesOrderSecureHashArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryCategoryBySlugArgs = {
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  slug: Scalars['String'];
};


/** Query root */
export type QueryConfigurableProductInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryDepartmentBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QueryUserSecureHashArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QuerySimpleProductFilterArgs = {
  supplier?: Maybe<Scalars['String']>;
  rating?: Maybe<GraphQlSingleValueFilter_LongInput>;
  animal?: Maybe<Scalars['String']>;
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
export type QueryDiscountInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryShipmentByHashArgs = {
  hash: Scalars['String'];
};


/** Query root */
export type QueryUserFilterArgs = {
  lastName?: Maybe<GraphQlLikeQueryFilterInput>;
  firstName?: Maybe<GraphQlLikeQueryFilterInput>;
  admin?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  email?: Maybe<GraphQlLikeQueryFilterInput>;
};


/** Query root */
export type QueryTradeShowInfoArgs = {
  id?: Maybe<Scalars['UUID']>;
};


/** Query root */
export type QueryShipmentFilterArgs = {
  lastName?: Maybe<GraphQlLikeQueryFilterInput>;
  firstName?: Maybe<GraphQlLikeQueryFilterInput>;
  late?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  warehouse?: Maybe<GraphQlSingleValueFilter_StringInput>;
  shipmentNumber?: Maybe<GraphQlLikeQueryFilterInput>;
  email?: Maybe<GraphQlLikeQueryFilterInput>;
  shipmentStatus?: Maybe<GraphQlSingleValueFilter_ShipmentStatusInput>;
};


/** Query root */
export type QuerySalesOrderFilterArgs = {
  orderType?: Maybe<GraphQlSingleValueFilter_StringInput>;
  billingLastName?: Maybe<GraphQlLikeQueryFilterInput>;
  orderNumber?: Maybe<GraphQlLikeQueryFilterInput>;
  alternateOrderNumber?: Maybe<GraphQlLikeQueryFilterInput>;
  billingFirstName?: Maybe<GraphQlLikeQueryFilterInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  email?: Maybe<GraphQlLikeQueryFilterInput>;
};


/** Query root */
export type QueryProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryKitProductBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QueryDiscountListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QuerySalesOrderByHashArgs = {
  hash: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QuerySimpleProductFindByBinArgs = {
  binId: Scalars['String'];
  warehouse: Scalars['String'];
};


/** Query root */
export type QueryShipmentFindArgs = {
  shipmentNumber: Scalars['String'];
};


/** Query root */
export type QueryPurchaseRequestInfoArgs = {
  id: Scalars['UUID'];
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
export type QueryGiftCardBalanceArgs = {
  code: Scalars['String'];
  pin?: Maybe<Scalars['String']>;
};


/** Query root */
export type QueryTeamBySlugArgs = {
  slug: Scalars['String'];
};


/** Query root */
export type QueryKitProductFindByUpcArgs = {
  upc: Scalars['String'];
};


/** Query root */
export type QueryUserFindByEmailArgs = {
  email: Scalars['String'];
};


/** Query root */
export type QueryPreppedProductsListArgs = {
  department: Scalars['String'];
  warehouse: Scalars['String'];
};


/** Query root */
export type QueryConfigurableProductBySlugArgs = {
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
export type QueryConfigurableProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryKitProductFindBySkuArgs = {
  sku: Scalars['String'];
};


/** Query root */
export type QueryPreppedProductsInfoArgs = {
  productId: Scalars['UUID'];
  warehouse: Scalars['String'];
};


/** Query root */
export type QueryShipmentInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryConfigurableProductFilterArgs = {
  active?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  sku?: Maybe<GraphQlLikeQueryFilterInput>;
  title?: Maybe<GraphQlLikeQueryFilterInput>;
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
export type QueryKitProductFilterArgs = {
  active?: Maybe<GraphQlSingleValueFilter_BooleanInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  sku?: Maybe<GraphQlLikeQueryFilterInput>;
  title?: Maybe<GraphQlLikeQueryFilterInput>;
};


/** Query root */
export type QuerySimpleProductListArgs = {
  page?: Maybe<GraphQlPageableInput>;
};


/** Query root */
export type QueryKitProductInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QuerySimpleProductFindBySkuArgs = {
  sku: Scalars['String'];
};


/** Query root */
export type QuerySalesOrderInfoArgs = {
  id: Scalars['UUID'];
};


/** Query root */
export type QueryTradeShowFilterArgs = {
  name?: Maybe<GraphQlLikeQueryFilterInput>;
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
};


/** Query root */
export type QuerySimpleProductProfitabilityReportArgs = {
  endDate: Scalars['LocalDate'];
  sort?: Maybe<GraphQlSortInput>;
  page: GraphQlPageableInput;
  category?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  startDate: Scalars['LocalDate'];
};

export enum QueryCondition {
  Eq = 'eq',
  Ge = 'ge',
  Gt = 'gt',
  IsNull = 'isNull',
  Le = 'le',
  Lt = 'lt',
  Ne = 'ne',
  NotNull = 'notNull'
}

export type RateQuote = {
  __typename?: 'RateQuote';
  /** Rate quote's carrier */
  carrier?: Maybe<Carrier>;
  /** Rate quote's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Rate quote's delivery date */
  deliveryDate?: Maybe<Scalars['String']>;
  /** Rate quote's domestic service type */
  domesticServiceType?: Maybe<DomesticServiceType>;
  /** Rate quote's fitness */
  fitness?: Maybe<RateQuoteFitness>;
  /** Rate quote's options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Rate quote's packaging */
  packaging?: Maybe<Packaging>;
  /** Rate quote's postage reseller */
  reseller?: Maybe<Reseller>;
  /** Rate quote's service */
  service?: Maybe<Service>;
  /** Rate quote's ship date */
  shipDate?: Maybe<Scalars['String']>;
};

export enum RateQuoteFitness {
  Bad = 'BAD',
  Best = 'BEST',
  Good = 'GOOD',
  Neutral = 'NEUTRAL'
}

export enum Reseller {
  Amazon = 'AMAZON',
  Dhl = 'DHL',
  Fedex = 'FEDEX',
  Generic = 'GENERIC',
  Lasership = 'LASERSHIP',
  Sendle = 'SENDLE',
  Stamps = 'STAMPS',
  Ups = 'UPS'
}

export type ReviewEntity = {
  __typename?: 'ReviewEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Review's comments */
  comments?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Review's rating */
  rating?: Maybe<Scalars['Long']>;
  /** Review's reviewer */
  reviewer?: Maybe<Scalars['String']>;
  /** Review's title */
  title?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ReviewResults = {
  __typename?: 'ReviewResults';
  /** Result's average rating */
  averageRating?: Maybe<Scalars['Float']>;
  /** Result's count 0 to 20 */
  count0To20?: Maybe<Scalars['Long']>;
  /** Result's count 21 to 40 */
  count21To40?: Maybe<Scalars['Long']>;
  /** Result's count 41 to 60 */
  count41To60?: Maybe<Scalars['Long']>;
  /** Result's count 61 to 80 */
  count61To80?: Maybe<Scalars['Long']>;
  /** Result's count 81 to 100 */
  count81To100?: Maybe<Scalars['Long']>;
  /** Result's reviews */
  reviews?: Maybe<GraphQlPage_ReviewEntity>;
};

export enum RoleType {
  RolePurchaseRequestApprove = 'ROLE_PURCHASE_REQUEST_APPROVE',
  RolePurchaseRequestOrder = 'ROLE_PURCHASE_REQUEST_ORDER',
  RolePurchaseRequestReceive = 'ROLE_PURCHASE_REQUEST_RECEIVE'
}

export type SalesOrderCommentsEntity = {
  __typename?: 'SalesOrderCommentsEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Comment's comment */
  comment?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Comment's name */
  name?: Maybe<Scalars['String']>;
  /** Comment's sales order */
  salesOrder?: Maybe<SalesOrderEntity>;
  /** Comment's time */
  time?: Maybe<Scalars['Instant']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type SalesOrderDiscountEntity = {
  __typename?: 'SalesOrderDiscountEntity';
  /** Sales order discount's amount */
  amount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Sales order discount's name */
  name?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type SalesOrderEntity = {
  __typename?: 'SalesOrderEntity';
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Sales order's comments */
  comments?: Maybe<Array<Maybe<SalesOrderCommentsEntity>>>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Order's fulfillment channel */
  fulfillmentChannelType?: Maybe<FulfillmentChannelType>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's hold status */
  hold?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Order is from a marketplace */
  marketplace?: Maybe<Scalars['Boolean']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Sales order's payments */
  payments?: Maybe<Array<Maybe<PaymentEntity>>>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Sales order's discounts */
  salesOrderDiscounts?: Maybe<Array<Maybe<SalesOrderDiscountEntity>>>;
  /** Sales order's item groups */
  salesOrderItemGroups?: Maybe<Array<Maybe<SalesOrderItemGroupEntity>>>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order's type */
  salesOrderType?: Maybe<SalesOrderType>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Sales order's shipping method */
  shippingMethod?: Maybe<Scalars['String']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type SalesOrderItemEntity = {
  __typename?: 'SalesOrderItemEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Order item's discount */
  discountAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's expected delivery */
  expectedDelivery?: Maybe<Scalars['LocalDate']>;
  /** Order item's expected ship */
  expectedShip?: Maybe<Scalars['LocalDate']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Order item's line cost */
  lineAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's live arrival guarantee */
  liveArrivalGuaranteeState?: Maybe<LiveArrivalGuaranteeState>;
  /** Order item's name */
  name?: Maybe<Scalars['String']>;
  /** Order item's overridden carrier preference */
  overriddenCarrierPreference?: Maybe<Carrier>;
  /** Order item's overridden service type */
  overriddenDomesticServiceType?: Maybe<DomesticServiceType>;
  /** Order item's overridden shipping needs */
  overriddenShippingNeedsType?: Maybe<ShippingNeedsType>;
  /** Order item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Order item's group */
  salesOrderItemGroup?: Maybe<SalesOrderItemGroupEntity>;
  /** Order item's shipping amount */
  shippingAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Order item's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Order item's tax amount */
  taxAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order item's unit cost */
  unitAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item's unit weight */
  unitWeight?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type SalesOrderItemGroupEntity = {
  __typename?: 'SalesOrderItemGroupEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Order item group's discount */
  discountAmount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Order item group's kit product */
  kitProduct?: Maybe<KitProductEntity>;
  /** Order item group's line cost */
  lineAmount?: Maybe<Scalars['BigDecimal']>;
  /** Order item group's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Order item group's order items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order item group's unit cost */
  unitAmount?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum SalesOrderStatus {
  Cancelled = 'Cancelled',
  PartiallyShipped = 'PartiallyShipped',
  PendingPayment = 'PendingPayment',
  PendingReleaseOfHold = 'PendingReleaseOfHold',
  Shipped = 'Shipped',
  Unshipped = 'Unshipped'
}

export enum SalesOrderType {
  Employee = 'Employee',
  Retail = 'Retail',
  TaxExempt = 'TaxExempt',
  Wholesale = 'Wholesale'
}

export enum SalesTaxRules {
  NotTaxable = 'NOT_TAXABLE',
  Taxable = 'TAXABLE'
}

export type SearchResults = {
  __typename?: 'SearchResults';
  /** Result's animal */
  animal?: Maybe<AnimalEntity>;
  /** Result's brand */
  brand?: Maybe<BrandEntity>;
  /** Result's category */
  category?: Maybe<CategoryEntity>;
  /** Result's products */
  products?: Maybe<GraphQlPage_ProductEntity>;
};

export enum Service {
  FedexExpressSaver = 'FEDEX_EXPRESS_SAVER',
  FedexFirstOvernight = 'FEDEX_FIRST_OVERNIGHT',
  FedexGround = 'FEDEX_GROUND',
  FedexHomeDelivery = 'FEDEX_HOME_DELIVERY',
  FedexInternationalEconomy = 'FEDEX_INTERNATIONAL_ECONOMY',
  FedexInternationalGround = 'FEDEX_INTERNATIONAL_GROUND',
  FedexPriorityOvernight = 'FEDEX_PRIORITY_OVERNIGHT',
  FedexSmartPost = 'FEDEX_SMART_POST',
  FedexStandardOvernight = 'FEDEX_STANDARD_OVERNIGHT',
  FedexTwoDay = 'FEDEX_TWO_DAY',
  GenericGround = 'GENERIC_GROUND',
  GenericOvernight = 'GENERIC_OVERNIGHT',
  GenericTwoDay = 'GENERIC_TWO_DAY',
  LasershipGround = 'LASERSHIP_GROUND',
  UpsGround = 'UPS_GROUND',
  UpsNextDayAir = 'UPS_NEXT_DAY_AIR',
  UpsNextDayAirSaver = 'UPS_NEXT_DAY_AIR_SAVER',
  UpsSecondDayAir = 'UPS_SECOND_DAY_AIR',
  UpsSurePost = 'UPS_SURE_POST',
  UpsThreeDaySelect = 'UPS_THREE_DAY_SELECT',
  UpsWorldwideExpedited = 'UPS_WORLDWIDE_EXPEDITED',
  UpsWorldwideExpress = 'UPS_WORLDWIDE_EXPRESS',
  UpsWorldwideExpressPlus = 'UPS_WORLDWIDE_EXPRESS_PLUS',
  UspsFirstClassMail = 'USPS_FIRST_CLASS_MAIL',
  UspsParcelSelect = 'USPS_PARCEL_SELECT',
  UspsPriorityMail = 'USPS_PRIORITY_MAIL',
  UspsPriorityMailExpress = 'USPS_PRIORITY_MAIL_EXPRESS',
  UspsPriorityMailInternational = 'USPS_PRIORITY_MAIL_INTERNATIONAL'
}

export type ShipmentAddonEntity = {
  __typename?: 'ShipmentAddonEntity';
  /** Shipment addon's addon */
  addon?: Maybe<AddonEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment addon's name */
  name?: Maybe<Scalars['String']>;
  /** Shipment addon's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Shipment addon's shipment */
  shipment?: Maybe<ShipmentEntity>;
  /** Shipment addon's sku */
  sku?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ShipmentEntity = {
  __typename?: 'ShipmentEntity';
  /** Shipment's actual height */
  actualHeight?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's actual length */
  actualLength?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's actual weight */
  actualWeight?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's actual width */
  actualWidth?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's address validation source */
  addressValidationSource?: Maybe<AddressValidationSource>;
  /** Shipment's carrier */
  carrier?: Maybe<Carrier>;
  /** Shipment's carrier preference */
  carrierPreference?: Maybe<Carrier>;
  /** Shipment's city */
  city?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Shipment's company */
  company?: Maybe<Scalars['String']>;
  /** Shipment's content hash */
  contentsMd5?: Maybe<Scalars['String']>;
  /** Shipment's country */
  country?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Shipment's departing warehouse */
  departingWarehouse?: Maybe<WarehouseEntity>;
  /** Shipment's download start */
  downloadStart?: Maybe<Scalars['Instant']>;
  /** Shipment's email */
  email?: Maybe<Scalars['String']>;
  /** Shipment's estimated delivery date */
  estimatedDeliveryDate?: Maybe<Scalars['LocalDate']>;
  /** Shipment's estimated height */
  estimatedHeight?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's estimated length */
  estimatedLength?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's estimated ship date */
  estimatedShipDate?: Maybe<Scalars['LocalDate']>;
  /** Shipment's estimated weight */
  estimatedWeight?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's estimated width */
  estimatedWidth?: Maybe<Scalars['BigDecimal']>;
  /** Shipment's first name */
  firstName?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment's last name */
  lastName?: Maybe<Scalars['String']>;
  /** Shipment's line 1 */
  line1?: Maybe<Scalars['String']>;
  /** Shipment's line 2 */
  line2?: Maybe<Scalars['String']>;
  /** Shipment's options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Shipment's origin warehouse */
  originWarehouse?: Maybe<WarehouseEntity>;
  /** Shipment's packaging */
  packaging?: Maybe<Packaging>;
  /** Shipment's placed at time */
  placedAt?: Maybe<Scalars['Instant']>;
  /** Shipment's postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Shipment's printed end */
  printedEnd?: Maybe<Scalars['Instant']>;
  /** Shipment's printed start */
  printedStart?: Maybe<Scalars['Instant']>;
  /** Shipment's reprint status */
  reprint?: Maybe<Scalars['Boolean']>;
  /** Shipment's postage reseller */
  reseller?: Maybe<Reseller>;
  /** Shipment's residential flag */
  residential?: Maybe<Scalars['Boolean']>;
  /** Shipment's sales order */
  salesOrder?: Maybe<SalesOrderEntity>;
  /** Shipment's service */
  service?: Maybe<Service>;
  /** Shipment's addons */
  shipmentAddons?: Maybe<Array<Maybe<ShipmentAddonEntity>>>;
  /** Shipment's items */
  shipmentItems?: Maybe<Array<Maybe<ShipmentItemEntity>>>;
  /** Shipment's shipment number */
  shipmentNumber?: Maybe<Scalars['String']>;
  /** Shipment's status */
  shipmentStatus?: Maybe<ShipmentStatus>;
  /** Shipment's shipped at time */
  shippedAt?: Maybe<Scalars['Instant']>;
  /** Shipment's shipper */
  shippedBy?: Maybe<Scalars['String']>;
  /** Shipment's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Shipment's state */
  state?: Maybe<Scalars['String']>;
  /** Shipment's tracking number (deprecated) */
  trackingNo?: Maybe<Scalars['String']>;
  /** Shipment's tracking number */
  trackingNos?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Shipment's label ZPL content (deprecated) */
  zplContent?: Maybe<Scalars['String']>;
  /** Shipment's label ZPL contents */
  zplContents?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ShipmentItemEntity = {
  __typename?: 'ShipmentItemEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipment item's live arrival guarantee */
  liveArrivalGuaranteeState?: Maybe<LiveArrivalGuaranteeState>;
  /** Shipment item's quantity */
  quantity?: Maybe<Scalars['Long']>;
  /** Shipment item's sales order item */
  salesOrderItem?: Maybe<SalesOrderItemEntity>;
  /** Shipment item's shipment */
  shipment?: Maybe<ShipmentEntity>;
  /** Shipment item's simple product */
  simpleProduct?: Maybe<SimpleProductEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Shipment item's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
};

export enum ShipmentStatus {
  Cancelled = 'Cancelled',
  Delivered = 'Delivered',
  External = 'External',
  Labelled = 'Labelled',
  NeedsScheduling = 'NeedsScheduling',
  Pending = 'Pending',
  Shipped = 'Shipped',
  Unshipped = 'Unshipped'
}

export enum ShippingNeedsType {
  CourierDelivery = 'CourierDelivery',
  ItemNotShipped = 'ItemNotShipped',
  ScheduleWithCustomer = 'ScheduleWithCustomer',
  StoreShowPickupOnly = 'StoreShowPickupOnly'
}

export type ShippingRuleSetEntity = {
  __typename?: 'ShippingRuleSetEntity';
  /** Shipping rule set's addon destination requirements */
  addonSetDestinationRequirements?: Maybe<Array<Maybe<AddonSetDestinationRequirementEntity>>>;
  /** Shipping rule set's addon source requirements */
  addonSetSourceRequirements?: Maybe<Array<Maybe<AddonSetSourceRequirementEntity>>>;
  /** Shipping rule set's carrier restriction */
  carrierRestriction?: Maybe<CarrierRestrictionEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Shipping rule set's live destination restriction */
  destinationRestriction?: Maybe<DestinationRestrictionEntity>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule set's live arrival guarantees */
  liveArrivalGuarantees?: Maybe<Array<Maybe<LiveArrivalGuaranteeEntity>>>;
  /** Shipping rule set's name */
  name?: Maybe<Scalars['String']>;
  /** Shipping rule set's ships alone restriction */
  shipsAloneRestriction?: Maybe<ShipsAloneRestrictionEntity>;
  /** Shipping rule set's slug */
  slug?: Maybe<Scalars['String']>;
  /** Shipping rule set's transit time restriction */
  transitTimeRestriction?: Maybe<TransitTimeRestrictionEntity>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ShipsAloneRestrictionEntity = {
  __typename?: 'ShipsAloneRestrictionEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type ShowReport = {
  __typename?: 'ShowReport';
  /** Show report's city */
  city?: Maybe<Scalars['String']>;
  /** Show report's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Show report's end date */
  endDate?: Maybe<Scalars['LocalDate']>;
  /** Show report's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Show report's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Show report's line items */
  lineItems?: Maybe<Array<Maybe<LineItem>>>;
  /** Show report's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Show report's show name */
  showName?: Maybe<Scalars['String']>;
  /** Show report's start date */
  startDate?: Maybe<Scalars['LocalDate']>;
  /** Show report's state */
  state?: Maybe<Scalars['String']>;
  /** Show report's subtotal */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Show report's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
};

export type SimpleProductEntity = {
  __typename?: 'SimpleProductEntity';
  /** Product's active flag */
  active?: Maybe<Scalars['Boolean']>;
  /** Simple product's Amazon profile */
  amazonProfile?: Maybe<AmazonProfileEntity>;
  /** Product's average rating */
  averageRating?: Maybe<Scalars['Float']>;
  /** Simple product's bins */
  bins?: Maybe<Array<Maybe<BinEntity>>>;
  /** Simple product's brand */
  brand?: Maybe<BrandEntity>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Product's cost */
  cost?: Maybe<Scalars['BigDecimal']>;
  /** Product's number of ratings */
  countRating?: Maybe<Scalars['Long']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Product's explicit animals */
  explicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's explicit categories */
  explicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's explicit department */
  explicitDepartment?: Maybe<DepartmentEntity>;
  /** Product's explicit discounts */
  explicitDiscounts?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** Product's explicit promotions */
  explicitPromotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Product's featured status */
  featured?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Product's implicit animals */
  implicitAnimals?: Maybe<Array<Maybe<AnimalEntity>>>;
  /** Product's implicit categories */
  implicitCategories?: Maybe<Array<Maybe<CategoryEntity>>>;
  /** Product's implicit department */
  implicitDepartments?: Maybe<Array<Maybe<DepartmentEntity>>>;
  /** Product's implicit discounts */
  implicitDiscounts?: Maybe<Array<Maybe<DiscountEntity>>>;
  /** Product's implicit promotions */
  implicitPromotions?: Maybe<Array<Maybe<PromotionEntity>>>;
  /** Simple product's inventory quantity caches */
  inventoryQuantityCaches?: Maybe<Array<Maybe<InventoryQuantityCacheEntity>>>;
  /** Simple product's inventory stats caches */
  inventoryStatsCaches?: Maybe<Array<Maybe<InventoryStatsCacheEntity>>>;
  /** Product's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** Simple product's Magento vendor */
  magentoVendor?: Maybe<Vendor>;
  /** Simple product's MAP price */
  mapPrice?: Maybe<Scalars['BigDecimal']>;
  /** Product's medias */
  medias?: Maybe<Array<Maybe<MediaEntity>>>;
  /** Product's meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Product's meta keywords */
  metaKeywords?: Maybe<Scalars['String']>;
  /** Product's meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Simple product's not ships alone */
  notShipsAlone?: Maybe<Scalars['Boolean']>;
  /** Product's popularity */
  popularity?: Maybe<Scalars['BigDecimal']>;
  /** Product's price */
  price?: Maybe<Scalars['BigDecimal']>;
  /** Product's published revision */
  publishedRevision?: Maybe<ProductRevisionEntity>;
  /** Product's quantity available for sale */
  quantityAvailableForSale?: Maybe<Scalars['Long']>;
  /** Simple product's requires prep */
  requiresPrep?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['BigDecimal']>;
  /** Simple product's sales tax rules */
  salesTaxRules?: Maybe<SalesTaxRules>;
  /** Simple product's shipping needs */
  shippingNeeds?: Maybe<ShippingNeedsType>;
  /** Simple product's shipping restrictions */
  shippingRestrictions?: Maybe<Scalars['String']>;
  /** Simple product's shipping rule set */
  shippingRuleSet?: Maybe<ShippingRuleSetEntity>;
  /** Simple product's ships alone */
  shipsAlone?: Maybe<Scalars['Boolean']>;
  /** Product's SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product's slug */
  slug?: Maybe<Scalars['String']>;
  /** Product's special price */
  specialPrice?: Maybe<Scalars['BigDecimal']>;
  /** Simple product's supplier */
  supplier?: Maybe<SupplierEntity>;
  /** Product's title */
  title?: Maybe<Scalars['String']>;
  /** Product's UPC */
  upc?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Product's upsells */
  upsellProducts?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Product's variation key */
  variationKey?: Maybe<Scalars['String']>;
  /** Product's variation set */
  variationSet?: Maybe<VariationSetEntity>;
  /** Simple product's vendor reference */
  vendorRef?: Maybe<Scalars['String']>;
  /** Product's visible flag */
  visible?: Maybe<Scalars['Boolean']>;
  /** Simple product's warehouses */
  warehouses?: Maybe<Array<Maybe<WarehouseEntity>>>;
  /** Simple product's weight */
  weight?: Maybe<Scalars['BigDecimal']>;
  /** Product's wholesale price */
  wholesalePrice?: Maybe<Scalars['BigDecimal']>;
  /** Simple product's zones */
  zones?: Maybe<Array<Maybe<ZoneEntity>>>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum State {
  Aa = 'AA',
  Ae = 'AE',
  Ak = 'AK',
  Al = 'AL',
  Ap = 'AP',
  Ar = 'AR',
  As = 'AS',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  Dc = 'DC',
  De = 'DE',
  Fl = 'FL',
  Ga = 'GA',
  Gu = 'GU',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Pr = 'PR',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tx = 'TX',
  Um = 'UM',
  Ut = 'UT',
  Va = 'VA',
  Vi = 'VI',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY'
}

export type Stats = {
  __typename?: 'Stats';
  /** Stat's end date */
  endDate?: Maybe<Scalars['String']>;
  /** Stat's on-hold count */
  onHold?: Maybe<Scalars['Int']>;
  /** Stat's shipped late */
  shippedLate?: Maybe<Scalars['Int']>;
  /** Stat's shipped on-time */
  shippedOnTime?: Maybe<Scalars['Int']>;
  /** Stat's start date */
  startDate?: Maybe<Scalars['String']>;
  /** Stat's unshipped count */
  unshipped?: Maybe<Scalars['Int']>;
};

export type Summary = {
  __typename?: 'Summary';
  /** Summary's date */
  date?: Maybe<Scalars['String']>;
  /** Summary's on-hold count */
  onHold?: Maybe<Scalars['Int']>;
  /** Summary's shipped count */
  shipped?: Maybe<Scalars['Int']>;
  /** Summary's unshipped count */
  unshipped?: Maybe<Scalars['Int']>;
};

export type SupplierEntity = {
  __typename?: 'SupplierEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Supplier's name */
  name?: Maybe<Scalars['String']>;
  /** Supplier's simple products */
  products?: Maybe<Array<Maybe<SimpleProductEntity>>>;
  /** Supplier's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type TaxDetail = {
  __typename?: 'TaxDetail';
  /** Tax detail's rate */
  rate?: Maybe<Scalars['Float']>;
  /** Tax detail's shipping taxed */
  shippingTaxed?: Maybe<Scalars['Boolean']>;
  /** Tax detail's state */
  state?: Maybe<Scalars['String']>;
};

export type TeamEntity = {
  __typename?: 'TeamEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Team's name */
  name?: Maybe<Scalars['String']>;
  /** Team's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type TradeShowEntity = {
  __typename?: 'TradeShowEntity';
  /** Trade show's city name */
  city?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Trade show's ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Trade show's end date */
  endDate?: Maybe<Scalars['LocalDate']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Trade show's first line */
  line1?: Maybe<Scalars['String']>;
  /** Trade show's last line */
  line2?: Maybe<Scalars['String']>;
  /** Trade show's name */
  name?: Maybe<Scalars['String']>;
  posTerminals?: Maybe<Array<Maybe<PosTerminalEntity>>>;
  /** Trade show's postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Trade show's start date */
  startDate?: Maybe<Scalars['LocalDate']>;
  /** Trade show's state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Trade show's sales tax rate */
  taxRate?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type TransitTimeRestrictionEntity = {
  __typename?: 'TransitTimeRestrictionEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Shipping rule's slug */
  slug?: Maybe<Scalars['String']>;
  /** Transit time rule's transit time type */
  transitTimeType?: Maybe<TransitTimeType>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum TransitTimeType {
  GroundService = 'GroundService',
  OneDayService = 'OneDayService',
  ThreeDayService = 'ThreeDayService',
  TwoDayService = 'TwoDayService'
}



export type UserEntity = {
  __typename?: 'UserEntity';
  /** User's addresses */
  addresses?: Maybe<Array<Maybe<AddressEntity>>>;
  /** User is an admin */
  admin?: Maybe<Scalars['Boolean']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** User's email address */
  email?: Maybe<Scalars['String']>;
  /** User's email is confirmed */
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  /** User's first name */
  firstName?: Maybe<Scalars['String']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** User's last name */
  lastName?: Maybe<Scalars['String']>;
  /** User's Magento Id */
  magentoId?: Maybe<Scalars['String']>;
  /** User's roles */
  roles?: Maybe<Array<Maybe<RoleType>>>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** User's type */
  userType?: Maybe<UserType>;
};

export enum UserType {
  Employee = 'EMPLOYEE',
  Regular = 'REGULAR',
  Wholesale = 'WHOLESALE'
}

export type VariationSetEntity = {
  __typename?: 'VariationSetEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Variation set's products */
  products?: Maybe<Array<Maybe<ProductEntity>>>;
  /** Variation set's title */
  title?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export enum Vendor {
  Arachnid = 'Arachnid',
  CricketFarm = 'CricketFarm',
  DryGoods = 'DryGoods',
  FreeShipping = 'FreeShipping',
  Frogs = 'Frogs',
  GiftCards = 'GiftCards',
  LiveInsects = 'LiveInsects',
  MiceDirect = 'MiceDirect'
}

export type WalmartSalesOrderEntity = {
  __typename?: 'WalmartSalesOrderEntity';
  /** Order's alternate number */
  alternateOrderNumber?: Maybe<Scalars['String']>;
  /** Billing address' validation source */
  billingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Billing address' city name */
  billingCity?: Maybe<Scalars['String']>;
  /** Billing address' company */
  billingCompany?: Maybe<Scalars['String']>;
  /** Billing address' ISO country code */
  billingCountry?: Maybe<Scalars['String']>;
  /** Billing address' first name */
  billingFirstName?: Maybe<Scalars['String']>;
  /** Billing address' last name */
  billingLastName?: Maybe<Scalars['String']>;
  /** Billing address' first line */
  billingLine1?: Maybe<Scalars['String']>;
  /** Billing address' last line */
  billingLine2?: Maybe<Scalars['String']>;
  /** Billing address' postal code */
  billingPostalCode?: Maybe<Scalars['String']>;
  /** Billing address' state (or province) abbreviation */
  billingState?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Sales order's comments */
  comments?: Maybe<Array<Maybe<SalesOrderCommentsEntity>>>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Walmart customer number */
  customerOrderId?: Maybe<Scalars['String']>;
  /** Order's discount total */
  discountTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's email */
  email?: Maybe<Scalars['String']>;
  /** Order's fulfillment channel */
  fulfillmentChannelType?: Maybe<FulfillmentChannelType>;
  /** Order's grand total */
  grandTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's handling total */
  handlingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's hold status */
  hold?: Maybe<Scalars['Boolean']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Order's number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Sales order's payments */
  payments?: Maybe<Array<Maybe<PaymentEntity>>>;
  /** Order's phone */
  phone?: Maybe<Scalars['String']>;
  /** Order's placed time */
  placedTime?: Maybe<Scalars['Instant']>;
  /** Sales order's discounts */
  salesOrderDiscounts?: Maybe<Array<Maybe<SalesOrderDiscountEntity>>>;
  /** Sales order's item groups */
  salesOrderItemGroups?: Maybe<Array<Maybe<SalesOrderItemGroupEntity>>>;
  /** Sales order's items */
  salesOrderItems?: Maybe<Array<Maybe<SalesOrderItemEntity>>>;
  /** Order's type */
  salesOrderType?: Maybe<SalesOrderType>;
  /** Sales order's shipments */
  shipments?: Maybe<Array<Maybe<ShipmentEntity>>>;
  /** Shipping address' validation source */
  shippingAddressValidationSource?: Maybe<AddressValidationSource>;
  /** Shipping address' city name */
  shippingCity?: Maybe<Scalars['String']>;
  /** Shipping address' company */
  shippingCompany?: Maybe<Scalars['String']>;
  /** Shipping address' ISO country code */
  shippingCountry?: Maybe<Scalars['String']>;
  /** Shipping address' first name */
  shippingFirstName?: Maybe<Scalars['String']>;
  /** Shipping address' last name */
  shippingLastName?: Maybe<Scalars['String']>;
  /** Shipping address' first line */
  shippingLine1?: Maybe<Scalars['String']>;
  /** Shipping address' last line */
  shippingLine2?: Maybe<Scalars['String']>;
  /** Sales order's shipping method */
  shippingMethod?: Maybe<Scalars['String']>;
  /** Shipping address' postal code */
  shippingPostalCode?: Maybe<Scalars['String']>;
  /** Shipping address' residential status */
  shippingResidential?: Maybe<Scalars['Boolean']>;
  /** Shipping address' state (or province) abbreviation */
  shippingState?: Maybe<Scalars['String']>;
  /** Order's shipping total */
  shippingTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's status */
  status?: Maybe<SalesOrderStatus>;
  /** Order's sub total */
  subTotal?: Maybe<Scalars['BigDecimal']>;
  /** Order's tax code */
  taxCode?: Maybe<Scalars['String']>;
  /** Order's tax total */
  taxTotal?: Maybe<Scalars['BigDecimal']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
};

export type WarehouseEntity = {
  __typename?: 'WarehouseEntity';
  /** Warehouse's city name */
  city?: Maybe<Scalars['String']>;
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Warehouse' ISO country code */
  country?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Warehouse's latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Warehouse's first line */
  line1?: Maybe<Scalars['String']>;
  /** Warehouse's last line */
  line2?: Maybe<Scalars['String']>;
  /** Warehouse's longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Warehouse's name */
  name?: Maybe<Scalars['String']>;
  /** Warehouse's postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** Warehouse's state (or province) abbreviation */
  state?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Warehouse's type */
  warehouseType?: Maybe<WarehouseType>;
};

export enum WarehouseType {
  DropShipper = 'DropShipper',
  OverstockStorage = 'OverstockStorage',
  Production = 'Production',
  TradeshowFulfillment = 'TradeshowFulfillment',
  WebFulfillment = 'WebFulfillment'
}

export type Weather = {
  __typename?: 'Weather';
  /** Weather's date */
  date?: Maybe<Scalars['LocalDate']>;
  /** Weather's high */
  high?: Maybe<Scalars['Float']>;
  /** Weather's low */
  low?: Maybe<Scalars['Float']>;
};

export type WorkstationEntity = {
  __typename?: 'WorkstationEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Workstation's key */
  machineKey?: Maybe<Scalars['String']>;
  /** Workstation's name */
  name?: Maybe<Scalars['String']>;
  /** Workstation's printers */
  printers?: Maybe<Array<Maybe<PrinterEntity>>>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Workstation's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
};

export type ZoneEntity = {
  __typename?: 'ZoneEntity';
  /** Entity's class */
  cls?: Maybe<Scalars['String']>;
  /** Entity's creation timestamp */
  createdAt?: Maybe<Scalars['Instant']>;
  /** Entity's UUID */
  id?: Maybe<Scalars['UUID']>;
  /** Zone's name */
  name?: Maybe<Scalars['String']>;
  /** Zone's sequence */
  sequence?: Maybe<Scalars['Long']>;
  /** Zone's slug */
  slug?: Maybe<Scalars['String']>;
  /** Entity's modification timestamp */
  updatedAt?: Maybe<Scalars['Instant']>;
  /** Zone's warehouse */
  warehouse?: Maybe<WarehouseEntity>;
};

export type AutoprintAddPrinterMutationVariables = Exact<{
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
}>;


export type AutoprintAddPrinterMutation = (
  { __typename?: 'Mutation' }
  & { autoprintAddPrinter?: Maybe<(
    { __typename?: 'PrinterEntity' }
    & Pick<PrinterEntity, 'id' | 'name'>
  )> }
);

export type AutoprintCancelAcknowledgeForPrinterMutationVariables = Exact<{
  shipment: Scalars['UUID'];
}>;


export type AutoprintCancelAcknowledgeForPrinterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'autoprintCancelAcknowledgeForPrinter'>
);

export type AutoprintDownloadAcknowledgeForPrinterMutationVariables = Exact<{
  shipment: Scalars['UUID'];
}>;


export type AutoprintDownloadAcknowledgeForPrinterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'autoprintDownloadAcknowledgeForPrinter'>
);

export type AutoprintEnrollWorkstationMutationVariables = Exact<{
  warehouse: Scalars['String'];
  name: Scalars['String'];
  machineKey: Scalars['String'];
}>;


export type AutoprintEnrollWorkstationMutation = (
  { __typename?: 'Mutation' }
  & { autoprintEnrollWorkstation?: Maybe<(
    { __typename?: 'WorkstationEntity' }
    & Pick<WorkstationEntity, 'name' | 'machineKey'>
    & { warehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'name'>
    )> }
  )> }
);

export type AutoprintGetNextForPrinterMutationVariables = Exact<{
  machineKey: Scalars['String'];
  printerName: Scalars['String'];
}>;


export type AutoprintGetNextForPrinterMutation = (
  { __typename?: 'Mutation' }
  & { autoprintGetNextForPrinter?: Maybe<Array<Maybe<(
    { __typename?: 'PrintJob' }
    & Pick<PrintJob, 'name' | 'printer' | 'tray' | 'rotate' | 'dataBase64'>
  )>>> }
);

export type AutoprintListPrintersMutationVariables = Exact<{
  machineKey: Scalars['String'];
}>;


export type AutoprintListPrintersMutation = (
  { __typename?: 'Mutation' }
  & { autoprintListPrinters?: Maybe<Array<Maybe<(
    { __typename?: 'PrinterEntity' }
    & Pick<PrinterEntity, 'id' | 'name'>
  )>>> }
);

export type AutoprintPrintAcknowledgeForPrinterMutationVariables = Exact<{
  shipment: Scalars['UUID'];
}>;


export type AutoprintPrintAcknowledgeForPrinterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'autoprintPrintAcknowledgeForPrinter'>
);

export type AutoprintTestWorkstationMutationVariables = Exact<{
  machineKey: Scalars['String'];
}>;


export type AutoprintTestWorkstationMutation = (
  { __typename?: 'Mutation' }
  & { autoprintTestWorkstation?: Maybe<(
    { __typename?: 'WorkstationEntity' }
    & Pick<WorkstationEntity, 'name' | 'machineKey'>
    & { warehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'name'>
    )> }
  )> }
);

export type DepartmentListQueryVariables = Exact<{ [key: string]: never; }>;


export type DepartmentListQuery = (
  { __typename?: 'Query' }
  & { departmentList?: Maybe<(
    { __typename?: 'GraphQLPage_DepartmentEntity' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'DepartmentEntity' }
      & Pick<DepartmentEntity, 'id' | 'slug' | 'name' | 'routePath'>
      & { parent?: Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id'>
      )>, children?: Maybe<Array<Maybe<(
        { __typename?: 'DepartmentEntity' }
        & Pick<DepartmentEntity, 'id'>
      )>>> }
    )>>> }
  )> }
);

export type InventoryAddDetailsMutationVariables = Exact<{
  warehouse: Scalars['String'];
  id: Scalars['UUID'];
  quantity: Scalars['Long'];
}>;


export type InventoryAddDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventoryAddDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type InventoryGetDetailsMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
}>;


export type InventoryGetDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventoryGetDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type InventorySetDetailsMutationVariables = Exact<{
  warehouse: Scalars['String'];
  id: Scalars['UUID'];
  quantity: Scalars['Long'];
}>;


export type InventorySetDetailsMutation = (
  { __typename?: 'Mutation' }
  & { inventorySetDetails?: Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityOnShelf' | 'warehouseQuantityUnshipped' | 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'sku' | 'slug' | 'title'>
    )> }
  )> }
);

export type MakingStockStatusMutationVariables = Exact<{
  warehouse: Scalars['String'];
}>;


export type MakingStockStatusMutation = (
  { __typename?: 'Mutation' }
  & { makingStockStatus?: Maybe<Array<Maybe<(
    { __typename?: 'InventoryDetails' }
    & Pick<InventoryDetails, 'warehouseQuantityAvailable' | 'warehouseWeeklyConsumptionRate' | 'warehouseWeeklyConsumptionVariance' | 'warehouseRunOutDays85' | 'warehouseRunOutDays97'>
    & { product?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'title' | 'sku'>
      & { medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>> }
    )> }
  )>>> }
);

export type PreppedProductsAddPreparationMutationVariables = Exact<{
  warehouse: Scalars['String'];
  productId: Scalars['UUID'];
  quantity: Scalars['Long'];
}>;


export type PreppedProductsAddPreparationMutation = (
  { __typename?: 'Mutation' }
  & { preppedProductsAddPreparation?: Maybe<(
    { __typename?: 'PreparationSummary' }
    & Pick<PreparationSummary, 'quantityNeeded' | 'quantityOrdered' | 'quantityPrepped' | 'quantityShipped'>
    & { simpleProduct?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'title' | 'sku'>
      & { medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>> }
    )>, todaysPreparations?: Maybe<Array<Maybe<(
      { __typename?: 'PreparationEntity' }
      & Pick<PreparationEntity, 'createdAt' | 'shipDate' | 'id' | 'preparer' | 'quantity'>
    )>>> }
  )> }
);

export type PreppedProductsListQueryVariables = Exact<{
  department: Scalars['String'];
  warehouse: Scalars['String'];
}>;


export type PreppedProductsListQuery = (
  { __typename?: 'Query' }
  & { preppedProductsList?: Maybe<Array<Maybe<(
    { __typename?: 'PreparationSummary' }
    & Pick<PreparationSummary, 'quantityNeeded' | 'quantityOrdered' | 'quantityPrepped' | 'quantityShipped'>
    & { simpleProduct?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'title' | 'sku'>
      & { medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>> }
    )>, todaysPreparations?: Maybe<Array<Maybe<(
      { __typename?: 'PreparationEntity' }
      & Pick<PreparationEntity, 'createdAt' | 'shipDate' | 'id' | 'preparer' | 'quantity'>
    )>>> }
  )>>> }
);

export type PreppedProductsRemovePreparationMutationVariables = Exact<{
  warehouse: Scalars['String'];
  productId: Scalars['UUID'];
  preparationId: Scalars['UUID'];
}>;


export type PreppedProductsRemovePreparationMutation = (
  { __typename?: 'Mutation' }
  & { preppedProductsRemovePreparation?: Maybe<(
    { __typename?: 'PreparationSummary' }
    & Pick<PreparationSummary, 'quantityNeeded' | 'quantityOrdered' | 'quantityPrepped' | 'quantityShipped'>
    & { simpleProduct?: Maybe<(
      { __typename?: 'SimpleProductEntity' }
      & Pick<SimpleProductEntity, 'id' | 'title' | 'sku'>
      & { medias?: Maybe<Array<Maybe<(
        { __typename?: 'MediaEntity' }
        & Pick<MediaEntity, 'id' | 'mediaType' | 'url'>
      )>>> }
    )>, todaysPreparations?: Maybe<Array<Maybe<(
      { __typename?: 'PreparationEntity' }
      & Pick<PreparationEntity, 'createdAt' | 'shipDate' | 'id' | 'preparer' | 'quantity'>
    )>>> }
  )> }
);

export type ShipmentFilterQueryVariables = Exact<{
  shipmentNumber: Scalars['String'];
  pageable: GraphQlPageableInput;
}>;


export type ShipmentFilterQuery = (
  { __typename?: 'Query' }
  & { shipmentFilter?: Maybe<(
    { __typename?: 'GraphQLPage_ShipmentEntity' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentEntity' }
      & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'trackingNo'>
      & { salesOrder?: Maybe<(
        { __typename?: 'SalesOrderEntity' }
        & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
      )>, shipmentItems?: Maybe<Array<Maybe<(
        { __typename?: 'ShipmentItemEntity' }
        & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
        & { salesOrderItem?: Maybe<(
          { __typename?: 'SalesOrderItemEntity' }
          & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type ShipmentFindQueryVariables = Exact<{
  shipmentNumber: Scalars['String'];
}>;


export type ShipmentFindQuery = (
  { __typename?: 'Query' }
  & { shipmentFind?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'shippedBy' | 'trackingNos' | 'zplContents' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentInfoQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShipmentInfoQuery = (
  { __typename?: 'Query' }
  & { shipmentInfo?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'shippedBy' | 'trackingNos' | 'zplContents' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentLookupWeatherMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShipmentLookupWeatherMutation = (
  { __typename?: 'Mutation' }
  & { shipmentLookupWeather?: Maybe<Array<Maybe<(
    { __typename?: 'Weather' }
    & Pick<Weather, 'date' | 'high' | 'low'>
  )>>> }
);

export type ShipmentRateMultiPieceMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
  packaging?: Maybe<Packaging>;
  packages: Array<Maybe<PackageSizeInput>> | Maybe<PackageSizeInput>;
}>;


export type ShipmentRateMultiPieceMutation = (
  { __typename?: 'Mutation' }
  & { shipmentRateMultiPiece?: Maybe<Array<Maybe<(
    { __typename?: 'RateQuote' }
    & Pick<RateQuote, 'domesticServiceType' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'cost' | 'shipDate' | 'deliveryDate' | 'fitness'>
  )>>> }
);

export type ShipmentSearchQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type ShipmentSearchQuery = (
  { __typename?: 'Query' }
  & { shipmentSearch?: Maybe<Array<Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'printedStart' | 'printedEnd' | 'shippedAt' | 'trackingNo' | 'firstName' | 'lastName'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber'>
    )>, originWarehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>, departingWarehouse?: Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>> }
  )>>> }
);

export type ShipmentShipMultiPieceMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
  reseller: Reseller;
  carrier: Carrier;
  service: Service;
  packaging: Packaging;
  options: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  packages: Array<Maybe<PackageSizeInput>> | Maybe<PackageSizeInput>;
}>;


export type ShipmentShipMultiPieceMutation = (
  { __typename?: 'Mutation' }
  & { shipmentShipMultiPiece?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'shippedBy' | 'trackingNos' | 'zplContents' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentUpdateAddressMutationVariables = Exact<{
  id: Scalars['UUID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  line1: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  postalCode: Scalars['String'];
  country: Scalars['String'];
  residential: Scalars['Boolean'];
}>;


export type ShipmentUpdateAddressMutation = (
  { __typename?: 'Mutation' }
  & { shipmentUpdateAddress?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentValidateAddressMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShipmentValidateAddressMutation = (
  { __typename?: 'Mutation' }
  & { shipmentValidateAddress?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type ShipmentVoidMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ShipmentVoidMutation = (
  { __typename?: 'Mutation' }
  & { shipmentVoid?: Maybe<(
    { __typename?: 'ShipmentEntity' }
    & Pick<ShipmentEntity, 'id' | 'cls' | 'shipmentNumber' | 'shipmentStatus' | 'shippingNeeds' | 'reseller' | 'carrier' | 'service' | 'packaging' | 'options' | 'estimatedWeight' | 'actualWeight' | 'estimatedLength' | 'estimatedWidth' | 'estimatedHeight' | 'actualLength' | 'actualWidth' | 'actualHeight' | 'placedAt' | 'estimatedShipDate' | 'estimatedDeliveryDate' | 'shippedAt' | 'shippedBy' | 'trackingNos' | 'zplContents' | 'firstName' | 'lastName' | 'company' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'residential' | 'addressValidationSource'>
    & { salesOrder?: Maybe<(
      { __typename?: 'SalesOrderEntity' }
      & Pick<SalesOrderEntity, 'id' | 'cls' | 'orderNumber' | 'alternateOrderNumber' | 'placedTime' | 'email' | 'status'>
    )>, shipmentItems?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentItemEntity' }
      & Pick<ShipmentItemEntity, 'id' | 'cls' | 'quantity'>
      & { salesOrderItem?: Maybe<(
        { __typename?: 'SalesOrderItemEntity' }
        & Pick<SalesOrderItemEntity, 'id' | 'cls' | 'sku' | 'name'>
      )> }
    )>>>, shipmentAddons?: Maybe<Array<Maybe<(
      { __typename?: 'ShipmentAddonEntity' }
      & Pick<ShipmentAddonEntity, 'id' | 'cls' | 'quantity' | 'sku' | 'name'>
    )>>> }
  )> }
);

export type SimpleProductClearBinMutationVariables = Exact<{
  id: Scalars['UUID'];
  warehouse: Scalars['String'];
}>;


export type SimpleProductClearBinMutation = (
  { __typename?: 'Mutation' }
  & { simpleProductClearBin?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
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
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
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
  department?: Maybe<Scalars['String']>;
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
      )>>>, shippingRuleSet?: Maybe<(
        { __typename?: 'ShippingRuleSetEntity' }
        & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
      )> }
    )>>> }
  )> }
);

export type SimpleProductFindByBinQueryVariables = Exact<{
  warehouse: Scalars['String'];
  binId: Scalars['String'];
}>;


export type SimpleProductFindByBinQuery = (
  { __typename?: 'Query' }
  & { simpleProductFindByBin?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
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
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
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
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
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
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
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
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
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
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
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
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
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
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type SimpleProductSetBinMutationVariables = Exact<{
  id: Scalars['UUID'];
  bin: Scalars['String'];
  warehouse: Scalars['String'];
}>;


export type SimpleProductSetBinMutation = (
  { __typename?: 'Mutation' }
  & { simpleProductSetBin?: Maybe<(
    { __typename?: 'SimpleProductEntity' }
    & Pick<SimpleProductEntity, 'id' | 'slug' | 'sku' | 'upc' | 'title' | 'active' | 'price' | 'cost' | 'weight' | 'shippingNeeds' | 'shippingRestrictions'>
    & { warehouses?: Maybe<Array<Maybe<(
      { __typename?: 'WarehouseEntity' }
      & Pick<WarehouseEntity, 'id' | 'name'>
    )>>>, bins?: Maybe<Array<Maybe<(
      { __typename?: 'BinEntity' }
      & Pick<BinEntity, 'id' | 'binId'>
      & { zone?: Maybe<(
        { __typename?: 'ZoneEntity' }
        & Pick<ZoneEntity, 'id'>
        & { warehouse?: Maybe<(
          { __typename?: 'WarehouseEntity' }
          & Pick<WarehouseEntity, 'id' | 'name'>
        )> }
      )> }
    )>>>, inventoryQuantityCaches?: Maybe<Array<Maybe<(
      { __typename?: 'InventoryQuantityCacheEntity' }
      & Pick<InventoryQuantityCacheEntity, 'id' | 'quantityAvailableForSale'>
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
    )>>>, shippingRuleSet?: Maybe<(
      { __typename?: 'ShippingRuleSetEntity' }
      & Pick<ShippingRuleSetEntity, 'id' | 'slug' | 'name'>
    )> }
  )> }
);

export type UserSelfQueryVariables = Exact<{ [key: string]: never; }>;


export type UserSelfQuery = (
  { __typename?: 'Query' }
  & { userSelf?: Maybe<(
    { __typename?: 'UserEntity' }
    & Pick<UserEntity, 'email' | 'firstName' | 'lastName' | 'admin' | 'emailConfirmed'>
  )> }
);

export type WarehouseListQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehouseListQuery = (
  { __typename?: 'Query' }
  & { warehouseList?: Maybe<Array<Maybe<(
    { __typename?: 'WarehouseEntity' }
    & Pick<WarehouseEntity, 'id' | 'name' | 'line1' | 'line2' | 'city' | 'state' | 'postalCode' | 'country' | 'latitude' | 'longitude'>
  )>>> }
);

export const AutoprintAddPrinterDocument = gql`
    mutation autoprintAddPrinter($machineKey: String!, $printerName: String!) {
  autoprintAddPrinter(machineKey: $machineKey, printerName: $printerName) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintAddPrinterGQL extends Apollo.Mutation<AutoprintAddPrinterMutation, AutoprintAddPrinterMutationVariables> {
    document = AutoprintAddPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintCancelAcknowledgeForPrinterDocument = gql`
    mutation autoprintCancelAcknowledgeForPrinter($shipment: UUID!) {
  autoprintCancelAcknowledgeForPrinter(shipment: $shipment)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintCancelAcknowledgeForPrinterGQL extends Apollo.Mutation<AutoprintCancelAcknowledgeForPrinterMutation, AutoprintCancelAcknowledgeForPrinterMutationVariables> {
    document = AutoprintCancelAcknowledgeForPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintDownloadAcknowledgeForPrinterDocument = gql`
    mutation autoprintDownloadAcknowledgeForPrinter($shipment: UUID!) {
  autoprintDownloadAcknowledgeForPrinter(shipment: $shipment)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintDownloadAcknowledgeForPrinterGQL extends Apollo.Mutation<AutoprintDownloadAcknowledgeForPrinterMutation, AutoprintDownloadAcknowledgeForPrinterMutationVariables> {
    document = AutoprintDownloadAcknowledgeForPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintEnrollWorkstationDocument = gql`
    mutation autoprintEnrollWorkstation($warehouse: String!, $name: String!, $machineKey: String!) {
  autoprintEnrollWorkstation(
    warehouse: $warehouse
    name: $name
    machineKey: $machineKey
  ) {
    name
    machineKey
    warehouse {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintEnrollWorkstationGQL extends Apollo.Mutation<AutoprintEnrollWorkstationMutation, AutoprintEnrollWorkstationMutationVariables> {
    document = AutoprintEnrollWorkstationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintGetNextForPrinterDocument = gql`
    mutation autoprintGetNextForPrinter($machineKey: String!, $printerName: String!) {
  autoprintGetNextForPrinter(machineKey: $machineKey, printerName: $printerName) {
    name
    printer
    tray
    rotate
    dataBase64
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintGetNextForPrinterGQL extends Apollo.Mutation<AutoprintGetNextForPrinterMutation, AutoprintGetNextForPrinterMutationVariables> {
    document = AutoprintGetNextForPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintListPrintersDocument = gql`
    mutation autoprintListPrinters($machineKey: String!) {
  autoprintListPrinters(machineKey: $machineKey) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintListPrintersGQL extends Apollo.Mutation<AutoprintListPrintersMutation, AutoprintListPrintersMutationVariables> {
    document = AutoprintListPrintersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintPrintAcknowledgeForPrinterDocument = gql`
    mutation autoprintPrintAcknowledgeForPrinter($shipment: UUID!) {
  autoprintPrintAcknowledgeForPrinter(shipment: $shipment)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintPrintAcknowledgeForPrinterGQL extends Apollo.Mutation<AutoprintPrintAcknowledgeForPrinterMutation, AutoprintPrintAcknowledgeForPrinterMutationVariables> {
    document = AutoprintPrintAcknowledgeForPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AutoprintTestWorkstationDocument = gql`
    mutation autoprintTestWorkstation($machineKey: String!) {
  autoprintTestWorkstation(machineKey: $machineKey) {
    name
    machineKey
    warehouse {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AutoprintTestWorkstationGQL extends Apollo.Mutation<AutoprintTestWorkstationMutation, AutoprintTestWorkstationMutationVariables> {
    document = AutoprintTestWorkstationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DepartmentListDocument = gql`
    query departmentList {
  departmentList(page: {page: 1, pageSize: 1000}) {
    data {
      id
      slug
      name
      routePath
      parent {
        id
      }
      children {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DepartmentListGQL extends Apollo.Query<DepartmentListQuery, DepartmentListQueryVariables> {
    document = DepartmentListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InventoryAddDetailsDocument = gql`
    mutation inventoryAddDetails($warehouse: String!, $id: UUID!, $quantity: Long!) {
  inventoryAddDetails(warehouse: $warehouse, id: $id, quantity: $quantity) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryAddDetailsGQL extends Apollo.Mutation<InventoryAddDetailsMutation, InventoryAddDetailsMutationVariables> {
    document = InventoryAddDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InventoryGetDetailsDocument = gql`
    mutation inventoryGetDetails($id: UUID!, $warehouse: String!) {
  inventoryGetDetails(warehouse: $warehouse, id: $id) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryGetDetailsGQL extends Apollo.Mutation<InventoryGetDetailsMutation, InventoryGetDetailsMutationVariables> {
    document = InventoryGetDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InventorySetDetailsDocument = gql`
    mutation inventorySetDetails($warehouse: String!, $id: UUID!, $quantity: Long!) {
  inventorySetDetails(warehouse: $warehouse, id: $id, quantity: $quantity) {
    product {
      id
      sku
      slug
      title
    }
    warehouseQuantityOnShelf
    warehouseQuantityUnshipped
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventorySetDetailsGQL extends Apollo.Mutation<InventorySetDetailsMutation, InventorySetDetailsMutationVariables> {
    document = InventorySetDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MakingStockStatusDocument = gql`
    mutation makingStockStatus($warehouse: String!) {
  makingStockStatus(warehouse: $warehouse) {
    product {
      id
      title
      sku
      medias {
        id
        mediaType
        url
      }
    }
    warehouseQuantityAvailable
    warehouseWeeklyConsumptionRate
    warehouseWeeklyConsumptionVariance
    warehouseRunOutDays85
    warehouseRunOutDays97
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MakingStockStatusGQL extends Apollo.Mutation<MakingStockStatusMutation, MakingStockStatusMutationVariables> {
    document = MakingStockStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PreppedProductsAddPreparationDocument = gql`
    mutation preppedProductsAddPreparation($warehouse: String!, $productId: UUID!, $quantity: Long!) {
  preppedProductsAddPreparation(
    warehouse: $warehouse
    productId: $productId
    quantity: $quantity
  ) {
    quantityNeeded
    quantityOrdered
    quantityPrepped
    quantityShipped
    simpleProduct {
      id
      title
      sku
      medias {
        id
        mediaType
        url
      }
    }
    todaysPreparations {
      createdAt
      shipDate
      id
      preparer
      quantity
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PreppedProductsAddPreparationGQL extends Apollo.Mutation<PreppedProductsAddPreparationMutation, PreppedProductsAddPreparationMutationVariables> {
    document = PreppedProductsAddPreparationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PreppedProductsListDocument = gql`
    query preppedProductsList($department: String!, $warehouse: String!) {
  preppedProductsList(warehouse: $warehouse, department: $department) {
    quantityNeeded
    quantityOrdered
    quantityPrepped
    quantityShipped
    simpleProduct {
      id
      title
      sku
      medias {
        id
        mediaType
        url
      }
    }
    todaysPreparations {
      createdAt
      shipDate
      id
      preparer
      quantity
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PreppedProductsListGQL extends Apollo.Query<PreppedProductsListQuery, PreppedProductsListQueryVariables> {
    document = PreppedProductsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PreppedProductsRemovePreparationDocument = gql`
    mutation preppedProductsRemovePreparation($warehouse: String!, $productId: UUID!, $preparationId: UUID!) {
  preppedProductsRemovePreparation(
    warehouse: $warehouse
    productId: $productId
    preparationId: $preparationId
  ) {
    quantityNeeded
    quantityOrdered
    quantityPrepped
    quantityShipped
    simpleProduct {
      id
      title
      sku
      medias {
        id
        mediaType
        url
      }
    }
    todaysPreparations {
      createdAt
      shipDate
      id
      preparer
      quantity
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PreppedProductsRemovePreparationGQL extends Apollo.Mutation<PreppedProductsRemovePreparationMutation, PreppedProductsRemovePreparationMutationVariables> {
    document = PreppedProductsRemovePreparationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentFilterDocument = gql`
    query shipmentFilter($shipmentNumber: String!, $pageable: GraphQLPageableInput!) {
  shipmentFilter(shipmentNumber: {pattern: $shipmentNumber}, page: $pageable) {
    data {
      id
      cls
      shipmentNumber
      shipmentStatus
      shippingNeeds
      reseller
      carrier
      service
      packaging
      options
      estimatedWeight
      actualWeight
      estimatedLength
      estimatedWidth
      estimatedHeight
      actualLength
      actualWidth
      actualHeight
      estimatedShipDate
      estimatedDeliveryDate
      shippedAt
      trackingNo
      salesOrder {
        id
        cls
        orderNumber
        alternateOrderNumber
        placedTime
        email
        status
      }
      shipmentItems {
        id
        cls
        quantity
        salesOrderItem {
          id
          cls
          sku
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentFilterGQL extends Apollo.Query<ShipmentFilterQuery, ShipmentFilterQueryVariables> {
    document = ShipmentFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentFindDocument = gql`
    query shipmentFind($shipmentNumber: String!) {
  shipmentFind(shipmentNumber: $shipmentNumber) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    shippedBy
    trackingNos
    zplContents
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentFindGQL extends Apollo.Query<ShipmentFindQuery, ShipmentFindQueryVariables> {
    document = ShipmentFindDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentInfoDocument = gql`
    query shipmentInfo($id: UUID!) {
  shipmentInfo(id: $id) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    shippedBy
    trackingNos
    zplContents
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentInfoGQL extends Apollo.Query<ShipmentInfoQuery, ShipmentInfoQueryVariables> {
    document = ShipmentInfoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentLookupWeatherDocument = gql`
    mutation shipmentLookupWeather($id: UUID!) {
  shipmentLookupWeather(id: $id) {
    date
    high
    low
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentLookupWeatherGQL extends Apollo.Mutation<ShipmentLookupWeatherMutation, ShipmentLookupWeatherMutationVariables> {
    document = ShipmentLookupWeatherDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentRateMultiPieceDocument = gql`
    mutation shipmentRateMultiPiece($id: UUID!, $warehouse: String!, $packaging: Packaging, $packages: [PackageSizeInput]!) {
  shipmentRateMultiPiece(
    id: $id
    warehouse: $warehouse
    packaging: $packaging
    packages: $packages
  ) {
    domesticServiceType
    reseller
    carrier
    service
    packaging
    options
    cost
    shipDate
    deliveryDate
    fitness
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentRateMultiPieceGQL extends Apollo.Mutation<ShipmentRateMultiPieceMutation, ShipmentRateMultiPieceMutationVariables> {
    document = ShipmentRateMultiPieceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentSearchDocument = gql`
    query shipmentSearch($query: String!) {
  shipmentSearch(query: $query) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    estimatedShipDate
    estimatedDeliveryDate
    printedStart
    printedEnd
    shippedAt
    trackingNo
    firstName
    lastName
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
    }
    originWarehouse {
      id
      name
    }
    departingWarehouse {
      id
      name
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentSearchGQL extends Apollo.Query<ShipmentSearchQuery, ShipmentSearchQueryVariables> {
    document = ShipmentSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentShipMultiPieceDocument = gql`
    mutation shipmentShipMultiPiece($id: UUID!, $warehouse: String!, $reseller: Reseller!, $carrier: Carrier!, $service: Service!, $packaging: Packaging!, $options: [String]!, $packages: [PackageSizeInput]!) {
  shipmentShipMultiPiece(
    id: $id
    warehouse: $warehouse
    reseller: $reseller
    carrier: $carrier
    service: $service
    packaging: $packaging
    options: $options
    packages: $packages
  ) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    shippedBy
    trackingNos
    zplContents
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentShipMultiPieceGQL extends Apollo.Mutation<ShipmentShipMultiPieceMutation, ShipmentShipMultiPieceMutationVariables> {
    document = ShipmentShipMultiPieceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentUpdateAddressDocument = gql`
    mutation shipmentUpdateAddress($id: UUID!, $firstName: String!, $lastName: String!, $company: String, $line1: String!, $line2: String, $city: String!, $state: String!, $postalCode: String!, $country: String!, $residential: Boolean!) {
  shipmentUpdateAddress(
    id: $id
    firstName: $firstName
    lastName: $lastName
    company: $company
    line1: $line1
    line2: $line2
    city: $city
    state: $state
    postalCode: $postalCode
    country: $country
    residential: $residential
  ) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentUpdateAddressGQL extends Apollo.Mutation<ShipmentUpdateAddressMutation, ShipmentUpdateAddressMutationVariables> {
    document = ShipmentUpdateAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentValidateAddressDocument = gql`
    mutation shipmentValidateAddress($id: UUID!) {
  shipmentValidateAddress(id: $id) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentValidateAddressGQL extends Apollo.Mutation<ShipmentValidateAddressMutation, ShipmentValidateAddressMutationVariables> {
    document = ShipmentValidateAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ShipmentVoidDocument = gql`
    mutation shipmentVoid($id: UUID!) {
  shipmentVoid(id: $id) {
    id
    cls
    shipmentNumber
    shipmentStatus
    shippingNeeds
    reseller
    carrier
    service
    packaging
    options
    estimatedWeight
    actualWeight
    estimatedLength
    estimatedWidth
    estimatedHeight
    actualLength
    actualWidth
    actualHeight
    placedAt
    estimatedShipDate
    estimatedDeliveryDate
    shippedAt
    shippedBy
    trackingNos
    zplContents
    firstName
    lastName
    company
    line1
    line2
    city
    state
    postalCode
    country
    residential
    addressValidationSource
    salesOrder {
      id
      cls
      orderNumber
      alternateOrderNumber
      placedTime
      email
      status
    }
    shipmentItems {
      id
      cls
      quantity
      salesOrderItem {
        id
        cls
        sku
        name
      }
    }
    shipmentAddons {
      id
      cls
      quantity
      sku
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentVoidGQL extends Apollo.Mutation<ShipmentVoidMutation, ShipmentVoidMutationVariables> {
    document = ShipmentVoidDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductClearBinDocument = gql`
    mutation simpleProductClearBin($id: UUID!, $warehouse: String!) {
  simpleProductClearBin(id: $id, warehouse: $warehouse) {
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
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
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
    shippingRuleSet {
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
  export class SimpleProductClearBinGQL extends Apollo.Mutation<SimpleProductClearBinMutation, SimpleProductClearBinMutationVariables> {
    document = SimpleProductClearBinDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductFilterDocument = gql`
    query simpleProductFilter($pageable: GraphQLPageableInput!, $title: String, $sku: String, $active: Boolean, $brand: String, $supplier: String, $department: String, $category: String) {
  simpleProductFilter(
    title: {pattern: $title}
    sku: {pattern: $sku}
    active: {value: $active}
    brand: $brand
    supplier: $supplier
    department: $department
    category: $category
    page: $pageable
    sort: {field: "sku", direction: ASC}
  ) {
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
      shippingRuleSet {
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductFindByBinDocument = gql`
    query simpleProductFindByBin($warehouse: String!, $binId: String!) {
  simpleProductFindByBin(warehouse: $warehouse, binId: $binId) {
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
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
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
    shippingRuleSet {
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
  export class SimpleProductFindByBinGQL extends Apollo.Query<SimpleProductFindByBinQuery, SimpleProductFindByBinQueryVariables> {
    document = SimpleProductFindByBinDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
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
    shippingRuleSet {
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
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
    shippingRuleSet {
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
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
    shippingRuleSet {
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SimpleProductSetBinDocument = gql`
    mutation simpleProductSetBin($id: UUID!, $bin: String!, $warehouse: String!) {
  simpleProductSetBin(id: $id, bin: $bin, warehouse: $warehouse) {
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
      zone {
        id
        warehouse {
          id
          name
        }
      }
    }
    inventoryQuantityCaches {
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
    shippingRuleSet {
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
  export class SimpleProductSetBinGQL extends Apollo.Mutation<SimpleProductSetBinMutation, SimpleProductSetBinMutationVariables> {
    document = SimpleProductSetBinDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserSelfDocument = gql`
    query userSelf {
  userSelf {
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
  export class UserSelfGQL extends Apollo.Query<UserSelfQuery, UserSelfQueryVariables> {
    document = UserSelfDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WarehouseListDocument = gql`
    query warehouseList {
  warehouseList {
    id
    name
    line1
    line2
    city
    state
    postalCode
    country
    latitude
    longitude
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WarehouseListGQL extends Apollo.Query<WarehouseListQuery, WarehouseListQueryVariables> {
    document = WarehouseListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }