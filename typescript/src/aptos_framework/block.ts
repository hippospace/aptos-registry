import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient} from "aptos";
import * as aptos_std$_ from "../aptos_std";
import * as std$_ from "../std";
import * as reconfiguration$_ from "./reconfiguration";
import * as stake$_ from "./stake";
import * as system_addresses$_ from "./system_addresses";
import * as timestamp$_ from "./timestamp";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "block";

export const EBLOCK_METADATA : U64 = u64("0");
export const EVM_OR_VALIDATOR : U64 = u64("1");


export class BlockMetadata 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "BlockMetadata";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "height", typeTag: AtomicTypeTag.U64 },
  { name: "epoch_internal", typeTag: AtomicTypeTag.U64 },
  { name: "new_block_events", typeTag: new StructTag(new HexString("0x1"), "event", "EventHandle", [new StructTag(new HexString("0x1"), "block", "NewBlockEvent", [])]) }];

  height: U64;
  epoch_internal: U64;
  new_block_events: aptos_std$_.event$_.EventHandle;

  constructor(proto: any, public typeTag: TypeTag) {
    this.height = proto['height'] as U64;
    this.epoch_internal = proto['epoch_internal'] as U64;
    this.new_block_events = proto['new_block_events'] as aptos_std$_.event$_.EventHandle;
  }

  static BlockMetadataParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : BlockMetadata {
    const proto = $.parseStructProto(data, typeTag, repo, BlockMetadata);
    return new BlockMetadata(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, BlockMetadata, typeParams);
    return result as unknown as BlockMetadata;
  }
}

export class NewBlockEvent 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "NewBlockEvent";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "epoch", typeTag: AtomicTypeTag.U64 },
  { name: "round", typeTag: AtomicTypeTag.U64 },
  { name: "height", typeTag: AtomicTypeTag.U64 },
  { name: "previous_block_votes", typeTag: new VectorTag(AtomicTypeTag.Bool) },
  { name: "proposer", typeTag: AtomicTypeTag.Address },
  { name: "failed_proposer_indices", typeTag: new VectorTag(AtomicTypeTag.U64) },
  { name: "time_microseconds", typeTag: AtomicTypeTag.U64 }];

  epoch: U64;
  round: U64;
  height: U64;
  previous_block_votes: boolean[];
  proposer: HexString;
  failed_proposer_indices: U64[];
  time_microseconds: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.epoch = proto['epoch'] as U64;
    this.round = proto['round'] as U64;
    this.height = proto['height'] as U64;
    this.previous_block_votes = proto['previous_block_votes'] as boolean[];
    this.proposer = proto['proposer'] as HexString;
    this.failed_proposer_indices = proto['failed_proposer_indices'] as U64[];
    this.time_microseconds = proto['time_microseconds'] as U64;
  }

  static NewBlockEventParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : NewBlockEvent {
    const proto = $.parseStructProto(data, typeTag, repo, NewBlockEvent);
    return new NewBlockEvent(proto, typeTag);
  }

}
export function block_prologue$ (
  vm: HexString,
  epoch: U64,
  round: U64,
  previous_block_votes: boolean[],
  missed_votes: U64[],
  proposer: HexString,
  failed_proposer_indices: U64[],
  timestamp: U64,
  $c: AptosDataCache,
): void {
  let temp$1, block_metadata_ref, height, new_block_event;
  timestamp$_.assert_operating$($c);
  system_addresses$_.assert_vm$(vm, $c);
  if (($.copy(proposer).hex() === new HexString("0x0").hex())) {
    temp$1 = true;
  }
  else{
    temp$1 = stake$_.is_current_epoch_validator$($.copy(proposer), $c);
  }
  if (!temp$1) {
    throw $.abortCode(std$_.error$_.permission_denied$(EVM_OR_VALIDATOR, $c));
  }
  height = $.copy($c.borrow_global_mut<BlockMetadata>(new StructTag(new HexString("0x1"), "block", "BlockMetadata", []), new HexString("0x1")).height);
  new_block_event = new NewBlockEvent({ epoch: $.copy(epoch), round: $.copy(round), height: $.copy(height), previous_block_votes: $.copy(previous_block_votes), proposer: $.copy(proposer), failed_proposer_indices: $.copy(failed_proposer_indices), time_microseconds: $.copy(timestamp) }, new StructTag(new HexString("0x1"), "block", "NewBlockEvent", []));
  emit_new_block_event$(vm, new_block_event, $c);
  block_metadata_ref = $c.borrow_global_mut<BlockMetadata>(new StructTag(new HexString("0x1"), "block", "BlockMetadata", []), new HexString("0x1"));
  stake$_.update_performance_statistics$($.copy(missed_votes), $c);
  if ($.copy(timestamp).sub(reconfiguration$_.last_reconfiguration_time$($c)).gt($.copy(block_metadata_ref.epoch_internal))) {
    reconfiguration$_.reconfigure$($c);
  }
  else{
  }
  return;
}

