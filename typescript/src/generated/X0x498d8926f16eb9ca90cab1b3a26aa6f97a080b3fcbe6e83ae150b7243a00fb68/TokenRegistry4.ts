import { HexString } from "aptos";
import bigInt from "big-integer";
import { TypeParamDeclType } from "@manahippo/aptos-tsgen";
import { FieldDeclType } from "@manahippo/aptos-tsgen";
import { parseTypeTagOrThrow } from "@manahippo/aptos-tsgen";
import { TypeTag } from "@manahippo/aptos-tsgen";
import { AptosParserRepo } from "@manahippo/aptos-tsgen";
import { parseStructProto } from "@manahippo/aptos-tsgen";
import { AptosClient } from "aptos";
import { AptosAccount } from "aptos";
import { getTypeTagFullname } from "@manahippo/aptos-tsgen";
import { sendAndWait } from "@manahippo/aptos-tsgen";
import { buildPayload } from "@manahippo/aptos-tsgen";
import { AptosVectorU8 } from "@manahippo/aptos-tsgen";
import * as X0x1 from "../X0x1";

export const moduleAddress = new HexString("0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68");
export const moduleName = "TokenRegistry4";

export const E_ADMIN_ONLY: bigInt.BigInteger = bigInt("1");
export const E_ALREADY_INITIALIZED: bigInt.BigInteger = bigInt("2");
export const E_SYMBOL_ALREADY_EXISTS: bigInt.BigInteger = bigInt("3");
export const E_SYMBOL_DOES_NOT_EXIST: bigInt.BigInteger = bigInt("4");
export const E_TYPE_ALREADY_EXISTS: bigInt.BigInteger = bigInt("4");

export class TokenInfo {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "TokenInfo";
  static typeParameters: TypeParamDeclType[] = [
  ];
  static fields: FieldDeclType[] = [
    {name: "name", typeTag: parseTypeTagOrThrow("0x1::ASCII::String")},
    {name: "symbol", typeTag: parseTypeTagOrThrow("0x1::ASCII::String")},
    {name: "description", typeTag: parseTypeTagOrThrow("0x1::ASCII::String")},
    {name: "decimals", typeTag: parseTypeTagOrThrow("u8")},
    {name: "logo_url", typeTag: parseTypeTagOrThrow("0x1::ASCII::String")},
    {name: "project_url", typeTag: parseTypeTagOrThrow("0x1::ASCII::String")},
    {name: "delisted", typeTag: parseTypeTagOrThrow("bool")},
    {name: "token_type", typeTag: parseTypeTagOrThrow("0x1::TypeInfo::TypeInfo")}
  ];

  name: string;
  symbol: string;
  description: string;
  decimals: number;
  logo_url: string;
  project_url: string;
  delisted: boolean;
  token_type: X0x1.TypeInfo.TypeInfo;

  constructor(proto: any, public typeTag: TypeTag) {
    this.name = proto['name'] as string;
    this.symbol = proto['symbol'] as string;
    this.description = proto['description'] as string;
    this.decimals = proto['decimals'] as number;
    this.logo_url = proto['logo_url'] as string;
    this.project_url = proto['project_url'] as string;
    this.delisted = proto['delisted'] as boolean;
    this.token_type = proto['token_type'] as X0x1.TypeInfo.TypeInfo;
  }

  static TokenInfoParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : TokenInfo {
    const proto = parseStructProto(data, typeTag, repo, TokenInfo);
    return new TokenInfo(proto, typeTag);
  }

}

export class TokenRegistry {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "TokenRegistry";
  static typeParameters: TypeParamDeclType[] = [
  ];
  static fields: FieldDeclType[] = [
    {name: "admin", typeTag: parseTypeTagOrThrow("address")},
    {name: "symbol_to_token_info", typeTag: parseTypeTagOrThrow("0x1::Table::Table<0x1::ASCII::String,0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::TokenInfo>")},
    {name: "type_info_to_symbol", typeTag: parseTypeTagOrThrow("0x1::Table::Table<0x1::TypeInfo::TypeInfo,0x1::ASCII::String>")},
    {name: "symbol_to_list_idx", typeTag: parseTypeTagOrThrow("0x1::Table::Table<0x1::ASCII::String,u64>")},
    {name: "token_info_list", typeTag: parseTypeTagOrThrow("vector<0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::TokenInfo>")}
  ];

