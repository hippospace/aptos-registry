import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient} from "aptos";
import * as std$_ from "../std";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "code";

export const EMODULE_NAME_CLASH : U64 = u64("1");
export const EUPGRADE_IMMUTABLE : U64 = u64("2");
export const EUPGRADE_WEAKER_POLICY : U64 = u64("3");


export class AddressAlias 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "AddressAlias";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "alias", typeTag: new StructTag(new HexString("0x1"), "string", "String", []) },
  { name: "addr", typeTag: AtomicTypeTag.Address }];

  alias: std$_.string$_.String;
  addr: HexString;

  constructor(proto: any, public typeTag: TypeTag) {
    this.alias = proto['alias'] as std$_.string$_.String;
    this.addr = proto['addr'] as HexString;
  }

  static AddressAliasParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : AddressAlias {
    const proto = $.parseStructProto(data, typeTag, repo, AddressAlias);
    return new AddressAlias(proto, typeTag);
  }

}

export class ModuleMetadata 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "ModuleMetadata";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "name", typeTag: new StructTag(new HexString("0x1"), "string", "String", []) },
  { name: "source_map", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "source", typeTag: new StructTag(new HexString("0x1"), "string", "String", []) }];

  name: std$_.string$_.String;
  source_map: U8[];
  source: std$_.string$_.String;

  constructor(proto: any, public typeTag: TypeTag) {
    this.name = proto['name'] as std$_.string$_.String;
    this.source_map = proto['source_map'] as U8[];
    this.source = proto['source'] as std$_.string$_.String;
  }

  static ModuleMetadataParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : ModuleMetadata {
    const proto = $.parseStructProto(data, typeTag, repo, ModuleMetadata);
    return new ModuleMetadata(proto, typeTag);
  }

}

export class PackageDep 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "PackageDep";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "addr", typeTag: AtomicTypeTag.Address },
  { name: "name", typeTag: new StructTag(new HexString("0x1"), "string", "String", []) }];

  addr: HexString;
  name: std$_.string$_.String;

  constructor(proto: any, public typeTag: TypeTag) {
    this.addr = proto['addr'] as HexString;
    this.name = proto['name'] as std$_.string$_.String;
  }

  static PackageDepParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : PackageDep {
    const proto = $.parseStructProto(data, typeTag, repo, PackageDep);
    return new PackageDep(proto, typeTag);
  }

}

export class PackageMetadata 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "PackageMetadata";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "name", typeTag: new StructTag(new HexString("0x1"), "string", "String", []) },
  { name: "upgrade_policy", typeTag: new StructTag(new HexString("0x1"), "code", "UpgradePolicy", []) },
  { name: "modules", typeTag: new VectorTag(new StructTag(new HexString("0x1"), "code", "ModuleMetadata", [])) },
  { name: "address_aliases", typeTag: new VectorTag(new StructTag(new HexString("0x1"), "code", "AddressAlias", [])) },
  { name: "deps", typeTag: new VectorTag(new StructTag(new HexString("0x1"), "code", "PackageDep", [])) }];

  name: std$_.string$_.String;
  upgrade_policy: UpgradePolicy;
  modules: ModuleMetadata[];
  address_aliases: AddressAlias[];
  deps: PackageDep[];

  constructor(proto: any, public typeTag: TypeTag) {
    this.name = proto['name'] as std$_.string$_.String;
    this.upgrade_policy = proto['upgrade_policy'] as UpgradePolicy;
    this.modules = proto['modules'] as ModuleMetadata[];
    this.address_aliases = proto['address_aliases'] as AddressAlias[];
    this.deps = proto['deps'] as PackageDep[];
  }

  static PackageMetadataParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : PackageMetadata {
    const proto = $.parseStructProto(data, typeTag, repo, PackageMetadata);
    return new PackageMetadata(proto, typeTag);
  }

}

export class PackageRegistry 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "PackageRegistry";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "packages", typeTag: new VectorTag(new StructTag(new HexString("0x1"), "code", "PackageMetadata", [])) }];

  packages: PackageMetadata[];

  constructor(proto: any, public typeTag: TypeTag) {
    this.packages = proto['packages'] as PackageMetadata[];
  }

  static PackageRegistryParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : PackageRegistry {
    const proto = $.parseStructProto(data, typeTag, repo, PackageRegistry);
    return new PackageRegistry(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, PackageRegistry, typeParams);
    return result as unknown as PackageRegistry;
  }
}

