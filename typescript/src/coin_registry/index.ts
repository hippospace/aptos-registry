
import { AptosParserRepo } from "@manahippo/move-to-ts";
import * as coin_registry$_ from './coin_registry';

export * as coin_registry$_ from './coin_registry';


export function loadParsers(repo: AptosParserRepo) {
  coin_registry$_.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}