  admin: HexString;
  symbol_to_token_info: X0x1.Table.Table;
  type_info_to_symbol: X0x1.Table.Table;
  symbol_to_list_idx: X0x1.Table.Table;
  token_info_list: TokenInfo[];

  constructor(proto: any, public typeTag: TypeTag) {
    this.admin = proto['admin'] as HexString;
    this.symbol_to_token_info = proto['symbol_to_token_info'] as X0x1.Table.Table;
    this.type_info_to_symbol = proto['type_info_to_symbol'] as X0x1.Table.Table;
    this.symbol_to_list_idx = proto['symbol_to_list_idx'] as X0x1.Table.Table;
    this.token_info_list = proto['token_info_list'] as TokenInfo[];
  }

  static TokenRegistryParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : TokenRegistry {
    const proto = parseStructProto(data, typeTag, repo, TokenRegistry);
    return new TokenRegistry(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, TokenRegistry, typeParams);
    return result as unknown as TokenRegistry;
  }

}

export async function initialize_script(
  client: AptosClient,
  account: AptosAccount,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::initialize_script",
    typeParamStrings,
    []
  );
}
export function build_payload_initialize_script(
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::initialize_script",
    typeParamStrings,
    []
  );
}

export async function add_token_script(
  client: AptosClient,
  account: AptosAccount,
  name: AptosVectorU8,
  symbol: AptosVectorU8,
  description: AptosVectorU8,
  decimals: number,
  logo_url: AptosVectorU8,
  project_url: AptosVectorU8,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::add_token_script",
    typeParamStrings,
    [
      name.hex(),
      symbol.hex(),
      description.hex(),
      decimals,
      logo_url.hex(),
      project_url.hex(),
    ]
  );
}
export function build_payload_add_token_script(
  name: AptosVectorU8,
  symbol: AptosVectorU8,
  description: AptosVectorU8,
  decimals: number,
  logo_url: AptosVectorU8,
  project_url: AptosVectorU8,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::add_token_script",
    typeParamStrings,
    [
      name.hex(),
      symbol.hex(),
      description.hex(),
      decimals,
      logo_url.hex(),
      project_url.hex(),
    ]
  );
}

export async function delist_token_script(
  client: AptosClient,
  account: AptosAccount,
  symbol: AptosVectorU8,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::delist_token_script",
    typeParamStrings,
    [
      symbol.hex(),
    ]
  );
}
export function build_payload_delist_token_script(
  symbol: AptosVectorU8,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::delist_token_script",
    typeParamStrings,
    [
      symbol.hex(),
    ]
  );
}

export async function update_token_info_script(
  client: AptosClient,
  account: AptosAccount,
  symbol: AptosVectorU8,
  description: AptosVectorU8,
  logo_url: AptosVectorU8,
  project_url: AptosVectorU8,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return sendAndWait(
    client,
    account,
    "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::update_token_info_script",
    typeParamStrings,
    [
      symbol.hex(),
      description.hex(),
      logo_url.hex(),
      project_url.hex(),
    ]
  );
}
export function build_payload_update_token_info_script(
  symbol: AptosVectorU8,
  description: AptosVectorU8,
  logo_url: AptosVectorU8,
  project_url: AptosVectorU8,
  typeParams: TypeTag[],
) {
  const typeParamStrings = typeParams.map(t=>getTypeTagFullname(t));
  return buildPayload(
    "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::update_token_info_script",
    typeParamStrings,
    [
      symbol.hex(),
      description.hex(),
      logo_url.hex(),
      project_url.hex(),
    ]
  );
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::TokenInfo", TokenInfo.TokenInfoParser);
  repo.addParser("0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::TokenRegistry4::TokenRegistry", TokenRegistry.TokenRegistryParser);
}