export class UpgradePolicy 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "UpgradePolicy";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "policy", typeTag: AtomicTypeTag.U8 }];

  policy: U8;

  constructor(proto: any, public typeTag: TypeTag) {
    this.policy = proto['policy'] as U8;
  }

  static UpgradePolicyParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : UpgradePolicy {
    const proto = $.parseStructProto(data, typeTag, repo, UpgradePolicy);
    return new UpgradePolicy(proto, typeTag);
  }

}
export function can_change_upgrade_policy_to$ (
  from: UpgradePolicy,
  to: UpgradePolicy,
  $c: AptosDataCache,
): boolean {
  return $.copy(from.policy).le($.copy(to.policy));
}

export function check_coexistence$ (
  old_pack: PackageMetadata,
  new_modules: std$_.string$_.String[],
  $c: AptosDataCache,
): void {
  let i, j, name, old_mod;
  i = u64("0");
  while ($.copy(i).lt(std$_.vector$_.length$(old_pack.modules, $c, [new StructTag(new HexString("0x1"), "code", "ModuleMetadata", [])] as TypeTag[]))) {
    {
      old_mod = std$_.vector$_.borrow$(old_pack.modules, $.copy(i), $c, [new StructTag(new HexString("0x1"), "code", "ModuleMetadata", [])] as TypeTag[]);
      j = u64("0");
      while ($.copy(j).lt(std$_.vector$_.length$(new_modules, $c, [new StructTag(new HexString("0x1"), "string", "String", [])] as TypeTag[]))) {
        {
          name = std$_.vector$_.borrow$(new_modules, $.copy(j), $c, [new StructTag(new HexString("0x1"), "string", "String", [])] as TypeTag[]);
          if (!$.deep_eq(old_mod.name, name)) {
            throw $.abortCode(std$_.error$_.already_exists$(EMODULE_NAME_CLASH, $c));
          }
        }

      }}

  }return;
}

export function check_upgradability$ (
  old_pack: PackageMetadata,
  new_pack: PackageMetadata,
  $c: AptosDataCache,
): void {
  let temp$1;
  temp$1 = upgrade_policy_immutable$($c);
  if (!$.copy(old_pack.upgrade_policy.policy).lt($.copy(temp$1.policy))) {
    throw $.abortCode(std$_.error$_.invalid_argument$(EUPGRADE_IMMUTABLE, $c));
  }
  if (!can_change_upgrade_policy_to$($.copy(old_pack.upgrade_policy), $.copy(new_pack.upgrade_policy), $c)) {
    throw $.abortCode(std$_.error$_.invalid_argument$(EUPGRADE_WEAKER_POLICY, $c));
  }
  return;
}

export function from_bytes$ (
  bytes: U8[],
  $c: AptosDataCache,
  $p: TypeTag[], /* <T>*/
): PackageMetadata {
  return $.aptos_framework_code_from_bytes(bytes, $c, [$p[0]]);

}
export function get_module_names$ (
  pack: PackageMetadata,
  $c: AptosDataCache,
): std$_.string$_.String[] {
  let i, module_names;
  module_names = std$_.vector$_.empty$($c, [new StructTag(new HexString("0x1"), "string", "String", [])] as TypeTag[]);
  i = u64("0");
  while ($.copy(i).lt(std$_.vector$_.length$(pack.modules, $c, [new StructTag(new HexString("0x1"), "code", "ModuleMetadata", [])] as TypeTag[]))) {
    {
      std$_.vector$_.push_back$(module_names, $.copy(std$_.vector$_.borrow$(pack.modules, $.copy(i), $c, [new StructTag(new HexString("0x1"), "code", "ModuleMetadata", [])] as TypeTag[]).name), $c, [new StructTag(new HexString("0x1"), "string", "String", [])] as TypeTag[]);
      i = $.copy(i).add(u64("1"));
    }

  }return $.copy(module_names);
}

