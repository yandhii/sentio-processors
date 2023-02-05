/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

/* Generated modules for account 0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa */

import { aptos } from "@sentio/sdk";
import { Address, MoveModule } from "aptos-sdk/src/generated";

import * as _0x1 from "@sentio/sdk/lib/builtin/aptos/0x1";

export namespace math {
  export function loadTypes(_r: aptos.TypeRegistry) {
    loadAllTypes(_r);
  }
  export const ABI: MoveModule = JSON.parse(
    '{"address":"0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa","name":"math","friends":[],"exposed_functions":[{"name":"max","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u128","u128"],"return":["u128"]},{"name":"max_u64","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u64","u64"],"return":["u64"]},{"name":"min","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u128","u128"],"return":["u128"]},{"name":"pow","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u128","u8"],"return":["u128"]},{"name":"sqrt","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u128"],"return":["u128"]}],"structs":[]}'
  );
}

export class swap extends aptos.AptosBaseProcessor {
  constructor(options: aptos.AptosBindOptions) {
    super("swap", options);
  }
  static DEFAULT_OPTIONS: aptos.AptosBindOptions = {
    address:
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa",
    network: aptos.AptosNetwork.MAIN_NET,
  };

  static bind(options: Partial<aptos.AptosBindOptions> = {}): swap {
    return new swap({ ...swap.DEFAULT_OPTIONS, ...options });
  }

  onEntrySetAdmin(
    func: (call: swap.SetAdminPayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): swap {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "swap::set_admin",
    });
    return this;
  }

  onEntrySetFeeTo(
    func: (call: swap.SetFeeToPayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): swap {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "swap::set_fee_to",
    });
    return this;
  }

  onEntryUpgradeSwap(
    func: (call: swap.UpgradeSwapPayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): swap {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "swap::upgrade_swap",
    });
    return this;
  }

  onEntryWithdrawFee(
    func: (call: swap.WithdrawFeePayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): swap {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "swap::withdraw_fee",
    });
    return this;
  }

  onEventAddLiquidityEvent(
    func: (
      event: swap.AddLiquidityEventInstance,
      ctx: aptos.AptosContext
    ) => void
  ): swap {
    this.onEvent(func, {
      type: "swap::AddLiquidityEvent",
    });
    return this;
  }

  onEventRemoveLiquidityEvent(
    func: (
      event: swap.RemoveLiquidityEventInstance,
      ctx: aptos.AptosContext
    ) => void
  ): swap {
    this.onEvent(func, {
      type: "swap::RemoveLiquidityEvent",
    });
    return this;
  }

  onEventSwapEvent(
    func: (event: swap.SwapEventInstance, ctx: aptos.AptosContext) => void
  ): swap {
    this.onEvent(func, {
      type: "swap::SwapEvent",
    });
    return this;
  }

  onEventPairCreatedEvent(
    func: (
      event: swap.PairCreatedEventInstance,
      ctx: aptos.AptosContext
    ) => void
  ): swap {
    this.onEvent(func, {
      type: "swap::PairCreatedEvent",
    });
    return this;
  }

  loadTypesInternal(registry: aptos.TypeRegistry) {
    loadAllTypes(registry);
  }
}

export namespace swap {
  export class AddLiquidityEvent<T0, T1> {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::AddLiquidityEvent";
    user: Address;
    amount_x: bigint;
    amount_y: bigint;
    liquidity: bigint;
    fee_amount: bigint;
  }

  export interface AddLiquidityEventInstance
    extends aptos.TypedEventInstance<AddLiquidityEvent<any, any>> {
    data_decoded: AddLiquidityEvent<any, any>;
    type_arguments: [string, string];
  }

  export class LPToken<T0, T1> {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken";
    dummy_field: Boolean;
  }

  export class PairCreatedEvent {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::PairCreatedEvent";
    user: Address;
    token_x: string;
    token_y: string;
  }

  export interface PairCreatedEventInstance
    extends aptos.TypedEventInstance<PairCreatedEvent> {
    data_decoded: PairCreatedEvent;
    type_arguments: [];
  }

