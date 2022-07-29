
import { AptosParserRepo } from "@manahippo/move-to-ts";
import * as aptos_framework from './aptos_framework';
import * as aptos_std from './aptos_std';
import * as std from './std';
import * as token_registry from './token_registry';

export * as aptos_framework from './aptos_framework';
export * as aptos_std from './aptos_std';
export * as std from './std';
export * as token_registry from './token_registry';


export function getProjectRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  aptos_framework.loadParsers(repo);
  aptos_std.loadParsers(repo);
  std.loadParsers(repo);
  token_registry.loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}
