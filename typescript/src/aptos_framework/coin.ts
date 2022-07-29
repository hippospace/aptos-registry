import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient} from "aptos";
import * as aptos_std$_ from "../aptos_std";
import * as std$_ from "../std";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "coin";

export const ECOIN_INFO_ADDRESS_MISMATCH : U64 = u64("0");
export const ECOIN_INFO_ALREADY_PUBLISHED : U64 = u64("1");
export const ECOIN_INFO_NOT_PUBLISHED : U64 = u64("2");
export const ECOIN_STORE_ALREADY_PUBLISHED : U64 = u64("3");
export const ECOIN_STORE_NOT_PUBLISHED : U64 = u64("4");
export const EDESTRUCTION_OF_NONZERO_TOKEN : U64 = u64("6");
export const EINSUFFICIENT_BALANCE : U64 = u64("5");
export const EINVALID_COIN_AMOUNT : U64 = u64("8");
export const ETOTAL_SUPPLY_OVERFLOW : U64 = u64("7");
export const MAX_U128 : U128 = u128("340282366920938463463374607431768211455");


export class BurnCapability 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "BurnCapability";
  static typeParameters: TypeParamDeclType[] = [
    { name: "CoinType", isPhantom: true }
  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static BurnCapabilityParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : BurnCapability {
    const proto = $.parseStructProto(data, typeTag, repo, BurnCapability);
    return new BurnCapability(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, BurnCapability, typeParams);
    return result as unknown as BurnCapability;
  }
}

export class Coin 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "Coin";
  static typeParameters: TypeParamDeclType[] = [
    { name: "CoinType", isPhantom: true }
  ];
  static fields: FieldDeclType[] = [
  { name: "value", typeTag: AtomicTypeTag.U64 }];

  value: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.value = proto['value'] as U64;
  }

  static CoinParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : Coin {
    const proto = $.parseStructProto(data, typeTag, repo, Coin);
    return new Coin(proto, typeTag);
  }

}

export class CoinEvents 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "CoinEvents";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "register_events", typeTag: new StructTag(new HexString("0x1"), "event", "EventHandle", [new StructTag(new HexString("0x1"), "coin", "RegisterEvent", [])]) }];

  register_events: aptos_std$_.event$_.EventHandle;

  constructor(proto: any, public typeTag: TypeTag) {
    this.register_events = proto['register_events'] as aptos_std$_.event$_.EventHandle;
  }

  static CoinEventsParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : CoinEvents {
    const proto = $.parseStructProto(data, typeTag, repo, CoinEvents);
    return new CoinEvents(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, CoinEvents, typeParams);
    return result as unknown as CoinEvents;
  }
}

export class CoinInfo 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "CoinInfo";
  static typeParameters: TypeParamDeclType[] = [
    { name: "CoinType", isPhantom: true }
  ];
  static fields: FieldDeclType[] = [
  { name: "name", typeTag: new StructTag(new HexString("0x1"), "string", "String", []) },
  { name: "symbol", typeTag: new StructTag(new HexString("0x1"), "string", "String", []) },
  { name: "decimals", typeTag: AtomicTypeTag.U64 },
  { name: "supply", typeTag: new StructTag(new HexString("0x1"), "option", "Option", [AtomicTypeTag.U128]) }];

  name: std$_.string$_.String;
  symbol: std$_.string$_.String;
  decimals: U64;
  supply: std$_.option$_.Option;

  constructor(proto: any, public typeTag: TypeTag) {
    this.name = proto['name'] as std$_.string$_.String;
    this.symbol = proto['symbol'] as std$_.string$_.String;
    this.decimals = proto['decimals'] as U64;
    this.supply = proto['supply'] as std$_.option$_.Option;
  }

  static CoinInfoParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : CoinInfo {
    const proto = $.parseStructProto(data, typeTag, repo, CoinInfo);
    return new CoinInfo(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, CoinInfo, typeParams);
    return result as unknown as CoinInfo;
  }
}