  export class PairEventHolder<T0, T1> {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::PairEventHolder";
    add_liquidity: _0x1.event.EventHandle<swap.AddLiquidityEvent<T0, T1>>;
    remove_liquidity: _0x1.event.EventHandle<swap.RemoveLiquidityEvent<T0, T1>>;
    swap: _0x1.event.EventHandle<swap.SwapEvent<T0, T1>>;
  }

  export class RemoveLiquidityEvent<T0, T1> {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::RemoveLiquidityEvent";
    user: Address;
    liquidity: bigint;
    amount_x: bigint;
    amount_y: bigint;
    fee_amount: bigint;
  }

  export interface RemoveLiquidityEventInstance
    extends aptos.TypedEventInstance<RemoveLiquidityEvent<any, any>> {
    data_decoded: RemoveLiquidityEvent<any, any>;
    type_arguments: [string, string];
  }

  export class SwapEvent<T0, T1> {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::SwapEvent";
    user: Address;
    amount_x_in: bigint;
    amount_y_in: bigint;
    amount_x_out: bigint;
    amount_y_out: bigint;
  }

  export interface SwapEventInstance
    extends aptos.TypedEventInstance<SwapEvent<any, any>> {
    data_decoded: SwapEvent<any, any>;
    type_arguments: [string, string];
  }

  export class SwapInfo {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::SwapInfo";
    signer_cap: _0x1.account.SignerCapability;
    fee_to: Address;
    admin: Address;
    pair_created: _0x1.event.EventHandle<swap.PairCreatedEvent>;
  }

  export class TokenPairMetadata<T0, T1> {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairMetadata";
    creator: Address;
    fee_amount: _0x1.coin.Coin<swap.LPToken<T0, T1>>;
    k_last: bigint;
    balance_x: _0x1.coin.Coin<T0>;
    balance_y: _0x1.coin.Coin<T1>;
    mint_cap: _0x1.coin.MintCapability<swap.LPToken<T0, T1>>;
    burn_cap: _0x1.coin.BurnCapability<swap.LPToken<T0, T1>>;
    freeze_cap: _0x1.coin.FreezeCapability<swap.LPToken<T0, T1>>;
  }

  export class TokenPairReserve<T0, T1> {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve";
    reserve_x: bigint;
    reserve_y: bigint;
    block_timestamp_last: bigint;
  }

  export interface SetAdminPayload
    extends aptos.TypedEntryFunctionPayload<[Address]> {
    arguments_typed: [Address];
    type_arguments: [];
  }

  export interface SetFeeToPayload
    extends aptos.TypedEntryFunctionPayload<[Address]> {
    arguments_typed: [Address];
    type_arguments: [];
  }

  export interface UpgradeSwapPayload
    extends aptos.TypedEntryFunctionPayload<[string, string[]]> {
    arguments_typed: [string, string[]];
    type_arguments: [];
  }

  export interface WithdrawFeePayload<T0 = any, T1 = any>
    extends aptos.TypedEntryFunctionPayload<[]> {
    arguments_typed: [];
    type_arguments: [string, string];
  }

