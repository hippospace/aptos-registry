import { HexString } from "aptos";
import bigInt from "big-integer";
import { TypeParamDeclType } from "@manahippo/aptos-tsgen";
import { FieldDeclType } from "@manahippo/aptos-tsgen";
import { parseTypeTagOrThrow } from "@manahippo/aptos-tsgen";
import { TypeTag } from "@manahippo/aptos-tsgen";
import { AptosParserRepo } from "@manahippo/aptos-tsgen";
import { parseStructProto } from "@manahippo/aptos-tsgen";
import { AptosClient } from "aptos";

export const moduleAddress = new HexString("0x1");
export const moduleName = "Table";

export const EALREADY_EXISTS: bigInt.BigInteger = bigInt("100");
export const ENOT_EMPTY: bigInt.BigInteger = bigInt("102");
export const ENOT_FOUND: bigInt.BigInteger = bigInt("101");

export class Table {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "Table";
  static typeParameters: TypeParamDeclType[] = [
    {name: "$tv0", isPhantom: true},
    {name: "$tv1", isPhantom: true}
  ];
  static fields: FieldDeclType[] = [
    {name: "handle", typeTag: parseTypeTagOrThrow("u128")},
    {name: "length", typeTag: parseTypeTagOrThrow("u64")}
  ];

  handle: bigInt.BigInteger;
  length: bigInt.BigInteger;

  constructor(proto: any, public typeTag: TypeTag) {
    this.handle = proto['handle'] as bigInt.BigInteger;
    this.length = proto['length'] as bigInt.BigInteger;
  }

  static TableParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : Table {
    const proto = parseStructProto(data, typeTag, repo, Table);
    return new Table(proto, typeTag);
  }

}

export class Box {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "Box";
  static typeParameters: TypeParamDeclType[] = [
    {name: "$tv0", isPhantom: false}
  ];
  static fields: FieldDeclType[] = [
    {name: "val", typeTag: parseTypeTagOrThrow("$tv0")}
  ];

  val: any;

  constructor(proto: any, public typeTag: TypeTag) {
    this.val = proto['val'] as any;
  }

  static BoxParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : Box {
    const proto = parseStructProto(data, typeTag, repo, Box);
    return new Box(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, Box, typeParams);
    return result as unknown as Box;
  }

}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x1::Table::Table", Table.TableParser);
  repo.addParser("0x1::Table::Box", Box.BoxParser);
}