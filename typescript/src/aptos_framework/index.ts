
import { AptosParserRepo } from "@manahippo/move-to-ts";
import * as account$_ from './account';
import * as account_utils$_ from './account_utils';
import * as aptos_coin$_ from './aptos_coin';
import * as aptos_governance$_ from './aptos_governance';
import * as block$_ from './block';
import * as bucket_table$_ from './bucket_table';
import * as chain_id$_ from './chain_id';
import * as code$_ from './code';
import * as coin$_ from './coin';
import * as consensus_config$_ from './consensus_config';
import * as genesis$_ from './genesis';
import * as governance_proposal$_ from './governance_proposal';
import * as managed_coin$_ from './managed_coin';
import * as reconfiguration$_ from './reconfiguration';
import * as resource_account$_ from './resource_account';
import * as stake$_ from './stake';
import * as system_addresses$_ from './system_addresses';
import * as timestamp$_ from './timestamp';
import * as token$_ from './token';
import * as token_transfers$_ from './token_transfers';
import * as transaction_context$_ from './transaction_context';
import * as transaction_fee$_ from './transaction_fee';
import * as transaction_publishing_option$_ from './transaction_publishing_option';
import * as validator_set_script$_ from './validator_set_script';
import * as version$_ from './version';
import * as vm_config$_ from './vm_config';
import * as voting$_ from './voting';

export * as account$_ from './account';
export * as account_utils$_ from './account_utils';
export * as aptos_coin$_ from './aptos_coin';
export * as aptos_governance$_ from './aptos_governance';
export * as block$_ from './block';
export * as bucket_table$_ from './bucket_table';
export * as chain_id$_ from './chain_id';
export * as code$_ from './code';
export * as coin$_ from './coin';
export * as consensus_config$_ from './consensus_config';
export * as genesis$_ from './genesis';
export * as governance_proposal$_ from './governance_proposal';
export * as managed_coin$_ from './managed_coin';
export * as reconfiguration$_ from './reconfiguration';
export * as resource_account$_ from './resource_account';
export * as stake$_ from './stake';
export * as system_addresses$_ from './system_addresses';
export * as timestamp$_ from './timestamp';
export * as token$_ from './token';
export * as token_transfers$_ from './token_transfers';
export * as transaction_context$_ from './transaction_context';
export * as transaction_fee$_ from './transaction_fee';
export * as transaction_publishing_option$_ from './transaction_publishing_option';
export * as validator_set_script$_ from './validator_set_script';
export * as version$_ from './version';
export * as vm_config$_ from './vm_config';
export * as voting$_ from './voting';


export function loadParsers(repo: AptosParserRepo) {
  account$_.loadParsers(repo);
  account_utils$_.loadParsers(repo);
  aptos_coin$_.loadParsers(repo);
  aptos_governance$_.loadParsers(repo);
  block$_.loadParsers(repo);
  bucket_table$_.loadParsers(repo);
  chain_id$_.loadParsers(repo);
  code$_.loadParsers(repo);
  coin$_.loadParsers(repo);
  consensus_config$_.loadParsers(repo);
  genesis$_.loadParsers(repo);
  governance_proposal$_.loadParsers(repo);
  managed_coin$_.loadParsers(repo);
  reconfiguration$_.loadParsers(repo);
  resource_account$_.loadParsers(repo);
  stake$_.loadParsers(repo);
  system_addresses$_.loadParsers(repo);
  timestamp$_.loadParsers(repo);
  token$_.loadParsers(repo);
  token_transfers$_.loadParsers(repo);
  transaction_context$_.loadParsers(repo);
  transaction_fee$_.loadParsers(repo);
  transaction_publishing_option$_.loadParsers(repo);
  validator_set_script$_.loadParsers(repo);
  version$_.loadParsers(repo);
  vm_config$_.loadParsers(repo);
  voting$_.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}
