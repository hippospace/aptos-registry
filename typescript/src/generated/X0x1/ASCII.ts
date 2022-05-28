import { HexString } from "aptos";
import bigInt from "big-integer";
import { TypeParamDeclType } from "@manahippo/aptos-tsgen";
import { FieldDeclType } from "@manahippo/aptos-tsgen";
import { parseTypeTagOrThrow } from "@manahippo/aptos-tsgen";
import { AptosVectorU8 } from "@manahippo/aptos-tsgen";
import { TypeTag } from "@manahippo/aptos-tsgen";
import { AptosParserRepo } from "@manahippo/aptos-tsgen";
import { parseStructProto } from "@manahippo/aptos-tsgen";

export const moduleAddress = new HexString("0x1");
export const moduleName = "ASCII";

export const EINVALID_ASCII_CHARACTER: bigInt.BigInteger = bigInt("0");

export class String {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "String";
  static typeParameters: TypeParamDeclType[] = [
  ];
  static fields: FieldDeclType[] = [
    {name: "bytes", typeTag: parseTypeTagOrThrow("vector<u8>")}
  ];

  bytes: AptosVectorU8;

  constructor(proto: any, public typeTag: TypeTag) {
    this.bytes = proto['bytes'] as AptosVectorU8;
  }

  static StringParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : String {
    const proto = parseStructProto(data, typeTag, repo, String);
    return new String(proto, typeTag);
  }

}

export class Char {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "Char";
  static typeParameters: TypeParamDeclType[] = [
  ];
  static fields: FieldDeclType[] = [
    {name: "byte", typeTag: parseTypeTagOrThrow("u8")}
  ];

  byte: number;

  constructor(proto: any, public typeTag: TypeTag) {
    this.byte = proto['byte'] as number;
  }

  static CharParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : Char {
    const proto = parseStructProto(data, typeTag, repo, Char);
    return new Char(proto, typeTag);
  }

}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x1::ASCII::String", String.StringParser);
  repo.addParser("0x1::ASCII::Char", Char.CharParser);
}