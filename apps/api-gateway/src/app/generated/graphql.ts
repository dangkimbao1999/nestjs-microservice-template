import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
};

export type AddressLastLog = {
  __typename?: 'AddressLastLog';
  id: Scalars['ID']['output'];
  lastLog?: Maybe<Scalars['String']['output']>;
};

export type AddressLastLog_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddressLastLog_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastLog?: InputMaybe<Scalars['String']['input']>;
  lastLog_contains?: InputMaybe<Scalars['String']['input']>;
  lastLog_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastLog_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastLog_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastLog_gt?: InputMaybe<Scalars['String']['input']>;
  lastLog_gte?: InputMaybe<Scalars['String']['input']>;
  lastLog_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastLog_lt?: InputMaybe<Scalars['String']['input']>;
  lastLog_lte?: InputMaybe<Scalars['String']['input']>;
  lastLog_not?: InputMaybe<Scalars['String']['input']>;
  lastLog_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastLog_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastLog_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastLog_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastLog_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastLog_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastLog_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastLog_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastLog_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AddressLastLog_Filter>>>;
};

export enum AddressLastLog_OrderBy {
  Id = 'id',
  LastLog = 'lastLog'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type GachaEntity = {
  __typename?: 'GachaEntity';
  gachaTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  roller: NftItemOwner;
};

export type GachaEntity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GachaEntity_Filter>>>;
  gachaTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  gachaTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gachaTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gachaTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gachaTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gachaTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gachaTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  gachaTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GachaEntity_Filter>>>;
  roller?: InputMaybe<Scalars['String']['input']>;
  roller_?: InputMaybe<NftItemOwner_Filter>;
  roller_contains?: InputMaybe<Scalars['String']['input']>;
  roller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roller_ends_with?: InputMaybe<Scalars['String']['input']>;
  roller_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roller_gt?: InputMaybe<Scalars['String']['input']>;
  roller_gte?: InputMaybe<Scalars['String']['input']>;
  roller_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roller_lt?: InputMaybe<Scalars['String']['input']>;
  roller_lte?: InputMaybe<Scalars['String']['input']>;
  roller_not?: InputMaybe<Scalars['String']['input']>;
  roller_not_contains?: InputMaybe<Scalars['String']['input']>;
  roller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  roller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  roller_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roller_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  roller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  roller_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  roller_starts_with?: InputMaybe<Scalars['String']['input']>;
  roller_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum GachaEntity_OrderBy {
  GachaTimestamp = 'gachaTimestamp',
  Id = 'id',
  Roller = 'roller',
  RollerId = 'roller__id'
}

export type MarketEvent721 = {
  __typename?: 'MarketEvent721';
  address: Scalars['String']['output'];
  event: SellStatus;
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  itemEquipment?: Maybe<NftEquipment>;
  itemPVP?: Maybe<Nftpvp>;
  itemUpgrade?: Maybe<NftUpgrade>;
  metadata?: Maybe<Scalars['String']['output']>;
  netPrice?: Maybe<Scalars['BigInt']['output']>;
  price?: Maybe<Scalars['BigInt']['output']>;
  quoteToken?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['BigInt']['output'];
  to?: Maybe<Scalars['String']['output']>;
  txHash: Scalars['String']['output'];
};

export type MarketEvent721_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<MarketEvent721_Filter>>>;
  event?: InputMaybe<SellStatus>;
  event_in?: InputMaybe<Array<SellStatus>>;
  event_not?: InputMaybe<SellStatus>;
  event_not_in?: InputMaybe<Array<SellStatus>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  itemEquipment?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_?: InputMaybe<NftEquipment_Filter>;
  itemEquipment_contains?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_gt?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_gte?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemEquipment_lt?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_lte?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemEquipment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP?: InputMaybe<Scalars['String']['input']>;
  itemPVP_?: InputMaybe<Nftpvp_Filter>;
  itemPVP_contains?: InputMaybe<Scalars['String']['input']>;
  itemPVP_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemPVP_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_gt?: InputMaybe<Scalars['String']['input']>;
  itemPVP_gte?: InputMaybe<Scalars['String']['input']>;
  itemPVP_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemPVP_lt?: InputMaybe<Scalars['String']['input']>;
  itemPVP_lte?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemPVP_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemPVP_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_?: InputMaybe<NftUpgrade_Filter>;
  itemUpgrade_contains?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_gt?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_gte?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemUpgrade_lt?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_lte?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemUpgrade_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  netPrice?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketEvent721_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteToken?: InputMaybe<Scalars['String']['input']>;
  quoteToken_contains?: InputMaybe<Scalars['String']['input']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_gt?: InputMaybe<Scalars['String']['input']>;
  quoteToken_gte?: InputMaybe<Scalars['String']['input']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteToken_lt?: InputMaybe<Scalars['String']['input']>;
  quoteToken_lte?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MarketEvent721_OrderBy {
  Address = 'address',
  Event = 'event',
  From = 'from',
  Id = 'id',
  ItemEquipment = 'itemEquipment',
  ItemEquipmentClassCp = 'itemEquipment__classCP',
  ItemEquipmentEquipmentClass = 'itemEquipment__equipmentClass',
  ItemEquipmentId = 'itemEquipment__id',
  ItemEquipmentRarity = 'itemEquipment__rarity',
  ItemEquipmentRarityCp = 'itemEquipment__rarityCP',
  ItemEquipmentType = 'itemEquipment__type',
  ItemEquipmentUri = 'itemEquipment__uri',
  ItemPvp = 'itemPVP',
  ItemPvpId = 'itemPVP__id',
  ItemPvpType = 'itemPVP__type',
  ItemPvpUri = 'itemPVP__uri',
  ItemUpgrade = 'itemUpgrade',
  ItemUpgradeId = 'itemUpgrade__id',
  ItemUpgradeType = 'itemUpgrade__type',
  ItemUpgradeUri = 'itemUpgrade__uri',
  Metadata = 'metadata',
  NetPrice = 'netPrice',
  Price = 'price',
  QuoteToken = 'quoteToken',
  Timestamp = 'timestamp',
  To = 'to',
  TxHash = 'txHash'
}

export type MiningPowerLog = {
  __typename?: 'MiningPowerLog';
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  totalMiningPower: Scalars['BigInt']['output'];
  user: NftItemOwner;
};

export type MiningPowerLog_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MiningPowerLog_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MiningPowerLog_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMiningPower?: InputMaybe<Scalars['BigInt']['input']>;
  totalMiningPower_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMiningPower_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMiningPower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMiningPower_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMiningPower_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMiningPower_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalMiningPower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<NftItemOwner_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MiningPowerLog_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  TotalMiningPower = 'totalMiningPower',
  User = 'user',
  UserId = 'user__id'
}