export function emit_genesis_block_event$ (
  vm: HexString,
  $c: AptosDataCache,
): void {
  emit_new_block_event$(vm, new NewBlockEvent({ epoch: u64("0"), round: u64("0"), height: u64("0"), previous_block_votes: std$_.vector$_.empty$($c, [AtomicTypeTag.Bool] as TypeTag[]), proposer: new HexString("0x0"), failed_proposer_indices: std$_.vector$_.empty$($c, [AtomicTypeTag.U64] as TypeTag[]), time_microseconds: u64("0") }, new StructTag(new HexString("0x1"), "block", "NewBlockEvent", [])), $c);
  return;
}

export function emit_new_block_event$ (
  vm: HexString,
  new_block_event: NewBlockEvent,
  $c: AptosDataCache,
): void {
  let block_metadata_ref;
  block_metadata_ref = $c.borrow_global_mut<BlockMetadata>(new StructTag(new HexString("0x1"), "block", "BlockMetadata", []), new HexString("0x1"));
  if (!$.copy(block_metadata_ref.height).eq($.copy(new_block_event.height))) {
    throw $.abortCode(std$_.error$_.invalid_state$(EBLOCK_METADATA, $c));
  }
  block_metadata_ref.height = $.copy(new_block_event.height).add(u64("1"));
  timestamp$_.update_global_time$(vm, $.copy(new_block_event.proposer), $.copy(new_block_event.time_microseconds), $c);
  aptos_std$_.event$_.emit_event$(block_metadata_ref.new_block_events, new_block_event, $c, [new StructTag(new HexString("0x1"), "block", "NewBlockEvent", [])] as TypeTag[]);
  return;
}

export function get_current_block_height$ (
  $c: AptosDataCache,
): U64 {
  if (!is_initialized$($c)) {
    throw $.abortCode(std$_.error$_.not_found$(EBLOCK_METADATA, $c));
  }
  return $.copy($c.borrow_global<BlockMetadata>(new StructTag(new HexString("0x1"), "block", "BlockMetadata", []), new HexString("0x1")).height);
}

export function initialize_block_metadata$ (
  account: HexString,
  epoch_internal: U64,
  $c: AptosDataCache,
): void {
  timestamp$_.assert_genesis$($c);
  system_addresses$_.assert_aptos_framework$(account, $c);
  if (!!is_initialized$($c)) {
    throw $.abortCode(std$_.error$_.already_exists$(EBLOCK_METADATA, $c));
  }
  $c.move_to(new StructTag(new HexString("0x1"), "block", "BlockMetadata", []), account, new BlockMetadata({ height: u64("0"), epoch_internal: $.copy(epoch_internal), new_block_events: aptos_std$_.event$_.new_event_handle$(account, $c, [new StructTag(new HexString("0x1"), "block", "NewBlockEvent", [])] as TypeTag[]) }, new StructTag(new HexString("0x1"), "block", "BlockMetadata", [])));
  return;
}

export function is_initialized$ (
  $c: AptosDataCache,
): boolean {
  return $c.exists(new StructTag(new HexString("0x1"), "block", "BlockMetadata", []), new HexString("0x1"));
}

export function update_epoch_interval$ (
  aptos_framework: HexString,
  new_epoch_interval: U64,
  $c: AptosDataCache,
): void {
  let block_metadata;
  system_addresses$_.assert_aptos_framework$(aptos_framework, $c);
  block_metadata = $c.borrow_global_mut<BlockMetadata>(new StructTag(new HexString("0x1"), "block", "BlockMetadata", []), new HexString("0x1"));
  block_metadata.epoch_internal = $.copy(new_epoch_interval);
  return;
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x1::block::BlockMetadata", BlockMetadata.BlockMetadataParser);
  repo.addParser("0x1::block::NewBlockEvent", NewBlockEvent.NewBlockEventParser);
}