export class CoinStore 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "CoinStore";
  static typeParameters: TypeParamDeclType[] = [
    { name: "CoinType", isPhantom: true }
  ];
  static fields: FieldDeclType[] = [
  { name: "coin", typeTag: new StructTag(new HexString("0x1"), "coin", "Coin", [new $.TypeParamIdx(0)]) },
  { name: "deposit_events", typeTag: new StructTag(new HexString("0x1"), "event", "EventHandle", [new StructTag(new HexString("0x1"), "coin", "DepositEvent", [])]) },
  { name: "withdraw_events", typeTag: new StructTag(new HexString("0x1"), "event", "EventHandle", [new StructTag(new HexString("0x1"), "coin", "WithdrawEvent", [])]) }];

  coin: Coin;
  deposit_events: aptos_std$_.event$_.EventHandle;
  withdraw_events: aptos_std$_.event$_.EventHandle;

  constructor(proto: any, public typeTag: TypeTag) {
    this.coin = proto['coin'] as Coin;
    this.deposit_events = proto['deposit_events'] as aptos_std$_.event$_.EventHandle;
    this.withdraw_events = proto['withdraw_events'] as aptos_std$_.event$_.EventHandle;
  }

  static CoinStoreParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : CoinStore {
    const proto = $.parseStructProto(data, typeTag, repo, CoinStore);
    return new CoinStore(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, CoinStore, typeParams);
    return result as unknown as CoinStore;
  }
}

export class DepositEvent 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "DepositEvent";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "amount", typeTag: AtomicTypeTag.U64 }];

  amount: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.amount = proto['amount'] as U64;
  }

  static DepositEventParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DepositEvent {
    const proto = $.parseStructProto(data, typeTag, repo, DepositEvent);
    return new DepositEvent(proto, typeTag);
  }

}

export class MintCapability 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "MintCapability";
  static typeParameters: TypeParamDeclType[] = [
    { name: "CoinType", isPhantom: true }
  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static MintCapabilityParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : MintCapability {
    const proto = $.parseStructProto(data, typeTag, repo, MintCapability);
    return new MintCapability(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, MintCapability, typeParams);
    return result as unknown as MintCapability;
  }
}

export class RegisterEvent 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "RegisterEvent";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "type_info", typeTag: new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []) }];

  type_info: aptos_std$_.type_info$_.TypeInfo;

  constructor(proto: any, public typeTag: TypeTag) {
    this.type_info = proto['type_info'] as aptos_std$_.type_info$_.TypeInfo;
  }

  static RegisterEventParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : RegisterEvent {
    const proto = $.parseStructProto(data, typeTag, repo, RegisterEvent);
    return new RegisterEvent(proto, typeTag);
  }

}

export class WithdrawEvent 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "WithdrawEvent";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "amount", typeTag: AtomicTypeTag.U64 }];

  amount: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.amount = proto['amount'] as U64;
  }

  static WithdrawEventParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : WithdrawEvent {
    const proto = $.parseStructProto(data, typeTag, repo, WithdrawEvent);
    return new WithdrawEvent(proto, typeTag);
  }

}
export function balance$ (
  owner: HexString,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): U64 {
  if (!is_account_registered$($.copy(owner), $c, [$p[0]] as TypeTag[])) {
    throw $.abortCode(std$_.error$_.not_found$(ECOIN_STORE_NOT_PUBLISHED, $c));
  }
  return $.copy($c.borrow_global<CoinStore>(new StructTag(new HexString("0x1"), "coin", "CoinStore", [$p[0]]), $.copy(owner)).coin.value);
}

export function burn$ (
  coin: Coin,
  _cap: BurnCapability,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let temp$1, coin_addr, supply, supply__2;
  let { value: amount } = coin;
  if (!$.copy(amount).gt(u64("0"))) {
    throw $.abortCode(std$_.error$_.invalid_argument$(EINVALID_COIN_AMOUNT, $c));
  }
  temp$1 = aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]);
  coin_addr = aptos_std$_.type_info$_.account_address$(temp$1, $c);
  supply = $c.borrow_global_mut<CoinInfo>(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), $.copy(coin_addr)).supply;
  if (std$_.option$_.is_some$(supply, $c, [AtomicTypeTag.U128] as TypeTag[])) {
    supply__2 = std$_.option$_.borrow_mut$(supply, $c, [AtomicTypeTag.U128] as TypeTag[]);
    $.set(supply__2, $.copy(supply__2).sub(u128($.copy(amount))));
  }
  else{
  }
  return;
}