  export function loadTypes(_r: aptos.TypeRegistry) {
    loadAllTypes(_r);
  }
  export const ABI: MoveModule = JSON.parse(
    '{"address":"0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa","name":"swap","friends":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::router"],"exposed_functions":[{"name":"add_liquidity","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64"],"return":["u64","u64","u64"]},{"name":"add_swap_event","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64","u64","u64"],"return":[]},{"name":"add_swap_event_with_address","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["address","u64","u64","u64","u64"],"return":[]},{"name":"admin","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["address"]},{"name":"check_or_register_coin_store","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]}],"params":["&signer"],"return":[]},{"name":"create_pair","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer"],"return":[]},{"name":"fee_to","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["address"]},{"name":"is_pair_created","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":[],"return":["bool"]},{"name":"lp_balance","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["address"],"return":["u64"]},{"name":"register_lp","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer"],"return":[]},{"name":"remove_liquidity","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64"],"return":["u64","u64"]},{"name":"set_admin","visibility":"public","is_entry":true,"generic_type_params":[],"params":["&signer","address"],"return":[]},{"name":"set_fee_to","visibility":"public","is_entry":true,"generic_type_params":[],"params":["&signer","address"],"return":[]},{"name":"swap_exact_x_to_y","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","address"],"return":["u64"]},{"name":"swap_exact_x_to_y_direct","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["0x1::coin::Coin<T0>"],"return":["0x1::coin::Coin<T0>","0x1::coin::Coin<T1>"]},{"name":"swap_exact_y_to_x","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","address"],"return":["u64"]},{"name":"swap_exact_y_to_x_direct","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["0x1::coin::Coin<T1>"],"return":["0x1::coin::Coin<T0>","0x1::coin::Coin<T1>"]},{"name":"swap_x_to_exact_y","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64","address"],"return":["u64"]},{"name":"swap_x_to_exact_y_direct","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["0x1::coin::Coin<T0>","u64"],"return":["0x1::coin::Coin<T0>","0x1::coin::Coin<T1>"]},{"name":"swap_y_to_exact_x","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64","address"],"return":["u64"]},{"name":"swap_y_to_exact_x_direct","visibility":"friend","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["0x1::coin::Coin<T1>","u64"],"return":["0x1::coin::Coin<T0>","0x1::coin::Coin<T1>"]},{"name":"token_balances","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":[],"return":["u64","u64"]},{"name":"token_reserves","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":[],"return":["u64","u64","u64"]},{"name":"total_lp_supply","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":[],"return":["u128"]},{"name":"upgrade_swap","visibility":"public","is_entry":true,"generic_type_params":[],"params":["&signer","vector<u8>","vector<vector<u8>>"],"return":[]},{"name":"withdraw_fee","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer"],"return":[]}],"structs":[{"name":"AddLiquidityEvent","is_native":false,"abilities":["drop","store"],"generic_type_params":[{"constraints":[]},{"constraints":[]}],"fields":[{"name":"user","type":"address"},{"name":"amount_x","type":"u64"},{"name":"amount_y","type":"u64"},{"name":"liquidity","type":"u64"},{"name":"fee_amount","type":"u64"}]},{"name":"LPToken","is_native":false,"abilities":["key"],"generic_type_params":[{"constraints":[]},{"constraints":[]}],"fields":[{"name":"dummy_field","type":"bool"}]},{"name":"PairCreatedEvent","is_native":false,"abilities":["drop","store"],"generic_type_params":[],"fields":[{"name":"user","type":"address"},{"name":"token_x","type":"0x1::string::String"},{"name":"token_y","type":"0x1::string::String"}]},{"name":"PairEventHolder","is_native":false,"abilities":["key"],"generic_type_params":[{"constraints":[]},{"constraints":[]}],"fields":[{"name":"add_liquidity","type":"0x1::event::EventHandle<0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::AddLiquidityEvent<T0, T1>>"},{"name":"remove_liquidity","type":"0x1::event::EventHandle<0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::RemoveLiquidityEvent<T0, T1>>"},{"name":"swap","type":"0x1::event::EventHandle<0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::SwapEvent<T0, T1>>"}]},{"name":"RemoveLiquidityEvent","is_native":false,"abilities":["drop","store"],"generic_type_params":[{"constraints":[]},{"constraints":[]}],"fields":[{"name":"user","type":"address"},{"name":"liquidity","type":"u64"},{"name":"amount_x","type":"u64"},{"name":"amount_y","type":"u64"},{"name":"fee_amount","type":"u64"}]},{"name":"SwapEvent","is_native":false,"abilities":["drop","store"],"generic_type_params":[{"constraints":[]},{"constraints":[]}],"fields":[{"name":"user","type":"address"},{"name":"amount_x_in","type":"u64"},{"name":"amount_y_in","type":"u64"},{"name":"amount_x_out","type":"u64"},{"name":"amount_y_out","type":"u64"}]},{"name":"SwapInfo","is_native":false,"abilities":["key"],"generic_type_params":[],"fields":[{"name":"signer_cap","type":"0x1::account::SignerCapability"},{"name":"fee_to","type":"address"},{"name":"admin","type":"address"},{"name":"pair_created","type":"0x1::event::EventHandle<0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::PairCreatedEvent>"}]},{"name":"TokenPairMetadata","is_native":false,"abilities":["key"],"generic_type_params":[{"constraints":[]},{"constraints":[]}],"fields":[{"name":"creator","type":"address"},{"name":"fee_amount","type":"0x1::coin::Coin<0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<T0, T1>>"},{"name":"k_last","type":"u128"},{"name":"balance_x","type":"0x1::coin::Coin<T0>"},{"name":"balance_y","type":"0x1::coin::Coin<T1>"},{"name":"mint_cap","type":"0x1::coin::MintCapability<0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<T0, T1>>"},{"name":"burn_cap","type":"0x1::coin::BurnCapability<0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<T0, T1>>"},{"name":"freeze_cap","type":"0x1::coin::FreezeCapability<0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<T0, T1>>"}]},{"name":"TokenPairReserve","is_native":false,"abilities":["key"],"generic_type_params":[{"constraints":[]},{"constraints":[]}],"fields":[{"name":"reserve_x","type":"u64"},{"name":"reserve_y","type":"u64"},{"name":"block_timestamp_last","type":"u64"}]}]}'
  );
}

