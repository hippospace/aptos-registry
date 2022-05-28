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

This is what the registry looks like right now:

```move
struct TokenRegistry has key {
    admin: address,
    // for easier lookup of individual TokenInfo
    symbol_to_token_info: Table::Table<ASCII::String, TokenInfo>,
    // for checking TypeInfo doesn't already exist in our type
    type_info_to_symbol: Table::Table<TypeInfo::TypeInfo, ASCII::String>,
    // for faster edits
    symbol_to_list_idx: Table::Table<ASCII::String, u64>,
    // for easier lookup of the full list
    token_info_list: vector<TokenInfo>,
}
```

`token_info_list` has the full list.

All tracked tokens need to have unique `symbol` and `token_type`.

Tokens can be delisted via `delist_token` and modified via `update_token_info`. 

Currently only a single admin is able to modify the registry. We'll add some vote features so that it becomes a registry
that can be managed by a voting community.

# TypeScript interface
TypeScript interface is generated using [aptos-tsgen](https://github.com/hippospace/aptos-tsgen). Files are under:
- `typescript/src/generated`
