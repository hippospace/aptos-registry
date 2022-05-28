import { HexString } from "aptos";
import bigInt from "big-integer";
import { TypeParamDeclType } from "@manahippo/aptos-tsgen";
import { FieldDeclType } from "@manahippo/aptos-tsgen";
import { parseTypeTagOrThrow } from "@manahippo/aptos-tsgen";
import { TypeTag } from "@manahippo/aptos-tsgen";
import { AptosParserRepo } from "@manahippo/aptos-tsgen";
import { parseStructProto } from "@manahippo/aptos-tsgen";

export const moduleAddress = new HexString("0x1");
export const moduleName = "Option";

export const EOPTION_IS_SET: bigInt.BigInteger = bigInt("0");
export const EOPTION_NOT_SET: bigInt.BigInteger = bigInt("1");

export class Option {
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "Option";
  static typeParameters: TypeParamDeclType[] = [
    {name: "$tv0", isPhantom: false}
  ];
  static fields: FieldDeclType[] = [
    {name: "vec", typeTag: parseTypeTagOrThrow("vector<$tv0>")}
  ];

  vec: any[];

  constructor(proto: any, public typeTag: TypeTag) {
    this.vec = proto['vec'] as any[];
  }

  static OptionParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : Option {
    const proto = parseStructProto(data, typeTag, repo, Option);
    return new Option(proto, typeTag);
  }

}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x1::Option::Option", Option.OptionParser);
}