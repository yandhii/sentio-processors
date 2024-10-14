
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { String, Int, BigInt, Float, ID, Bytes, Timestamp, Boolean } from '@sentio/sdk/store'
import { Entity, Required, One, Many, Column, ListColumn, AbstractEntity } from '@sentio/sdk/store'
import { BigDecimal } from '@sentio/bigdecimal'
import { DatabaseSchema } from '@sentio/sdk'






@Entity("MarketBasic")
export class MarketBasic extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	contractAddress: String

	@Required
	@Column("BigInt")
	baseSupplyIndex: BigInt

	@Required
	@Column("BigInt")
	baseBorrowIndex: BigInt

	@Required
	@Column("BigInt")
	totalSupplyBase: BigInt

	@Required
	@Column("BigInt")
	totalBorrowBase: BigInt

	@Required
	@Column("BigInt")
	lastAccrualTime: BigInt
  constructor(data: Partial<MarketBasic>) {super()}
}

@Entity("UserBasic")
export class UserBasic extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	contractAddress: String

	@Required
	@Column("String")
	address: String

	@Required
	@Column("BigInt")
	principal: BigInt

	@Required
	@Column("Boolean")
	isNegative: Boolean
  constructor(data: Partial<UserBasic>) {super()}
}

@Entity("MarketConfiguration")
export class MarketConfiguration extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	contractAddress: String

	@Required
	@Column("String")
	baseTokenAddress: String

	@Required
	@Column("Int")
	baseTokenDecimals: Int

	@Required
	@Column("BigInt")
	supplyKink: BigInt

	@Required
	@Column("BigInt")
	borrowKink: BigInt

	@Required
	@Column("BigInt")
	supplyPerSecondInterestRateBase: BigInt

	@Required
	@Column("BigInt")
	supplyPerSecondInterestRateSlopeLow: BigInt

	@Required
	@Column("BigInt")
	supplyPerSecondInterestRateSlopeHigh: BigInt

	@Required
	@Column("BigInt")
	borrowPerSecondInterestRateBase: BigInt

	@Required
	@Column("BigInt")
	borrowPerSecondInterestRateSlopeLow: BigInt

	@Required
	@Column("BigInt")
	borrowPerSecondInterestRateSlopeHigh: BigInt
  constructor(data: Partial<MarketConfiguration>) {super()}
}

@Entity("CollateralConfiguration")
export class CollateralConfiguration extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	contractAddress: String

	@Required
	@Column("String")
	assetAddress: String

	@Required
	@Column("Int")
	decimals: Int
  constructor(data: Partial<CollateralConfiguration>) {super()}
}

@Entity("Pool")
export class Pool extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("Int")
	creationBlockNumber: Int

	@Required
	@Column("Int")
	creationTimestamp: Int

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Required
	@Column("String")
	receiptTokenAddress: String

	@Required
	@Column("String")
	receiptTokenSymbol: String

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	poolType: String
  constructor(data: Partial<Pool>) {super()}
}

@Entity("BasePositionSnapshot")
export class BasePositionSnapshot extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	timestamp: Int

	@Required
	@Column("String")
	blockDate: String

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Required
	@Column("String")
	userAddress: String

	@Required
	@Column("BigInt")
	suppliedAmount: BigInt

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	borrowedAmount: BigInt

	@Column("BigDecimal")
	borrowedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	collateralAmount: BigInt

	@Column("BigDecimal")
	collateralAmountUsd?: BigDecimal
  constructor(data: Partial<BasePositionSnapshot>) {super()}
}

@Entity("BasePoolSnapshot")
export class BasePoolSnapshot extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	timestamp: Int

	@Required
	@Column("String")
	blockDate: String

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Column("BigDecimal")
	underlyingTokenPriceUsd?: BigDecimal

	@Required
	@Column("BigInt")
	availableAmount: BigInt

	@Column("BigDecimal")
	availableAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	suppliedAmount: BigInt

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	collateralAmount: BigInt

	@Column("BigDecimal")
	collateralAmountUsd?: BigDecimal

	@Required
	@Column("BigDecimal")
	collateralFactor: BigDecimal

	@Required
	@Column("BigInt")
	supplyIndex: BigInt

	@Required
	@Column("BigInt")
	supplyApr: BigInt

	@Required
	@Column("BigInt")
	borrowedAmount: BigInt

	@Column("BigDecimal")
	borrowedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	borrowIndex: BigInt

	@Required
	@Column("BigInt")
	borrowApr: BigInt

	@Column("BigDecimal")
	totalFeesUsd?: BigDecimal

	@Column("BigDecimal")
	userFeesUsd?: BigDecimal

	@Column("BigDecimal")
	protocolFeesUsd?: BigDecimal
  constructor(data: Partial<BasePoolSnapshot>) {super()}
}