export function burn_from$ (
  account_addr: HexString,
  amount: U64,
  burn_cap: BurnCapability,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let coin_store, coin_to_burn;
  if ($.copy(amount).eq(u64("0"))) {
    return;
  }
  else{
  }
  coin_store = $c.borrow_global_mut<CoinStore>(new StructTag(new HexString("0x1"), "coin", "CoinStore", [$p[0]]), $.copy(account_addr));
  coin_to_burn = extract$(coin_store.coin, $.copy(amount), $c, [$p[0]] as TypeTag[]);
  burn$(coin_to_burn, burn_cap, $c, [$p[0]] as TypeTag[]);
  return;
}

export function decimals$ (
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): U64 {
  let coin_address, type_info;
  type_info = aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]);
  coin_address = aptos_std$_.type_info$_.account_address$(type_info, $c);
  return $.copy($c.borrow_global<CoinInfo>(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), $.copy(coin_address)).decimals);
}

export function deposit$ (
  account_addr: HexString,
  coin: Coin,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let coin_store;
  if (!is_account_registered$($.copy(account_addr), $c, [$p[0]] as TypeTag[])) {
    throw $.abortCode(std$_.error$_.not_found$(ECOIN_STORE_NOT_PUBLISHED, $c));
  }
  coin_store = $c.borrow_global_mut<CoinStore>(new StructTag(new HexString("0x1"), "coin", "CoinStore", [$p[0]]), $.copy(account_addr));
  aptos_std$_.event$_.emit_event$(coin_store.deposit_events, new DepositEvent({ amount: $.copy(coin.value) }, new StructTag(new HexString("0x1"), "coin", "DepositEvent", [])), $c, [new StructTag(new HexString("0x1"), "coin", "DepositEvent", [])] as TypeTag[]);
  merge$(coin_store.coin, coin, $c, [$p[0]] as TypeTag[]);
  return;
}

export function destroy_zero$ (
  zero_coin: Coin,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let { value: value } = zero_coin;
  if (!$.copy(value).eq(u64("0"))) {
    throw $.abortCode(std$_.error$_.invalid_argument$(EDESTRUCTION_OF_NONZERO_TOKEN, $c));
  }
  return;
}

export function extract$ (
  coin: Coin,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Coin {
  if (!$.copy(coin.value).ge($.copy(amount))) {
    throw $.abortCode(std$_.error$_.invalid_argument$(EINSUFFICIENT_BALANCE, $c));
  }
  coin.value = $.copy(coin.value).sub($.copy(amount));
  return new Coin({ value: $.copy(amount) }, new StructTag(new HexString("0x1"), "coin", "Coin", [$p[0]]));
}

export function extract_all$ (
  coin: Coin,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Coin {
  let total_value;
  total_value = $.copy(coin.value);
  coin.value = u64("0");
  return new Coin({ value: $.copy(total_value) }, new StructTag(new HexString("0x1"), "coin", "Coin", [$p[0]]));
}

export function initialize$ (
  account: HexString,
  name: std$_.string$_.String,
  symbol: std$_.string$_.String,
  decimals: U64,
  monitor_supply: boolean,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): [MintCapability, BurnCapability] {
  let temp$1, temp$2, temp$3, temp$4, account_addr, coin_info, type_info;
  account_addr = std$_.signer$_.address_of$(account, $c);
  type_info = aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]);
  if (!(aptos_std$_.type_info$_.account_address$(type_info, $c).hex() === $.copy(account_addr).hex())) {
    throw $.abortCode(std$_.error$_.invalid_argument$(ECOIN_INFO_ADDRESS_MISMATCH, $c));
  }
  if (!!$c.exists(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), $.copy(account_addr))) {
    throw $.abortCode(std$_.error$_.already_exists$(ECOIN_INFO_ALREADY_PUBLISHED, $c));
  }
  temp$4 = $.copy(name);
  temp$3 = $.copy(symbol);
  temp$2 = $.copy(decimals);
  if (monitor_supply) {
    temp$1 = std$_.option$_.some$(u128("0"), $c, [AtomicTypeTag.U128] as TypeTag[]);
  }
  else{
    temp$1 = std$_.option$_.none$($c, [AtomicTypeTag.U128] as TypeTag[]);
  }
  coin_info = new CoinInfo({ name: temp$4, symbol: temp$3, decimals: temp$2, supply: temp$1 }, new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]));
  $c.move_to(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), account, coin_info);
  return [new MintCapability({  }, new StructTag(new HexString("0x1"), "coin", "MintCapability", [$p[0]])), new BurnCapability({  }, new StructTag(new HexString("0x1"), "coin", "BurnCapability", [$p[0]]))];
}

