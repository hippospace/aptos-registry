import { HexString } from "aptos";
import { TypeParamDeclType } from "@manahippo/aptos-tsgen";
import { FieldDeclType } from "@manahippo/aptos-tsgen";
import { parseTypeTagOrThrow } from "@manahippo/aptos-tsgen";
import { AptosVectorU8 } from "@manahippo/aptos-tsgen";
import { TypeTag } from "@manahippo/aptos-tsgen";
import { AptosParserRepo } from "@manahippo/aptos-tsgen";
import { parseStructProto } from "@manahippo/aptos-tsgen";

export const moduleAddress = new HexString("0x1");
export const moduleName = "TypeInfo";


export class TypeInfo {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "TypeInfo";
  static typeParameters: TypeParamDeclType[] = [
  ];
  static fields: FieldDeclType[] = [
    {name: "account_address", typeTag: parseTypeTagOrThrow("address")},
    {name: "module_name", typeTag: parseTypeTagOrThrow("vector<u8>")},
    {name: "struct_name", typeTag: parseTypeTagOrThrow("vector<u8>")}
  ];

  account_address: HexString;
  module_name: AptosVectorU8;
  struct_name: AptosVectorU8;

  constructor(proto: any, public typeTag: TypeTag) {
    this.account_address = proto['account_address'] as HexString;
    this.module_name = proto['module_name'] as AptosVectorU8;
    this.struct_name = proto['struct_name'] as AptosVectorU8;
  }

  static TypeInfoParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : TypeInfo {
    const proto = parseStructProto(data, typeTag, repo, TypeInfo);
    return new TypeInfo(proto, typeTag);
  }

}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x1::TypeInfo::TypeInfo", TypeInfo.TypeInfoParser);
}