@Entity("CollateralPosition")
export class CollateralPosition extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Required
	@Column("String")
	userAddress: String

	@Required
	@Column("BigInt")
	suppliedAmount: BigInt

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	borrowedAmount: BigInt

	@Column("BigDecimal")
	borrowedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	collateralAmount: BigInt

	@Column("BigDecimal")
	collateralAmountUsd?: BigDecimal
  constructor(data: Partial<CollateralPosition>) {super()}
}

@Entity("CollateralPool")
export class CollateralPool extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Column("BigDecimal")
	underlyingTokenPriceUsd?: BigDecimal

	@Required
	@Column("BigInt")
	availableAmount: BigInt

	@Column("BigDecimal")
	availableAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	suppliedAmount: BigInt

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	collateralAmount: BigInt

	@Column("BigDecimal")
	collateralAmountUsd?: BigDecimal

	@Required
	@Column("BigDecimal")
	collateralFactor: BigDecimal

	@Required
	@Column("BigInt")
	supplyIndex: BigInt

	@Required
	@Column("BigInt")
	supplyApr: BigInt

	@Required
	@Column("BigInt")
	borrowedAmount: BigInt

	@Column("BigDecimal")
	borrowedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	borrowIndex: BigInt

	@Required
	@Column("BigInt")
	borrowApr: BigInt

	@Column("BigDecimal")
	totalFeesUsd?: BigDecimal

	@Column("BigDecimal")
	userFeesUsd?: BigDecimal

	@Column("BigDecimal")
	protocolFeesUsd?: BigDecimal
  constructor(data: Partial<CollateralPool>) {super()}
}

@Entity("CollateralPositionSnapshot")
export class CollateralPositionSnapshot extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	timestamp: Int

	@Required
	@Column("String")
	blockDate: String

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Required
	@Column("String")
	userAddress: String

	@Required
	@Column("BigInt")
	suppliedAmount: BigInt

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	borrowedAmount: BigInt

	@Column("BigDecimal")
	borrowedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	collateralAmount: BigInt

	@Column("BigDecimal")
	collateralAmountUsd?: BigDecimal
  constructor(data: Partial<CollateralPositionSnapshot>) {super()}
}

@Entity("CollateralPoolSnapshot")
export class CollateralPoolSnapshot extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	timestamp: Int

	@Required
	@Column("String")
	blockDate: String

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Column("BigDecimal")
	underlyingTokenPriceUsd?: BigDecimal

	@Required
	@Column("BigInt")
	availableAmount: BigInt

	@Column("BigDecimal")
	availableAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	suppliedAmount: BigInt

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	collateralAmount: BigInt

	@Column("BigDecimal")
	collateralAmountUsd?: BigDecimal

	@Required
	@Column("BigDecimal")
	collateralFactor: BigDecimal

	@Required
	@Column("BigInt")
	supplyIndex: BigInt

	@Required
	@Column("BigInt")
	supplyApr: BigInt

	@Required
	@Column("BigInt")
	borrowedAmount: BigInt

	@Column("BigDecimal")
	borrowedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	borrowIndex: BigInt

	@Required
	@Column("BigInt")
	borrowApr: BigInt

	@Column("BigDecimal")
	totalFeesUsd?: BigDecimal

	@Column("BigDecimal")
	userFeesUsd?: BigDecimal

	@Column("BigDecimal")
	protocolFeesUsd?: BigDecimal
  constructor(data: Partial<CollateralPoolSnapshot>) {super()}
}