export type NftEquipment = {
  __typename?: 'NFTEquipment';
  classCP: Scalars['BigInt']['output'];
  equipmentClass: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  rarity: Scalars['Int']['output'];
  rarityCP: Scalars['BigInt']['output'];
  type: Scalars['Int']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type NftEquipment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NftEquipment_Filter>>>;
  classCP?: InputMaybe<Scalars['BigInt']['input']>;
  classCP_gt?: InputMaybe<Scalars['BigInt']['input']>;
  classCP_gte?: InputMaybe<Scalars['BigInt']['input']>;
  classCP_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  classCP_lt?: InputMaybe<Scalars['BigInt']['input']>;
  classCP_lte?: InputMaybe<Scalars['BigInt']['input']>;
  classCP_not?: InputMaybe<Scalars['BigInt']['input']>;
  classCP_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  equipmentClass?: InputMaybe<Scalars['Int']['input']>;
  equipmentClass_gt?: InputMaybe<Scalars['Int']['input']>;
  equipmentClass_gte?: InputMaybe<Scalars['Int']['input']>;
  equipmentClass_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  equipmentClass_lt?: InputMaybe<Scalars['Int']['input']>;
  equipmentClass_lte?: InputMaybe<Scalars['Int']['input']>;
  equipmentClass_not?: InputMaybe<Scalars['Int']['input']>;
  equipmentClass_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NftEquipment_Filter>>>;
  rarity?: InputMaybe<Scalars['Int']['input']>;
  rarityCP?: InputMaybe<Scalars['BigInt']['input']>;
  rarityCP_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rarityCP_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rarityCP_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rarityCP_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rarityCP_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rarityCP_not?: InputMaybe<Scalars['BigInt']['input']>;
  rarityCP_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rarity_gt?: InputMaybe<Scalars['Int']['input']>;
  rarity_gte?: InputMaybe<Scalars['Int']['input']>;
  rarity_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rarity_lt?: InputMaybe<Scalars['Int']['input']>;
  rarity_lte?: InputMaybe<Scalars['Int']['input']>;
  rarity_not?: InputMaybe<Scalars['Int']['input']>;
  rarity_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<Scalars['Int']['input']>;
  type_gt?: InputMaybe<Scalars['Int']['input']>;
  type_gte?: InputMaybe<Scalars['Int']['input']>;
  type_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type_lt?: InputMaybe<Scalars['Int']['input']>;
  type_lte?: InputMaybe<Scalars['Int']['input']>;
  type_not?: InputMaybe<Scalars['Int']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum NftEquipment_OrderBy {
  ClassCp = 'classCP',
  EquipmentClass = 'equipmentClass',
  Id = 'id',
  Rarity = 'rarity',
  RarityCp = 'rarityCP',
  Type = 'type',
  Uri = 'uri'
}

export type NftItem = {
  __typename?: 'NFTItem';
  id: Scalars['ID']['output'];
  itemEquipment?: Maybe<NftEquipment>;
  itemPVP?: Maybe<Nftpvp>;
  itemUpgrade?: Maybe<NftUpgrade>;
  lastUpdated: Scalars['BigInt']['output'];
  lockStatus: Scalars['Boolean']['output'];
  owner: NftItemOwner;
  tokenId: Scalars['String']['output'];
};

export type NftItemOwner = {
  __typename?: 'NFTItemOwner';
  gacha?: Maybe<Array<GachaEntity>>;
  id: Scalars['ID']['output'];
  items: Array<NftItem>;
  rewardLog: Array<MiningPowerLog>;
};


export type NftItemOwnerGachaArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GachaEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GachaEntity_Filter>;
};


export type NftItemOwnerItemsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NftItem_Filter>;
};


export type NftItemOwnerRewardLogArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MiningPowerLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MiningPowerLog_Filter>;
};

export type NftItemOwner_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NftItemOwner_Filter>>>;
  gacha_?: InputMaybe<GachaEntity_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  items_?: InputMaybe<NftItem_Filter>;
  or?: InputMaybe<Array<InputMaybe<NftItemOwner_Filter>>>;
  rewardLog_?: InputMaybe<MiningPowerLog_Filter>;
};

export enum NftItemOwner_OrderBy {
  Gacha = 'gacha',
  Id = 'id',
  Items = 'items',
  RewardLog = 'rewardLog'
}

