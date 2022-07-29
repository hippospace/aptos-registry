
import { AptosParserRepo } from "@manahippo/move-to-ts";
import * as aptos_framework from './aptos_framework';
import * as aptos_std from './aptos_std';
import * as coin_registry from './coin_registry';
import * as std from './std';

export * as aptos_framework from './aptos_framework';
export * as aptos_std from './aptos_std';
export * as coin_registry from './coin_registry';
export * as std from './std';


export function getProjectRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  aptos_framework.loadParsers(repo);
  aptos_std.loadParsers(repo);
  coin_registry.loadParsers(repo);
  std.loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}