const source = `type MarketBasic @entity {
    id: ID! # Constructed as chainId_marketAddress
    chainId: Int!
    contractAddress: String!
    baseSupplyIndex: BigInt!
    baseBorrowIndex: BigInt!
    totalSupplyBase: BigInt!
    totalBorrowBase: BigInt!
    lastAccrualTime: BigInt!
}

type UserBasic @entity {
    id: ID!
    chainId: Int!
    contractAddress: String!
    address: String!
    principal: BigInt!
    isNegative: Boolean!
}

type MarketConfiguration @entity {
    id: ID!
    chainId: Int!
    contractAddress: String!
    baseTokenAddress: String!
    baseTokenDecimals: Int!
    supplyKink: BigInt!
    borrowKink: BigInt!
    supplyPerSecondInterestRateBase: BigInt!
    supplyPerSecondInterestRateSlopeLow: BigInt!
    supplyPerSecondInterestRateSlopeHigh: BigInt!
    borrowPerSecondInterestRateBase: BigInt!
    borrowPerSecondInterestRateSlopeLow: BigInt!
    borrowPerSecondInterestRateSlopeHigh: BigInt!
}

type CollateralConfiguration @entity {
    id: ID!
    chainId: Int!
    contractAddress: String!
    assetAddress: String!
    decimals: Int!
}

type Pool @entity {
    id: ID! # Constructed as chainId_poolAddress_underlyingTokenAddress
    chainId: Int!
    creationBlockNumber: Int!
    creationTimestamp: Int!
    underlyingTokenAddress: String! # Address of the underlying token (collateral, base)
    underlyingTokenSymbol: String!
    receiptTokenAddress: String!
    receiptTokenSymbol: String!
    poolAddress: String! # Contract address of the pool (market)
    poolType: String! # collteral_only or supply_only
}

type BasePositionSnapshot @entity {
    id: ID!
    timestamp: Int!
    blockDate: String!
    chainId: Int!
    poolAddress: String!
    underlyingTokenAddress: String!
    underlyingTokenSymbol: String!
    userAddress: String!
    suppliedAmount: BigInt!
    suppliedAmountUsd: BigDecimal
    borrowedAmount: BigInt!
    borrowedAmountUsd: BigDecimal
    collateralAmount: BigInt!
    collateralAmountUsd: BigDecimal
}

type BasePoolSnapshot @entity {
    id: ID!
    timestamp: Int!
    blockDate: String!
    chainId: Int!
    poolAddress: String!
    underlyingTokenAddress: String!
    underlyingTokenSymbol: String!
    underlyingTokenPriceUsd: BigDecimal
    availableAmount: BigInt!
    availableAmountUsd: BigDecimal
    suppliedAmount: BigInt!
    suppliedAmountUsd: BigDecimal
    collateralAmount: BigInt!
    collateralAmountUsd: BigDecimal
    collateralFactor: BigDecimal!
    supplyIndex: BigInt!
    supplyApr: BigInt!
    borrowedAmount: BigInt!
    borrowedAmountUsd: BigDecimal
    borrowIndex: BigInt!
    borrowApr: BigInt!
    totalFeesUsd: BigDecimal
    userFeesUsd: BigDecimal
    protocolFeesUsd: BigDecimal
}

type CollateralPosition @entity {
    id: ID!
    chainId: Int!
    poolAddress: String!
    underlyingTokenAddress: String!
    underlyingTokenSymbol: String!
    userAddress: String!
    suppliedAmount: BigInt!
    suppliedAmountUsd: BigDecimal
    borrowedAmount: BigInt!
    borrowedAmountUsd: BigDecimal
    collateralAmount: BigInt!
    collateralAmountUsd: BigDecimal
}

type CollateralPool @entity {
    id: ID!
    chainId: Int!
    poolAddress: String!
    underlyingTokenAddress: String!
    underlyingTokenSymbol: String!
    underlyingTokenPriceUsd: BigDecimal
    availableAmount: BigInt!
    availableAmountUsd: BigDecimal
    suppliedAmount: BigInt!
    suppliedAmountUsd: BigDecimal
    collateralAmount: BigInt!
    collateralAmountUsd: BigDecimal
    collateralFactor: BigDecimal!
    supplyIndex: BigInt!
    supplyApr: BigInt!
    borrowedAmount: BigInt!
    borrowedAmountUsd: BigDecimal
    borrowIndex: BigInt!
    borrowApr: BigInt!
    totalFeesUsd: BigDecimal
    userFeesUsd: BigDecimal
    protocolFeesUsd: BigDecimal
}

type CollateralPositionSnapshot @entity {
    id: ID!
    timestamp: Int!
    blockDate: String!
    chainId: Int!
    poolAddress: String!
    underlyingTokenAddress: String!
    underlyingTokenSymbol: String!
    userAddress: String!
    suppliedAmount: BigInt!
    suppliedAmountUsd: BigDecimal
    borrowedAmount: BigInt!
    borrowedAmountUsd: BigDecimal
    collateralAmount: BigInt!
    collateralAmountUsd: BigDecimal
}

type CollateralPoolSnapshot @entity {
    id: ID!
    timestamp: Int!
    blockDate: String!
    chainId: Int!
    poolAddress: String!
    underlyingTokenAddress: String!
    underlyingTokenSymbol: String!
    underlyingTokenPriceUsd: BigDecimal
    availableAmount: BigInt!
    availableAmountUsd: BigDecimal
    suppliedAmount: BigInt!
    suppliedAmountUsd: BigDecimal
    collateralAmount: BigInt!
    collateralAmountUsd: BigDecimal
    collateralFactor: BigDecimal!
    supplyIndex: BigInt!
    supplyApr: BigInt!
    borrowedAmount: BigInt!
    borrowedAmountUsd: BigDecimal
    borrowIndex: BigInt!
    borrowApr: BigInt!
    totalFeesUsd: BigDecimal
    userFeesUsd: BigDecimal
    protocolFeesUsd: BigDecimal
}`
DatabaseSchema.register({
  source,
  entities: {
    "MarketBasic": MarketBasic,
		"UserBasic": UserBasic,
		"MarketConfiguration": MarketConfiguration,
		"CollateralConfiguration": CollateralConfiguration,
		"Pool": Pool,
		"BasePositionSnapshot": BasePositionSnapshot,
		"BasePoolSnapshot": BasePoolSnapshot,
		"CollateralPosition": CollateralPosition,
		"CollateralPool": CollateralPool,
		"CollateralPositionSnapshot": CollateralPositionSnapshot,
		"CollateralPoolSnapshot": CollateralPoolSnapshot
  }
})