export type NftItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NftItem_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  itemEquipment?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_?: InputMaybe<NftEquipment_Filter>;
  itemEquipment_contains?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_gt?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_gte?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemEquipment_lt?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_lte?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemEquipment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemEquipment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP?: InputMaybe<Scalars['String']['input']>;
  itemPVP_?: InputMaybe<Nftpvp_Filter>;
  itemPVP_contains?: InputMaybe<Scalars['String']['input']>;
  itemPVP_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemPVP_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_gt?: InputMaybe<Scalars['String']['input']>;
  itemPVP_gte?: InputMaybe<Scalars['String']['input']>;
  itemPVP_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemPVP_lt?: InputMaybe<Scalars['String']['input']>;
  itemPVP_lte?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemPVP_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemPVP_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemPVP_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemPVP_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_?: InputMaybe<NftUpgrade_Filter>;
  itemUpgrade_contains?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_gt?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_gte?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemUpgrade_lt?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_lte?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_contains?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  itemUpgrade_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_starts_with?: InputMaybe<Scalars['String']['input']>;
  itemUpgrade_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastUpdated?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockStatus?: InputMaybe<Scalars['Boolean']['input']>;
  lockStatus_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lockStatus_not?: InputMaybe<Scalars['Boolean']['input']>;
  lockStatus_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NftItem_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<NftItemOwner_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum NftItem_OrderBy {
  Id = 'id',
  ItemEquipment = 'itemEquipment',
  ItemEquipmentClassCp = 'itemEquipment__classCP',
  ItemEquipmentEquipmentClass = 'itemEquipment__equipmentClass',
  ItemEquipmentId = 'itemEquipment__id',
  ItemEquipmentRarity = 'itemEquipment__rarity',
  ItemEquipmentRarityCp = 'itemEquipment__rarityCP',
  ItemEquipmentType = 'itemEquipment__type',
  ItemEquipmentUri = 'itemEquipment__uri',
  ItemPvp = 'itemPVP',
  ItemPvpId = 'itemPVP__id',
  ItemPvpType = 'itemPVP__type',
  ItemPvpUri = 'itemPVP__uri',
  ItemUpgrade = 'itemUpgrade',
  ItemUpgradeId = 'itemUpgrade__id',
  ItemUpgradeType = 'itemUpgrade__type',
  ItemUpgradeUri = 'itemUpgrade__uri',
  LastUpdated = 'lastUpdated',
  LockStatus = 'lockStatus',
  Owner = 'owner',
  OwnerId = 'owner__id',
  TokenId = 'tokenId'
}

export type Nftpvp = {
  __typename?: 'NFTPVP';
  id: Scalars['ID']['output'];
  type: Scalars['Int']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type Nftpvp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Nftpvp_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Nftpvp_Filter>>>;
  type?: InputMaybe<Scalars['Int']['input']>;
  type_gt?: InputMaybe<Scalars['Int']['input']>;
  type_gte?: InputMaybe<Scalars['Int']['input']>;
  type_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type_lt?: InputMaybe<Scalars['Int']['input']>;
  type_lte?: InputMaybe<Scalars['Int']['input']>;
  type_not?: InputMaybe<Scalars['Int']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Nftpvp_OrderBy {
  Id = 'id',
  Type = 'type',
  Uri = 'uri'
}

export type NftStaking = {
  __typename?: 'NFTStaking';
  id: Scalars['ID']['output'];
  isStaked: Scalars['Boolean']['output'];
  lastUpdated: Scalars['BigInt']['output'];
  powerMining: Scalars['BigInt']['output'];
  stakedFrom: Scalars['BigInt']['output'];
  staker: Scalars['String']['output'];
};

export type NftStaking_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NftStaking_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isStaked?: InputMaybe<Scalars['Boolean']['input']>;
  isStaked_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isStaked_not?: InputMaybe<Scalars['Boolean']['input']>;
  isStaked_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lastUpdated?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NftStaking_Filter>>>;
  powerMining?: InputMaybe<Scalars['BigInt']['input']>;
  powerMining_gt?: InputMaybe<Scalars['BigInt']['input']>;
  powerMining_gte?: InputMaybe<Scalars['BigInt']['input']>;
  powerMining_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  powerMining_lt?: InputMaybe<Scalars['BigInt']['input']>;
  powerMining_lte?: InputMaybe<Scalars['BigInt']['input']>;
  powerMining_not?: InputMaybe<Scalars['BigInt']['input']>;
  powerMining_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedFrom?: InputMaybe<Scalars['BigInt']['input']>;
  stakedFrom_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedFrom_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedFrom_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedFrom_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedFrom_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedFrom_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedFrom_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  staker?: InputMaybe<Scalars['String']['input']>;
  staker_contains?: InputMaybe<Scalars['String']['input']>;
  staker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_gt?: InputMaybe<Scalars['String']['input']>;
  staker_gte?: InputMaybe<Scalars['String']['input']>;
  staker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_lt?: InputMaybe<Scalars['String']['input']>;
  staker_lte?: InputMaybe<Scalars['String']['input']>;
  staker_not?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum NftStaking_OrderBy {
  Id = 'id',
  IsStaked = 'isStaked',
  LastUpdated = 'lastUpdated',
  PowerMining = 'powerMining',
  StakedFrom = 'stakedFrom',
  Staker = 'staker'
}

export type Nftug = {
  __typename?: 'NFTUG';
  id: Scalars['ID']['output'];
  owner: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type Nftug_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Nftug_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Nftug_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Nftug_OrderBy {
  Id = 'id',
  Owner = 'owner',
  Uri = 'uri'
}

export type NftUpgrade = {
  __typename?: 'NFTUpgrade';
  id: Scalars['ID']['output'];
  type: Scalars['Int']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type NftUpgrade_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NftUpgrade_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NftUpgrade_Filter>>>;
  type?: InputMaybe<Scalars['Int']['input']>;
  type_gt?: InputMaybe<Scalars['Int']['input']>;
  type_gte?: InputMaybe<Scalars['Int']['input']>;
  type_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type_lt?: InputMaybe<Scalars['Int']['input']>;
  type_lte?: InputMaybe<Scalars['Int']['input']>;
  type_not?: InputMaybe<Scalars['Int']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum NftUpgrade_OrderBy {
  Id = 'id',
  Type = 'type',
  Uri = 'uri'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addressLastLog?: Maybe<AddressLastLog>;
  addressLastLogs: Array<AddressLastLog>;
  gachaEntities: Array<GachaEntity>;
  gachaEntity?: Maybe<GachaEntity>;
  marketEvent721?: Maybe<MarketEvent721>;
  marketEvent721S: Array<MarketEvent721>;
  miningPowerLog?: Maybe<MiningPowerLog>;
  miningPowerLogs: Array<MiningPowerLog>;
  nftequipment?: Maybe<NftEquipment>;
  nftequipments: Array<NftEquipment>;
  nftitem?: Maybe<NftItem>;
  nftitemOwner?: Maybe<NftItemOwner>;
  nftitemOwners: Array<NftItemOwner>;
  nftitems: Array<NftItem>;
  nftpvp?: Maybe<Nftpvp>;
  nftpvps: Array<Nftpvp>;
  nftstaking?: Maybe<NftStaking>;
  nftstakings: Array<NftStaking>;
  nftug?: Maybe<Nftug>;
  nftugs: Array<Nftug>;
  nftupgrade?: Maybe<NftUpgrade>;
  nftupgrades: Array<NftUpgrade>;
  uniceran?: Maybe<Uniceran>;
  uniceranOwnerBalance?: Maybe<UniceranOwnerBalance>;
  uniceranOwnerBalances: Array<UniceranOwnerBalance>;
  unicerans: Array<Uniceran>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAddressLastLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddressLastLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressLastLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddressLastLog_Filter>;
};


export type QueryGachaEntitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GachaEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GachaEntity_Filter>;
};


export type QueryGachaEntityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketEvent721Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketEvent721SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketEvent721_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketEvent721_Filter>;
};


export type QueryMiningPowerLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMiningPowerLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MiningPowerLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MiningPowerLog_Filter>;
};