export function publish_package$ (
  owner: HexString,
  pack: PackageMetadata,
  code: U8[][],
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, addr, i, index, len, module_names, old, packages;
  addr = std$_.signer$_.address_of$(owner, $c);
  if (!$c.exists(new StructTag(new HexString("0x1"), "code", "PackageRegistry", []), $.copy(addr))) {
    $c.move_to(new StructTag(new HexString("0x1"), "code", "PackageRegistry", []), owner, new PackageRegistry({ packages: std$_.vector$_.empty$($c, [new StructTag(new HexString("0x1"), "code", "PackageMetadata", [])] as TypeTag[]) }, new StructTag(new HexString("0x1"), "code", "PackageRegistry", [])));
  }
  else{
  }
  module_names = get_module_names$(pack, $c);
  packages = $c.borrow_global_mut<PackageRegistry>(new StructTag(new HexString("0x1"), "code", "PackageRegistry", []), $.copy(addr)).packages;
  len = std$_.vector$_.length$(packages, $c, [new StructTag(new HexString("0x1"), "code", "PackageMetadata", [])] as TypeTag[]);
  index = $.copy(len);
  i = u64("0");
  while ($.copy(i).lt($.copy(len))) {
    {
      [temp$1, temp$2] = [packages, $.copy(i)];
      old = std$_.vector$_.borrow$(temp$1, temp$2, $c, [new StructTag(new HexString("0x1"), "code", "PackageMetadata", [])] as TypeTag[]);
      if ($.deep_eq($.copy(old.name), $.copy(pack.name))) {
        check_upgradability$(old, pack, $c);
        index = $.copy(i);
      }
      else{
        check_coexistence$(old, module_names, $c);
      }
      i = $.copy(i).add(u64("1"));
    }

  }if ($.copy(index).lt($.copy(len))) {
    $.set(std$_.vector$_.borrow_mut$(packages, $.copy(index), $c, [new StructTag(new HexString("0x1"), "code", "PackageMetadata", [])] as TypeTag[]), $.copy(pack));
  }
  else{
    std$_.vector$_.push_back$(packages, $.copy(pack), $c, [new StructTag(new HexString("0x1"), "code", "PackageMetadata", [])] as TypeTag[]);
  }
  return request_publish$($.copy(addr), $.copy(module_names), $.copy(code), $.copy(pack.upgrade_policy.policy), $c);
}

export function publish_package_txn$ (
  owner: HexString,
  pack_serialized: U8[],
  code: U8[][],
  $c: AptosDataCache,
): void {
  return publish_package$(owner, from_bytes$($.copy(pack_serialized), $c, [new StructTag(new HexString("0x1"), "code", "PackageMetadata", [])] as TypeTag[]), $.copy(code), $c);
}


export function buildPayload_publish_package_txn (
  pack_serialized: U8[],
  code: U8[][],
) {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    "0x1::code::publish_package_txn",
    typeParamStrings,
    [
      $.u8ArrayArg(pack_serialized),
      code.map(array => $.u8ArrayArg(array)),
    ]
  );

}
export function request_publish$ (
  owner: HexString,
  expected_modules: std$_.string$_.String[],
  bundle: U8[][],
  policy: U8,
  $c: AptosDataCache,
): void {
  return $.aptos_framework_code_request_publish(owner, expected_modules, bundle, policy, $c);

}
export function upgrade_policy_compat$ (
  $c: AptosDataCache,
): UpgradePolicy {
  return new UpgradePolicy({ policy: u8("1") }, new StructTag(new HexString("0x1"), "code", "UpgradePolicy", []));
}

export function upgrade_policy_immutable$ (
  $c: AptosDataCache,
): UpgradePolicy {
  return new UpgradePolicy({ policy: u8("2") }, new StructTag(new HexString("0x1"), "code", "UpgradePolicy", []));
}

export function upgrade_policy_no_compat$ (
  $c: AptosDataCache,
): UpgradePolicy {
  return new UpgradePolicy({ policy: u8("0") }, new StructTag(new HexString("0x1"), "code", "UpgradePolicy", []));
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x1::code::AddressAlias", AddressAlias.AddressAliasParser);
  repo.addParser("0x1::code::ModuleMetadata", ModuleMetadata.ModuleMetadataParser);
  repo.addParser("0x1::code::PackageDep", PackageDep.PackageDepParser);
  repo.addParser("0x1::code::PackageMetadata", PackageMetadata.PackageMetadataParser);
  repo.addParser("0x1::code::PackageRegistry", PackageRegistry.PackageRegistryParser);
  repo.addParser("0x1::code::UpgradePolicy", UpgradePolicy.UpgradePolicyParser);
}

