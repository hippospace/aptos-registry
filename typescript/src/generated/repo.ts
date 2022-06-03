import { AptosParserRepo } from "@manahippo/aptos-tsgen";
import * as X0x1_ASCII from "./X0x1/ASCII";
import * as X0x1_Errors from "./X0x1/Errors";
import * as X0x1_Option from "./X0x1/Option";
import * as X0x1_Signer from "./X0x1/Signer";
import * as X0x1_Table from "./X0x1/Table";
import * as X0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790_TokenRegistry from "./X0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790/TokenRegistry";
import * as X0x1_TypeInfo from "./X0x1/TypeInfo";
import * as X0x1_Vector from "./X0x1/Vector";
export function getParserRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  X0x1_ASCII.loadParsers(repo);
  X0x1_Errors.loadParsers(repo);
  X0x1_Option.loadParsers(repo);
  X0x1_Signer.loadParsers(repo);
  X0x1_Table.loadParsers(repo);
  X0x49c5e3ec5041062f02a352e4a2d03ce2bb820d94e8ca736b08a324f8dc634790_TokenRegistry.loadParsers(repo);
  X0x1_TypeInfo.loadParsers(repo);
  X0x1_Vector.loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}