export type QueryNftequipmentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftequipmentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftEquipment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftEquipment_Filter>;
};


export type QueryNftitemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftitemOwnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftitemOwnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftItemOwner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftItemOwner_Filter>;
};


export type QueryNftitemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftItem_Filter>;
};


export type QueryNftpvpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftpvpsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nftpvp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nftpvp_Filter>;
};


export type QueryNftstakingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftstakingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftStaking_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftStaking_Filter>;
};


export type QueryNftugArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftugsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nftug_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nftug_Filter>;
};


export type QueryNftupgradeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftupgradesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftUpgrade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftUpgrade_Filter>;
};


export type QueryUniceranArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUniceranOwnerBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUniceranOwnerBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniceranOwnerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UniceranOwnerBalance_Filter>;
};


export type QueryUniceransArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Uniceran_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Uniceran_Filter>;
};

export enum SellStatus {
  AskCancel = 'AskCancel',
  AskNew = 'AskNew',
  Trade = 'Trade'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addressLastLog?: Maybe<AddressLastLog>;
  addressLastLogs: Array<AddressLastLog>;
  gachaEntities: Array<GachaEntity>;
  gachaEntity?: Maybe<GachaEntity>;
  marketEvent721?: Maybe<MarketEvent721>;
  marketEvent721S: Array<MarketEvent721>;
  miningPowerLog?: Maybe<MiningPowerLog>;
  miningPowerLogs: Array<MiningPowerLog>;
  nftequipment?: Maybe<NftEquipment>;
  nftequipments: Array<NftEquipment>;
  nftitem?: Maybe<NftItem>;
  nftitemOwner?: Maybe<NftItemOwner>;
  nftitemOwners: Array<NftItemOwner>;
  nftitems: Array<NftItem>;
  nftpvp?: Maybe<Nftpvp>;
  nftpvps: Array<Nftpvp>;
  nftstaking?: Maybe<NftStaking>;
  nftstakings: Array<NftStaking>;
  nftug?: Maybe<Nftug>;
  nftugs: Array<Nftug>;
  nftupgrade?: Maybe<NftUpgrade>;
  nftupgrades: Array<NftUpgrade>;
  uniceran?: Maybe<Uniceran>;
  uniceranOwnerBalance?: Maybe<UniceranOwnerBalance>;
  uniceranOwnerBalances: Array<UniceranOwnerBalance>;
  unicerans: Array<Uniceran>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAddressLastLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddressLastLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressLastLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddressLastLog_Filter>;
};


export type SubscriptionGachaEntitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GachaEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GachaEntity_Filter>;
};


export type SubscriptionGachaEntityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketEvent721Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketEvent721SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketEvent721_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketEvent721_Filter>;
};


export type SubscriptionMiningPowerLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMiningPowerLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MiningPowerLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MiningPowerLog_Filter>;
};


export type SubscriptionNftequipmentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftequipmentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftEquipment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftEquipment_Filter>;
};


export type SubscriptionNftitemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftitemOwnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftitemOwnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftItemOwner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftItemOwner_Filter>;
};


export type SubscriptionNftitemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftItem_Filter>;
};


export type SubscriptionNftpvpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftpvpsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nftpvp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nftpvp_Filter>;
};


export type SubscriptionNftstakingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftstakingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftStaking_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftStaking_Filter>;
};


export type SubscriptionNftugArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftugsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nftug_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nftug_Filter>;
};