export function is_account_registered$ (
  account_addr: HexString,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): boolean {
  return $c.exists(new StructTag(new HexString("0x1"), "coin", "CoinStore", [$p[0]]), $.copy(account_addr));
}

export function is_coin_initialized$ (
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): boolean {
  let coin_address, type_info;
  type_info = aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]);
  coin_address = aptos_std$_.type_info$_.account_address$(type_info, $c);
  return $c.exists(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), $.copy(coin_address));
}

export function merge$ (
  dst_coin: Coin,
  source_coin: Coin,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  dst_coin.value = $.copy(dst_coin.value).add($.copy(source_coin.value));
  source_coin;
  return;
}

export function mint$ (
  amount: U64,
  _cap: MintCapability,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Coin {
  let temp$1, amount_u128, coin_addr, supply, supply__2;
  if ($.copy(amount).eq(u64("0"))) {
    return zero$($c, [$p[0]] as TypeTag[]);
  }
  else{
  }
  temp$1 = aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]);
  coin_addr = aptos_std$_.type_info$_.account_address$(temp$1, $c);
  supply = $c.borrow_global_mut<CoinInfo>(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), $.copy(coin_addr)).supply;
  if (std$_.option$_.is_some$(supply, $c, [AtomicTypeTag.U128] as TypeTag[])) {
    supply__2 = std$_.option$_.borrow_mut$(supply, $c, [AtomicTypeTag.U128] as TypeTag[]);
    amount_u128 = u128($.copy(amount));
    if (!$.copy(supply__2).le(MAX_U128.sub($.copy(amount_u128)))) {
      throw $.abortCode(std$_.error$_.invalid_argument$(ETOTAL_SUPPLY_OVERFLOW, $c));
    }
    $.set(supply__2, $.copy(supply__2).add($.copy(amount_u128)));
  }
  else{
  }
  return new Coin({ value: $.copy(amount) }, new StructTag(new HexString("0x1"), "coin", "Coin", [$p[0]]));
}

export function name$ (
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): std$_.string$_.String {
  let coin_address, type_info;
  type_info = aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]);
  coin_address = aptos_std$_.type_info$_.account_address$(type_info, $c);
  return $.copy($c.borrow_global<CoinInfo>(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), $.copy(coin_address)).name);
}

export function register$ (
  account: HexString,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  register_internal$(account, $c, [$p[0]] as TypeTag[]);
  return;
}


export function buildPayload_register (
  $p: TypeTag[], /* <CoinType>*/
) {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    "0x1::coin::register",
    typeParamStrings,
    []
  );

}
export function register_internal$ (
  account: HexString,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let account_addr, coin_events, coin_store;
  account_addr = std$_.signer$_.address_of$(account, $c);
  if (!!is_account_registered$($.copy(account_addr), $c, [$p[0]] as TypeTag[])) {
    throw $.abortCode(std$_.error$_.already_exists$(ECOIN_STORE_ALREADY_PUBLISHED, $c));
  }
  if (!$c.exists(new StructTag(new HexString("0x1"), "coin", "CoinEvents", []), $.copy(account_addr))) {
    $c.move_to(new StructTag(new HexString("0x1"), "coin", "CoinEvents", []), account, new CoinEvents({ register_events: aptos_std$_.event$_.new_event_handle$(account, $c, [new StructTag(new HexString("0x1"), "coin", "RegisterEvent", [])] as TypeTag[]) }, new StructTag(new HexString("0x1"), "coin", "CoinEvents", [])));
  }
  else{
  }
  coin_events = $c.borrow_global_mut<CoinEvents>(new StructTag(new HexString("0x1"), "coin", "CoinEvents", []), $.copy(account_addr));
  aptos_std$_.event$_.emit_event$(coin_events.register_events, new RegisterEvent({ type_info: aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]) }, new StructTag(new HexString("0x1"), "coin", "RegisterEvent", [])), $c, [new StructTag(new HexString("0x1"), "coin", "RegisterEvent", [])] as TypeTag[]);
  coin_store = new CoinStore({ coin: new Coin({ value: u64("0") }, new StructTag(new HexString("0x1"), "coin", "Coin", [$p[0]])), deposit_events: aptos_std$_.event$_.new_event_handle$(account, $c, [new StructTag(new HexString("0x1"), "coin", "DepositEvent", [])] as TypeTag[]), withdraw_events: aptos_std$_.event$_.new_event_handle$(account, $c, [new StructTag(new HexString("0x1"), "coin", "WithdrawEvent", [])] as TypeTag[]) }, new StructTag(new HexString("0x1"), "coin", "CoinStore", [$p[0]]));
  $c.move_to(new StructTag(new HexString("0x1"), "coin", "CoinStore", [$p[0]]), account, coin_store);
  return;
}

