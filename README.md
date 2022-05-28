# aptos-registry
A `TokenRegistry` that keeps track of a list of Tokens.

Currently these are tracked:
```move
struct TokenInfo has store, drop, copy {
    name: ASCII::String,
    symbol: ASCII::String,
    description: ASCII::String,
    decimals: u8,
    logo_url: ASCII::String,
    project_url: ASCII::String,
    delisted: bool,
    token_type: TypeInfo::TypeInfo,
}
```

All tracked tokens need to have unique `symbol` and `token_type`.

Tokens can be delisted via `delist_token` and modified via `update_token_info`. 

Currently only a single admin is able to modify the registry. We'll add some vote features so that it becomes a registry
that can be managed by a voting community.

# TypeScript interface
TypeScript interface is generated using [aptos-tsgen](https://github.com/hippospace/aptos-tsgen). Files are under:
- `typescript/src/generated`
