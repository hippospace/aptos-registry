import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient} from "aptos";
import * as std$_ from "../std";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "system_addresses";

export const ENOT_CORE_FRAMEWORK_ADDRESS : U64 = u64("2");
export const ENOT_CORE_RESOURCE_ADDRESS : U64 = u64("0");
export const EVM : U64 = u64("1");

export function assert_aptos_framework$ (
  account: HexString,
  $c: AptosDataCache,
): void {
  if (!(std$_.signer$_.address_of$(account, $c).hex() === new HexString("0x1").hex())) {
    throw $.abortCode(std$_.error$_.permission_denied$(ENOT_CORE_FRAMEWORK_ADDRESS, $c));
  }
  return;
}

export function assert_core_resource$ (
  account: HexString,
  $c: AptosDataCache,
): void {
  return assert_core_resource_address$(std$_.signer$_.address_of$(account, $c), $c);
}

export function assert_core_resource_address$ (
  addr: HexString,
  $c: AptosDataCache,
): void {
  if (!is_core_resource_address$($.copy(addr), $c)) {
    throw $.abortCode(std$_.error$_.permission_denied$(ENOT_CORE_RESOURCE_ADDRESS, $c));
  }
  return;
}

export function assert_vm$ (
  account: HexString,
  $c: AptosDataCache,
): void {
  if (!(std$_.signer$_.address_of$(account, $c).hex() === new HexString("0x0").hex())) {
    throw $.abortCode(std$_.error$_.permission_denied$(EVM, $c));
  }
  return;
}

export function is_core_resource_address$ (
  addr: HexString,
  $c: AptosDataCache,
): boolean {
  return ($.copy(addr).hex() === new HexString("0xa550c18").hex());
}

export function loadParsers(repo: AptosParserRepo) {
}