export type SubscriptionNftupgradeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftupgradesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftUpgrade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftUpgrade_Filter>;
};


export type SubscriptionUniceranArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUniceranOwnerBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUniceranOwnerBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniceranOwnerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UniceranOwnerBalance_Filter>;
};


export type SubscriptionUniceransArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Uniceran_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Uniceran_Filter>;
};

export type Uniceran = {
  __typename?: 'Uniceran';
  balances: Array<UniceranOwnerBalance>;
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['BigInt']['output'];
  uri: Scalars['String']['output'];
};


export type UniceranBalancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniceranOwnerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UniceranOwnerBalance_Filter>;
};

export type UniceranOwnerBalance = {
  __typename?: 'UniceranOwnerBalance';
  balance: Scalars['BigInt']['output'];
  burnQuantity: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['BigInt']['output'];
  owner: Scalars['String']['output'];
  token: Uniceran;
};

export type UniceranOwnerBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniceranOwnerBalance_Filter>>>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burnQuantity?: InputMaybe<Scalars['BigInt']['input']>;
  burnQuantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  burnQuantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  burnQuantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burnQuantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  burnQuantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  burnQuantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  burnQuantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastUpdated?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UniceranOwnerBalance_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Uniceran_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum UniceranOwnerBalance_OrderBy {
  Balance = 'balance',
  BurnQuantity = 'burnQuantity',
  Id = 'id',
  LastUpdated = 'lastUpdated',
  Owner = 'owner',
  Token = 'token',
  TokenId = 'token__id',
  TokenLastUpdated = 'token__lastUpdated',
  TokenUri = 'token__uri'
}

export type Uniceran_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Uniceran_Filter>>>;
  balances_?: InputMaybe<UniceranOwnerBalance_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastUpdated?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Uniceran_Filter>>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Uniceran_OrderBy {
  Balances = 'balances',
  Id = 'id',
  LastUpdated = 'lastUpdated',
  Uri = 'uri'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddressLastLog: ResolverTypeWrapper<AddressLastLog>;
  AddressLastLog_filter: AddressLastLog_Filter;
  AddressLastLog_orderBy: AddressLastLog_OrderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GachaEntity: ResolverTypeWrapper<GachaEntity>;
  GachaEntity_filter: GachaEntity_Filter;
  GachaEntity_orderBy: GachaEntity_OrderBy;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  MarketEvent721: ResolverTypeWrapper<MarketEvent721>;
  MarketEvent721_filter: MarketEvent721_Filter;
  MarketEvent721_orderBy: MarketEvent721_OrderBy;
  MiningPowerLog: ResolverTypeWrapper<MiningPowerLog>;
  MiningPowerLog_filter: MiningPowerLog_Filter;
  MiningPowerLog_orderBy: MiningPowerLog_OrderBy;
  NFTEquipment: ResolverTypeWrapper<NftEquipment>;
  NFTEquipment_filter: NftEquipment_Filter;
  NFTEquipment_orderBy: NftEquipment_OrderBy;
  NFTItem: ResolverTypeWrapper<NftItem>;
  NFTItemOwner: ResolverTypeWrapper<NftItemOwner>;
  NFTItemOwner_filter: NftItemOwner_Filter;
  NFTItemOwner_orderBy: NftItemOwner_OrderBy;
  NFTItem_filter: NftItem_Filter;
  NFTItem_orderBy: NftItem_OrderBy;
  NFTPVP: ResolverTypeWrapper<Nftpvp>;
  NFTPVP_filter: Nftpvp_Filter;
  NFTPVP_orderBy: Nftpvp_OrderBy;
  NFTStaking: ResolverTypeWrapper<NftStaking>;
  NFTStaking_filter: NftStaking_Filter;
  NFTStaking_orderBy: NftStaking_OrderBy;
  NFTUG: ResolverTypeWrapper<Nftug>;
  NFTUG_filter: Nftug_Filter;
  NFTUG_orderBy: Nftug_OrderBy;
  NFTUpgrade: ResolverTypeWrapper<NftUpgrade>;
  NFTUpgrade_filter: NftUpgrade_Filter;
  NFTUpgrade_orderBy: NftUpgrade_OrderBy;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  SellStatus: SellStatus;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Uniceran: ResolverTypeWrapper<Uniceran>;
  UniceranOwnerBalance: ResolverTypeWrapper<UniceranOwnerBalance>;
  UniceranOwnerBalance_filter: UniceranOwnerBalance_Filter;
  UniceranOwnerBalance_orderBy: UniceranOwnerBalance_OrderBy;
  Uniceran_filter: Uniceran_Filter;
  Uniceran_orderBy: Uniceran_OrderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddressLastLog: AddressLastLog;
  AddressLastLog_filter: AddressLastLog_Filter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Float: Scalars['Float']['output'];
  GachaEntity: GachaEntity;
  GachaEntity_filter: GachaEntity_Filter;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  MarketEvent721: MarketEvent721;
  MarketEvent721_filter: MarketEvent721_Filter;
  MiningPowerLog: MiningPowerLog;
  MiningPowerLog_filter: MiningPowerLog_Filter;
  NFTEquipment: NftEquipment;
  NFTEquipment_filter: NftEquipment_Filter;
  NFTItem: NftItem;
  NFTItemOwner: NftItemOwner;
  NFTItemOwner_filter: NftItemOwner_Filter;
  NFTItem_filter: NftItem_Filter;
  NFTPVP: Nftpvp;
  NFTPVP_filter: Nftpvp_Filter;
  NFTStaking: NftStaking;
  NFTStaking_filter: NftStaking_Filter;
  NFTUG: Nftug;
  NFTUG_filter: Nftug_Filter;
  NFTUpgrade: NftUpgrade;
  NFTUpgrade_filter: NftUpgrade_Filter;
  Query: {};
  String: Scalars['String']['output'];
  Subscription: {};
  Uniceran: Uniceran;
  UniceranOwnerBalance: UniceranOwnerBalance;
  UniceranOwnerBalance_filter: UniceranOwnerBalance_Filter;
  Uniceran_filter: Uniceran_Filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
};

