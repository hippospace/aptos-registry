
import { AptosParserRepo } from "@manahippo/move-to-ts";
import * as token_registry$_ from './token_registry';

export * as token_registry$_ from './token_registry';


export function loadParsers(repo: AptosParserRepo) {
  token_registry$_.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}
