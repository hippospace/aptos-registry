
import { AptosParserRepo } from "@manahippo/move-to-ts";
import * as acl$_ from './acl';
import * as bcs$_ from './bcs';
import * as bit_vector$_ from './bit_vector';
import * as capability$_ from './capability';
import * as debug$_ from './debug';
import * as error$_ from './error';
import * as fixed_point32$_ from './fixed_point32';
import * as guid$_ from './guid';
import * as hash$_ from './hash';
import * as option$_ from './option';
import * as signer$_ from './signer';
import * as string$_ from './string';
import * as vector$_ from './vector';

export * as acl$_ from './acl';
export * as bcs$_ from './bcs';
export * as bit_vector$_ from './bit_vector';
export * as capability$_ from './capability';
export * as debug$_ from './debug';
export * as error$_ from './error';
export * as fixed_point32$_ from './fixed_point32';
export * as guid$_ from './guid';
export * as hash$_ from './hash';
export * as option$_ from './option';
export * as signer$_ from './signer';
export * as string$_ from './string';
export * as vector$_ from './vector';


export function loadParsers(repo: AptosParserRepo) {
  acl$_.loadParsers(repo);
  bcs$_.loadParsers(repo);
  bit_vector$_.loadParsers(repo);
  capability$_.loadParsers(repo);
  debug$_.loadParsers(repo);
  error$_.loadParsers(repo);
  fixed_point32$_.loadParsers(repo);
  guid$_.loadParsers(repo);
  hash$_.loadParsers(repo);
  option$_.loadParsers(repo);
  signer$_.loadParsers(repo);
  string$_.loadParsers(repo);
  vector$_.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}
