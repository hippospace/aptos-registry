import { HexString } from "aptos";
import bigInt from "big-integer";
import { AptosParserRepo } from "@manahippo/aptos-tsgen";

export const moduleAddress = new HexString("0x1");
export const moduleName = "Vector";

export const EINDEX_OUT_OF_BOUNDS: bigInt.BigInteger = bigInt("0");

export function loadParsers(repo: AptosParserRepo) {
}