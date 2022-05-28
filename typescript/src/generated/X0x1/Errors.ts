import { HexString } from "aptos";
import { AptosParserRepo } from "@manahippo/aptos-tsgen";

export const moduleAddress = new HexString("0x1");
export const moduleName = "Errors";

export const ALREADY_PUBLISHED: number = 6;
export const CUSTOM: number = 255;
export const INTERNAL: number = 10;
export const INVALID_ARGUMENT: number = 7;
export const INVALID_STATE: number = 1;
export const LIMIT_EXCEEDED: number = 8;
export const NOT_PUBLISHED: number = 5;
export const REQUIRES_ADDRESS: number = 2;
export const REQUIRES_CAPABILITY: number = 4;
export const REQUIRES_ROLE: number = 3;

export function loadParsers(repo: AptosParserRepo) {
}