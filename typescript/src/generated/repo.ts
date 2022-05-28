import { AptosParserRepo } from "@manahippo/aptos-tsgen";
import * as X0x1_ASCII from "./X0x1/ASCII";
import * as X0x1_Errors from "./X0x1/Errors";
import * as X0x1_Option from "./X0x1/Option";
import * as X0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68_TokenRegistry3 from "./X0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68/TokenRegistry3";
import * as X0x1_Signer from "./X0x1/Signer";
import * as X0x1_Table from "./X0x1/Table";
import * as X0x1_TypeInfo from "./X0x1/TypeInfo";
import * as X0x1_Vector from "./X0x1/Vector";
export function getParserRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  X0x1_ASCII.loadParsers(repo);
  X0x1_Errors.loadParsers(repo);
  X0x1_Option.loadParsers(repo);
  X0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68_TokenRegistry3.loadParsers(repo);
  X0x1_Signer.loadParsers(repo);
  X0x1_Table.loadParsers(repo);
  X0x1_TypeInfo.loadParsers(repo);
  X0x1_Vector.loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}