export namespace u256 {
  export class DU256 {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::DU256";
    v0: bigint;
    v1: bigint;
    v2: bigint;
    v3: bigint;
    v4: bigint;
    v5: bigint;
    v6: bigint;
    v7: bigint;
  }

  export class U256 {
    static TYPE_QNAME =
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256";
    v0: bigint;
    v1: bigint;
    v2: bigint;
    v3: bigint;
  }

  export function loadTypes(_r: aptos.TypeRegistry) {
    loadAllTypes(_r);
  }
  export const ABI: MoveModule = JSON.parse(
    '{"address":"0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa","name":"u256","friends":[],"exposed_functions":[{"name":"add","visibility":"public","is_entry":false,"generic_type_params":[],"params":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"and","visibility":"public","is_entry":false,"generic_type_params":[],"params":["&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"as_u128","visibility":"public","is_entry":false,"generic_type_params":[],"params":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["u128"]},{"name":"as_u64","visibility":"public","is_entry":false,"generic_type_params":[],"params":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["u64"]},{"name":"compare","visibility":"public","is_entry":false,"generic_type_params":[],"params":["&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["u8"]},{"name":"div","visibility":"public","is_entry":false,"generic_type_params":[],"params":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"from_bytes","visibility":"public","is_entry":false,"generic_type_params":[],"params":["&vector<u8>"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"from_u128","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u128"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"from_u64","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u64"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"get","visibility":"public","is_entry":false,"generic_type_params":[],"params":["&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","u64"],"return":["u64"]},{"name":"get_equal","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["u8"]},{"name":"get_greater_than","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["u8"]},{"name":"get_less_than","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["u8"]},{"name":"mul","visibility":"public","is_entry":false,"generic_type_params":[],"params":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"or","visibility":"public","is_entry":false,"generic_type_params":[],"params":["&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"shl","visibility":"public","is_entry":false,"generic_type_params":[],"params":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","u8"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"shr","visibility":"public","is_entry":false,"generic_type_params":[],"params":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","u8"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"sub","visibility":"public","is_entry":false,"generic_type_params":[],"params":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"to_bytes","visibility":"public","is_entry":false,"generic_type_params":[],"params":["&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["vector<u8>"]},{"name":"xor","visibility":"public","is_entry":false,"generic_type_params":[],"params":["&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256","&0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]},{"name":"zero","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::u256::U256"]}],"structs":[{"name":"DU256","is_native":false,"abilities":["copy","drop","store"],"generic_type_params":[],"fields":[{"name":"v0","type":"u64"},{"name":"v1","type":"u64"},{"name":"v2","type":"u64"},{"name":"v3","type":"u64"},{"name":"v4","type":"u64"},{"name":"v5","type":"u64"},{"name":"v6","type":"u64"},{"name":"v7","type":"u64"}]},{"name":"U256","is_native":false,"abilities":["copy","drop","store"],"generic_type_params":[],"fields":[{"name":"v0","type":"u64"},{"name":"v1","type":"u64"},{"name":"v2","type":"u64"},{"name":"v3","type":"u64"}]}]}'
  );
}

