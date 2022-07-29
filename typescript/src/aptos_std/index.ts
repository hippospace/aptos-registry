
import { AptosParserRepo } from "@manahippo/move-to-ts";
import * as big_vector$_ from './big_vector';
import * as comparator$_ from './comparator';
import * as event$_ from './event';
import * as iterable_table$_ from './iterable_table';
import * as signature$_ from './signature';
import * as simple_map$_ from './simple_map';
import * as table$_ from './table';
import * as type_info$_ from './type_info';

export * as big_vector$_ from './big_vector';
export * as comparator$_ from './comparator';
export * as event$_ from './event';
export * as iterable_table$_ from './iterable_table';
export * as signature$_ from './signature';
export * as simple_map$_ from './simple_map';
export * as table$_ from './table';
export * as type_info$_ from './type_info';


export function loadParsers(repo: AptosParserRepo) {
  big_vector$_.loadParsers(repo);
  comparator$_.loadParsers(repo);
  event$_.loadParsers(repo);
  iterable_table$_.loadParsers(repo);
  signature$_.loadParsers(repo);
  simple_map$_.loadParsers(repo);
  table$_.loadParsers(repo);
  type_info$_.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}