export type DerivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type DerivedFromDirectiveResolver<Result, Parent, ContextType = any, Args = DerivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = { };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SubgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type SubgraphIdDirectiveResolver<Result, Parent, ContextType = any, Args = SubgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressLastLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressLastLog'] = ResolversParentTypes['AddressLastLog']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastLog?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type GachaEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['GachaEntity'] = ResolversParentTypes['GachaEntity']> = {
  gachaTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  roller?: Resolver<ResolversTypes['NFTItemOwner'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type MarketEvent721Resolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketEvent721'] = ResolversParentTypes['MarketEvent721']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['SellStatus'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemEquipment?: Resolver<Maybe<ResolversTypes['NFTEquipment']>, ParentType, ContextType>;
  itemPVP?: Resolver<Maybe<ResolversTypes['NFTPVP']>, ParentType, ContextType>;
  itemUpgrade?: Resolver<Maybe<ResolversTypes['NFTUpgrade']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quoteToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MiningPowerLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['MiningPowerLog'] = ResolversParentTypes['MiningPowerLog']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalMiningPower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['NFTItemOwner'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftEquipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTEquipment'] = ResolversParentTypes['NFTEquipment']> = {
  classCP?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  equipmentClass?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rarityCP?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTItem'] = ResolversParentTypes['NFTItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemEquipment?: Resolver<Maybe<ResolversTypes['NFTEquipment']>, ParentType, ContextType>;
  itemPVP?: Resolver<Maybe<ResolversTypes['NFTPVP']>, ParentType, ContextType>;
  itemUpgrade?: Resolver<Maybe<ResolversTypes['NFTUpgrade']>, ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lockStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['NFTItemOwner'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftItemOwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTItemOwner'] = ResolversParentTypes['NFTItemOwner']> = {
  gacha?: Resolver<Maybe<Array<ResolversTypes['GachaEntity']>>, ParentType, ContextType, RequireFields<NftItemOwnerGachaArgs, 'first' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['NFTItem']>, ParentType, ContextType, RequireFields<NftItemOwnerItemsArgs, 'first' | 'skip'>>;
  rewardLog?: Resolver<Array<ResolversTypes['MiningPowerLog']>, ParentType, ContextType, RequireFields<NftItemOwnerRewardLogArgs, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftpvpResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTPVP'] = ResolversParentTypes['NFTPVP']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftStakingResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTStaking'] = ResolversParentTypes['NFTStaking']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isStaked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  powerMining?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stakedFrom?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  staker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftugResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTUG'] = ResolversParentTypes['NFTUG']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftUpgradeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTUpgrade'] = ResolversParentTypes['NFTUpgrade']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_MetaArgs>>;
  addressLastLog?: Resolver<Maybe<ResolversTypes['AddressLastLog']>, ParentType, ContextType, RequireFields<QueryAddressLastLogArgs, 'id' | 'subgraphError'>>;
  addressLastLogs?: Resolver<Array<ResolversTypes['AddressLastLog']>, ParentType, ContextType, RequireFields<QueryAddressLastLogsArgs, 'first' | 'skip' | 'subgraphError'>>;
  gachaEntities?: Resolver<Array<ResolversTypes['GachaEntity']>, ParentType, ContextType, RequireFields<QueryGachaEntitiesArgs, 'first' | 'skip' | 'subgraphError'>>;
  gachaEntity?: Resolver<Maybe<ResolversTypes['GachaEntity']>, ParentType, ContextType, RequireFields<QueryGachaEntityArgs, 'id' | 'subgraphError'>>;
  marketEvent721?: Resolver<Maybe<ResolversTypes['MarketEvent721']>, ParentType, ContextType, RequireFields<QueryMarketEvent721Args, 'id' | 'subgraphError'>>;
  marketEvent721S?: Resolver<Array<ResolversTypes['MarketEvent721']>, ParentType, ContextType, RequireFields<QueryMarketEvent721SArgs, 'first' | 'skip' | 'subgraphError'>>;
  miningPowerLog?: Resolver<Maybe<ResolversTypes['MiningPowerLog']>, ParentType, ContextType, RequireFields<QueryMiningPowerLogArgs, 'id' | 'subgraphError'>>;
  miningPowerLogs?: Resolver<Array<ResolversTypes['MiningPowerLog']>, ParentType, ContextType, RequireFields<QueryMiningPowerLogsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftequipment?: Resolver<Maybe<ResolversTypes['NFTEquipment']>, ParentType, ContextType, RequireFields<QueryNftequipmentArgs, 'id' | 'subgraphError'>>;
  nftequipments?: Resolver<Array<ResolversTypes['NFTEquipment']>, ParentType, ContextType, RequireFields<QueryNftequipmentsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftitem?: Resolver<Maybe<ResolversTypes['NFTItem']>, ParentType, ContextType, RequireFields<QueryNftitemArgs, 'id' | 'subgraphError'>>;
  nftitemOwner?: Resolver<Maybe<ResolversTypes['NFTItemOwner']>, ParentType, ContextType, RequireFields<QueryNftitemOwnerArgs, 'id' | 'subgraphError'>>;
  nftitemOwners?: Resolver<Array<ResolversTypes['NFTItemOwner']>, ParentType, ContextType, RequireFields<QueryNftitemOwnersArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftitems?: Resolver<Array<ResolversTypes['NFTItem']>, ParentType, ContextType, RequireFields<QueryNftitemsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftpvp?: Resolver<Maybe<ResolversTypes['NFTPVP']>, ParentType, ContextType, RequireFields<QueryNftpvpArgs, 'id' | 'subgraphError'>>;
  nftpvps?: Resolver<Array<ResolversTypes['NFTPVP']>, ParentType, ContextType, RequireFields<QueryNftpvpsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftstaking?: Resolver<Maybe<ResolversTypes['NFTStaking']>, ParentType, ContextType, RequireFields<QueryNftstakingArgs, 'id' | 'subgraphError'>>;
  nftstakings?: Resolver<Array<ResolversTypes['NFTStaking']>, ParentType, ContextType, RequireFields<QueryNftstakingsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftug?: Resolver<Maybe<ResolversTypes['NFTUG']>, ParentType, ContextType, RequireFields<QueryNftugArgs, 'id' | 'subgraphError'>>;
  nftugs?: Resolver<Array<ResolversTypes['NFTUG']>, ParentType, ContextType, RequireFields<QueryNftugsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftupgrade?: Resolver<Maybe<ResolversTypes['NFTUpgrade']>, ParentType, ContextType, RequireFields<QueryNftupgradeArgs, 'id' | 'subgraphError'>>;
  nftupgrades?: Resolver<Array<ResolversTypes['NFTUpgrade']>, ParentType, ContextType, RequireFields<QueryNftupgradesArgs, 'first' | 'skip' | 'subgraphError'>>;
  uniceran?: Resolver<Maybe<ResolversTypes['Uniceran']>, ParentType, ContextType, RequireFields<QueryUniceranArgs, 'id' | 'subgraphError'>>;
  uniceranOwnerBalance?: Resolver<Maybe<ResolversTypes['UniceranOwnerBalance']>, ParentType, ContextType, RequireFields<QueryUniceranOwnerBalanceArgs, 'id' | 'subgraphError'>>;
  uniceranOwnerBalances?: Resolver<Array<ResolversTypes['UniceranOwnerBalance']>, ParentType, ContextType, RequireFields<QueryUniceranOwnerBalancesArgs, 'first' | 'skip' | 'subgraphError'>>;
  unicerans?: Resolver<Array<ResolversTypes['Uniceran']>, ParentType, ContextType, RequireFields<QueryUniceransArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_MetaArgs>>;
  addressLastLog?: SubscriptionResolver<Maybe<ResolversTypes['AddressLastLog']>, "addressLastLog", ParentType, ContextType, RequireFields<SubscriptionAddressLastLogArgs, 'id' | 'subgraphError'>>;
  addressLastLogs?: SubscriptionResolver<Array<ResolversTypes['AddressLastLog']>, "addressLastLogs", ParentType, ContextType, RequireFields<SubscriptionAddressLastLogsArgs, 'first' | 'skip' | 'subgraphError'>>;
  gachaEntities?: SubscriptionResolver<Array<ResolversTypes['GachaEntity']>, "gachaEntities", ParentType, ContextType, RequireFields<SubscriptionGachaEntitiesArgs, 'first' | 'skip' | 'subgraphError'>>;
  gachaEntity?: SubscriptionResolver<Maybe<ResolversTypes['GachaEntity']>, "gachaEntity", ParentType, ContextType, RequireFields<SubscriptionGachaEntityArgs, 'id' | 'subgraphError'>>;
  marketEvent721?: SubscriptionResolver<Maybe<ResolversTypes['MarketEvent721']>, "marketEvent721", ParentType, ContextType, RequireFields<SubscriptionMarketEvent721Args, 'id' | 'subgraphError'>>;
  marketEvent721S?: SubscriptionResolver<Array<ResolversTypes['MarketEvent721']>, "marketEvent721S", ParentType, ContextType, RequireFields<SubscriptionMarketEvent721SArgs, 'first' | 'skip' | 'subgraphError'>>;
  miningPowerLog?: SubscriptionResolver<Maybe<ResolversTypes['MiningPowerLog']>, "miningPowerLog", ParentType, ContextType, RequireFields<SubscriptionMiningPowerLogArgs, 'id' | 'subgraphError'>>;
  miningPowerLogs?: SubscriptionResolver<Array<ResolversTypes['MiningPowerLog']>, "miningPowerLogs", ParentType, ContextType, RequireFields<SubscriptionMiningPowerLogsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftequipment?: SubscriptionResolver<Maybe<ResolversTypes['NFTEquipment']>, "nftequipment", ParentType, ContextType, RequireFields<SubscriptionNftequipmentArgs, 'id' | 'subgraphError'>>;
  nftequipments?: SubscriptionResolver<Array<ResolversTypes['NFTEquipment']>, "nftequipments", ParentType, ContextType, RequireFields<SubscriptionNftequipmentsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftitem?: SubscriptionResolver<Maybe<ResolversTypes['NFTItem']>, "nftitem", ParentType, ContextType, RequireFields<SubscriptionNftitemArgs, 'id' | 'subgraphError'>>;
  nftitemOwner?: SubscriptionResolver<Maybe<ResolversTypes['NFTItemOwner']>, "nftitemOwner", ParentType, ContextType, RequireFields<SubscriptionNftitemOwnerArgs, 'id' | 'subgraphError'>>;
  nftitemOwners?: SubscriptionResolver<Array<ResolversTypes['NFTItemOwner']>, "nftitemOwners", ParentType, ContextType, RequireFields<SubscriptionNftitemOwnersArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftitems?: SubscriptionResolver<Array<ResolversTypes['NFTItem']>, "nftitems", ParentType, ContextType, RequireFields<SubscriptionNftitemsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftpvp?: SubscriptionResolver<Maybe<ResolversTypes['NFTPVP']>, "nftpvp", ParentType, ContextType, RequireFields<SubscriptionNftpvpArgs, 'id' | 'subgraphError'>>;
  nftpvps?: SubscriptionResolver<Array<ResolversTypes['NFTPVP']>, "nftpvps", ParentType, ContextType, RequireFields<SubscriptionNftpvpsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftstaking?: SubscriptionResolver<Maybe<ResolversTypes['NFTStaking']>, "nftstaking", ParentType, ContextType, RequireFields<SubscriptionNftstakingArgs, 'id' | 'subgraphError'>>;
  nftstakings?: SubscriptionResolver<Array<ResolversTypes['NFTStaking']>, "nftstakings", ParentType, ContextType, RequireFields<SubscriptionNftstakingsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftug?: SubscriptionResolver<Maybe<ResolversTypes['NFTUG']>, "nftug", ParentType, ContextType, RequireFields<SubscriptionNftugArgs, 'id' | 'subgraphError'>>;
  nftugs?: SubscriptionResolver<Array<ResolversTypes['NFTUG']>, "nftugs", ParentType, ContextType, RequireFields<SubscriptionNftugsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nftupgrade?: SubscriptionResolver<Maybe<ResolversTypes['NFTUpgrade']>, "nftupgrade", ParentType, ContextType, RequireFields<SubscriptionNftupgradeArgs, 'id' | 'subgraphError'>>;
  nftupgrades?: SubscriptionResolver<Array<ResolversTypes['NFTUpgrade']>, "nftupgrades", ParentType, ContextType, RequireFields<SubscriptionNftupgradesArgs, 'first' | 'skip' | 'subgraphError'>>;
  uniceran?: SubscriptionResolver<Maybe<ResolversTypes['Uniceran']>, "uniceran", ParentType, ContextType, RequireFields<SubscriptionUniceranArgs, 'id' | 'subgraphError'>>;
  uniceranOwnerBalance?: SubscriptionResolver<Maybe<ResolversTypes['UniceranOwnerBalance']>, "uniceranOwnerBalance", ParentType, ContextType, RequireFields<SubscriptionUniceranOwnerBalanceArgs, 'id' | 'subgraphError'>>;
  uniceranOwnerBalances?: SubscriptionResolver<Array<ResolversTypes['UniceranOwnerBalance']>, "uniceranOwnerBalances", ParentType, ContextType, RequireFields<SubscriptionUniceranOwnerBalancesArgs, 'first' | 'skip' | 'subgraphError'>>;
  unicerans?: SubscriptionResolver<Array<ResolversTypes['Uniceran']>, "unicerans", ParentType, ContextType, RequireFields<SubscriptionUniceransArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type UniceranResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uniceran'] = ResolversParentTypes['Uniceran']> = {
  balances?: Resolver<Array<ResolversTypes['UniceranOwnerBalance']>, ParentType, ContextType, RequireFields<UniceranBalancesArgs, 'first' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UniceranOwnerBalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UniceranOwnerBalance'] = ResolversParentTypes['UniceranOwnerBalance']> = {
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  burnQuantity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Uniceran'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Block_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = {
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Meta_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = {
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddressLastLog?: AddressLastLogResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  GachaEntity?: GachaEntityResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  MarketEvent721?: MarketEvent721Resolvers<ContextType>;
  MiningPowerLog?: MiningPowerLogResolvers<ContextType>;
  NFTEquipment?: NftEquipmentResolvers<ContextType>;
  NFTItem?: NftItemResolvers<ContextType>;
  NFTItemOwner?: NftItemOwnerResolvers<ContextType>;
  NFTPVP?: NftpvpResolvers<ContextType>;
  NFTStaking?: NftStakingResolvers<ContextType>;
  NFTUG?: NftugResolvers<ContextType>;
  NFTUpgrade?: NftUpgradeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Uniceran?: UniceranResolvers<ContextType>;
  UniceranOwnerBalance?: UniceranOwnerBalanceResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
};


export const GachaQueryDocument = gql`
    query GachaQuery($start: BigInt!, $end: BigInt!, $roller: String) {
  gachaEntities(
    where: {gachaTimestamp_gte: $start, gachaTimestamp_lte: $end, roller: $roller}
  ) {
    roller {
      id
    }
    gachaTimestamp
    id
  }
}
    `;
export const NftuGsDocument = gql`
    query NFTUGs($skip: Int!, $first: Int!, $owner: String!) {
  nftugs(where: {owner: $owner}, first: $first, skip: $skip) {
    id
    uri
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GachaQuery(variables: GachaQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GachaQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GachaQueryQuery>(GachaQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GachaQuery', 'query', variables);
    },
    NFTUGs(variables: NftuGsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NftuGsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NftuGsQuery>(NftuGsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'NFTUGs', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type GachaQueryQueryVariables = Exact<{
  start: Scalars['BigInt']['input'];
  end: Scalars['BigInt']['input'];
  roller?: InputMaybe<Scalars['String']['input']>;
}>;


export type GachaQueryQuery = { __typename?: 'Query', gachaEntities: Array<{ __typename?: 'GachaEntity', gachaTimestamp: any, id: string, roller: { __typename?: 'NFTItemOwner', id: string } }> };

export type NftuGsQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  first: Scalars['Int']['input'];
  owner: Scalars['String']['input'];
}>;


export type NftuGsQuery = { __typename?: 'Query', nftugs: Array<{ __typename?: 'NFTUG', id: string, uri?: string | null }> };