export class router extends aptos.AptosBaseProcessor {
  constructor(options: aptos.AptosBindOptions) {
    super("router", options);
  }
  static DEFAULT_OPTIONS: aptos.AptosBindOptions = {
    address:
      "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa",
    network: aptos.AptosNetwork.MAIN_NET,
  };

  static bind(options: Partial<aptos.AptosBindOptions> = {}): router {
    return new router({ ...router.DEFAULT_OPTIONS, ...options });
  }

  onEntryAddLiquidity(
    func: (call: router.AddLiquidityPayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::add_liquidity",
    });
    return this;
  }

  onEntryCreatePair(
    func: (call: router.CreatePairPayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::create_pair",
    });
    return this;
  }

  onEntryRegisterLp(
    func: (call: router.RegisterLpPayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::register_lp",
    });
    return this;
  }

  onEntryRegisterToken(
    func: (call: router.RegisterTokenPayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::register_token",
    });
    return this;
  }

  onEntryRemoveLiquidity(
    func: (
      call: router.RemoveLiquidityPayload,
      ctx: aptos.AptosContext
    ) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::remove_liquidity",
    });
    return this;
  }

  onEntrySwapExactInput(
    func: (call: router.SwapExactInputPayload, ctx: aptos.AptosContext) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::swap_exact_input",
    });
    return this;
  }

  onEntrySwapExactInputDoublehop(
    func: (
      call: router.SwapExactInputDoublehopPayload,
      ctx: aptos.AptosContext
    ) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::swap_exact_input_doublehop",
    });
    return this;
  }

  onEntrySwapExactInputTriplehop(
    func: (
      call: router.SwapExactInputTriplehopPayload,
      ctx: aptos.AptosContext
    ) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::swap_exact_input_triplehop",
    });
    return this;
  }

  onEntrySwapExactOutput(
    func: (
      call: router.SwapExactOutputPayload,
      ctx: aptos.AptosContext
    ) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::swap_exact_output",
    });
    return this;
  }

  onEntrySwapExactOutputDoublehop(
    func: (
      call: router.SwapExactOutputDoublehopPayload,
      ctx: aptos.AptosContext
    ) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::swap_exact_output_doublehop",
    });
    return this;
  }

  onEntrySwapExactOutputTriplehop(
    func: (
      call: router.SwapExactOutputTriplehopPayload,
      ctx: aptos.AptosContext
    ) => void,
    filter?: aptos.CallFilter
  ): router {
    this.onEntryFunctionCall(func, {
      ...filter,
      function: "router::swap_exact_output_triplehop",
    });
    return this;
  }

  loadTypesInternal(registry: aptos.TypeRegistry) {
    loadAllTypes(registry);
  }
}

export namespace router {
  export interface AddLiquidityPayload<T0 = any, T1 = any>
    extends aptos.TypedEntryFunctionPayload<[bigint, bigint, bigint, bigint]> {
    arguments_typed: [bigint, bigint, bigint, bigint];
    type_arguments: [string, string];
  }

  export interface CreatePairPayload<T0 = any, T1 = any>
    extends aptos.TypedEntryFunctionPayload<[]> {
    arguments_typed: [];
    type_arguments: [string, string];
  }

  export interface RegisterLpPayload<T0 = any, T1 = any>
    extends aptos.TypedEntryFunctionPayload<[]> {
    arguments_typed: [];
    type_arguments: [string, string];
  }

  export interface RegisterTokenPayload<T0 = any>
    extends aptos.TypedEntryFunctionPayload<[]> {
    arguments_typed: [];
    type_arguments: [string];
  }

  export interface RemoveLiquidityPayload<T0 = any, T1 = any>
    extends aptos.TypedEntryFunctionPayload<[bigint, bigint, bigint]> {
    arguments_typed: [bigint, bigint, bigint];
    type_arguments: [string, string];
  }

  export interface SwapExactInputPayload<T0 = any, T1 = any>
    extends aptos.TypedEntryFunctionPayload<[bigint, bigint]> {
    arguments_typed: [bigint, bigint];
    type_arguments: [string, string];
  }