export function supply$ (
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): std$_.option$_.Option {
  let coin_address, type_info;
  type_info = aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]);
  coin_address = aptos_std$_.type_info$_.account_address$(type_info, $c);
  return $.copy($c.borrow_global<CoinInfo>(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), $.copy(coin_address)).supply);
}

export function symbol$ (
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): std$_.string$_.String {
  let coin_address, type_info;
  type_info = aptos_std$_.type_info$_.type_of$($c, [$p[0]] as TypeTag[]);
  coin_address = aptos_std$_.type_info$_.account_address$(type_info, $c);
  return $.copy($c.borrow_global<CoinInfo>(new StructTag(new HexString("0x1"), "coin", "CoinInfo", [$p[0]]), $.copy(coin_address)).symbol);
}

export function transfer$ (
  from: HexString,
  to: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let coin;
  coin = withdraw$(from, $.copy(amount), $c, [$p[0]] as TypeTag[]);
  deposit$($.copy(to), coin, $c, [$p[0]] as TypeTag[]);
  return;
}


export function buildPayload_transfer (
  to: HexString,
  amount: U64,
  $p: TypeTag[], /* <CoinType>*/
) {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    "0x1::coin::transfer",
    typeParamStrings,
    [
      $.payloadArg(to),
      $.payloadArg(amount),
    ]
  );

}
export function value$ (
  coin: Coin,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): U64 {
  return $.copy(coin.value);
}

export function withdraw$ (
  account: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Coin {
  let account_addr, coin_store;
  account_addr = std$_.signer$_.address_of$(account, $c);
  if (!is_account_registered$($.copy(account_addr), $c, [$p[0]] as TypeTag[])) {
    throw $.abortCode(std$_.error$_.not_found$(ECOIN_STORE_NOT_PUBLISHED, $c));
  }
  coin_store = $c.borrow_global_mut<CoinStore>(new StructTag(new HexString("0x1"), "coin", "CoinStore", [$p[0]]), $.copy(account_addr));
  aptos_std$_.event$_.emit_event$(coin_store.withdraw_events, new WithdrawEvent({ amount: $.copy(amount) }, new StructTag(new HexString("0x1"), "coin", "WithdrawEvent", [])), $c, [new StructTag(new HexString("0x1"), "coin", "WithdrawEvent", [])] as TypeTag[]);
  return extract$(coin_store.coin, $.copy(amount), $c, [$p[0]] as TypeTag[]);
}

export function zero$ (
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Coin {
  return new Coin({ value: u64("0") }, new StructTag(new HexString("0x1"), "coin", "Coin", [$p[0]]));
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x1::coin::BurnCapability", BurnCapability.BurnCapabilityParser);
  repo.addParser("0x1::coin::Coin", Coin.CoinParser);
  repo.addParser("0x1::coin::CoinEvents", CoinEvents.CoinEventsParser);
  repo.addParser("0x1::coin::CoinInfo", CoinInfo.CoinInfoParser);
  repo.addParser("0x1::coin::CoinStore", CoinStore.CoinStoreParser);
  repo.addParser("0x1::coin::DepositEvent", DepositEvent.DepositEventParser);
  repo.addParser("0x1::coin::MintCapability", MintCapability.MintCapabilityParser);
  repo.addParser("0x1::coin::RegisterEvent", RegisterEvent.RegisterEventParser);
  repo.addParser("0x1::coin::WithdrawEvent", WithdrawEvent.WithdrawEventParser);
}