  export interface SwapExactInputDoublehopPayload<T0 = any, T1 = any, T2 = any>
    extends aptos.TypedEntryFunctionPayload<[bigint, bigint]> {
    arguments_typed: [bigint, bigint];
    type_arguments: [string, string, string];
  }

  export interface SwapExactInputTriplehopPayload<
    T0 = any,
    T1 = any,
    T2 = any,
    T3 = any
  > extends aptos.TypedEntryFunctionPayload<[bigint, bigint]> {
    arguments_typed: [bigint, bigint];
    type_arguments: [string, string, string, string];
  }

  export interface SwapExactOutputPayload<T0 = any, T1 = any>
    extends aptos.TypedEntryFunctionPayload<[bigint, bigint]> {
    arguments_typed: [bigint, bigint];
    type_arguments: [string, string];
  }

  export interface SwapExactOutputDoublehopPayload<T0 = any, T1 = any, T2 = any>
    extends aptos.TypedEntryFunctionPayload<[bigint, bigint]> {
    arguments_typed: [bigint, bigint];
    type_arguments: [string, string, string];
  }

  export interface SwapExactOutputTriplehopPayload<
    T0 = any,
    T1 = any,
    T2 = any,
    T3 = any
  > extends aptos.TypedEntryFunctionPayload<[bigint, bigint]> {
    arguments_typed: [bigint, bigint];
    type_arguments: [string, string, string, string];
  }

  export function loadTypes(_r: aptos.TypeRegistry) {
    loadAllTypes(_r);
  }
  export const ABI: MoveModule = JSON.parse(
    '{"address":"0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa","name":"router","friends":[],"exposed_functions":[{"name":"add_liquidity","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64","u64","u64"],"return":[]},{"name":"create_pair","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer"],"return":[]},{"name":"register_lp","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer"],"return":[]},{"name":"register_token","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]}],"params":["&signer"],"return":[]},{"name":"remove_liquidity","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64","u64"],"return":[]},{"name":"swap_exact_input","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64"],"return":[]},{"name":"swap_exact_input_doublehop","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64"],"return":[]},{"name":"swap_exact_input_triplehop","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]},{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64"],"return":[]},{"name":"swap_exact_output","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64"],"return":[]},{"name":"swap_exact_output_doublehop","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64"],"return":[]},{"name":"swap_exact_output_triplehop","visibility":"public","is_entry":true,"generic_type_params":[{"constraints":[]},{"constraints":[]},{"constraints":[]},{"constraints":[]}],"params":["&signer","u64","u64"],"return":[]},{"name":"swap_exact_x_to_y_direct_external","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":["0x1::coin::Coin<T0>"],"return":["0x1::coin::Coin<T1>"]}],"structs":[]}'
  );
}

export namespace swap_utils {
  export function loadTypes(_r: aptos.TypeRegistry) {
    loadAllTypes(_r);
  }
  export const ABI: MoveModule = JSON.parse(
    '{"address":"0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa","name":"swap_utils","friends":[],"exposed_functions":[{"name":"get_amount_in","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u64","u64","u64"],"return":["u64"]},{"name":"get_amount_out","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u64","u64","u64"],"return":["u64"]},{"name":"get_equal_enum","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["u8"]},{"name":"get_greater_enum","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["u8"]},{"name":"get_smaller_enum","visibility":"public","is_entry":false,"generic_type_params":[],"params":[],"return":["u8"]},{"name":"get_token_info","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]}],"params":[],"return":["vector<u8>"]},{"name":"quote","visibility":"public","is_entry":false,"generic_type_params":[],"params":["u64","u64","u64"],"return":["u64"]},{"name":"sort_token_type","visibility":"public","is_entry":false,"generic_type_params":[{"constraints":[]},{"constraints":[]}],"params":[],"return":["bool"]}],"structs":[]}'
  );
}

export function loadAllTypes(_r: aptos.TypeRegistry) {
  _0x1.loadAllTypes(_r);

  _r.load(math.ABI);
  _r.load(swap.ABI);
  _r.load(u256.ABI);
  _r.load(router.ABI);
  _r.load(swap_utils.ABI);
}
