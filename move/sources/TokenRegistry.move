address token_registry {
module token_registry {
    use AptosFramework::table;
    use AptosFramework::type_info;
    use Std::string;
    use Std::signer;
    use Std::vector;

    const E_ADMIN_ONLY: u64 = 1;
    const E_ALREADY_INITIALIZED: u64 = 2;
    const E_SYMBOL_ALREADY_EXISTS:u64 = 3;
    const E_SYMBOL_DOES_NOT_EXIST:u64 = 4;
    const E_TYPE_ALREADY_EXISTS:u64 = 4;

    struct TokenInfo has store, drop, copy {
        name: string::String,
        symbol: string::String,
        description: string::String,
        decimals: u8,
        logo_url: string::String,
        project_url: string::String,
        delisted: bool,
        token_type: type_info::TypeInfo,
    }

    struct TokenRegistry has key {
        admin: address,
        // for easier lookup of individual TokenInfo
        symbol_to_token_info: table::Table<string::String, TokenInfo>,
        // for checking TypeInfo doesn't already exist in our type
        type_info_to_symbol: table::Table<type_info::TypeInfo, string::String>,
        // for faster edits
        symbol_to_list_idx: table::Table<string::String, u64>,
        // for easier lookup of the full list
        token_info_list: vector<TokenInfo>,
    }

    public fun is_registry_initialized(admin: address): bool {
        exists<TokenRegistry>(admin)
    }

    public fun initialize(admin: &signer) {
        let admin_addr = signer::address_of(admin);
        assert!(!exists<TokenRegistry>(admin_addr), E_ALREADY_INITIALIZED);
        move_to(admin, TokenRegistry {
            admin: admin_addr,
            symbol_to_token_info: table::new(),
            type_info_to_symbol: table::new(),
            token_info_list: vector::empty<TokenInfo>(),
            symbol_to_list_idx: table::new(),
        });
    }

    public entry fun initialize_script(admin: &signer) {
        initialize(admin);
    }

    public fun has_token<TokenType>(admin: address): bool acquires TokenRegistry{
        let registry = borrow_global<TokenRegistry>(admin);
        let type_info = type_info::type_of<TokenType>();
        table::contains(&registry.type_info_to_symbol, type_info)
    }

    public fun add_token<TokenType>(
        admin: &signer,
        name: vector<u8>,
        symbol: vector<u8>,
        description: vector<u8>,
        decimals: u8,
        logo_url: vector<u8>,
        project_url: vector<u8>,
    ) acquires TokenRegistry {
        let admin_addr = signer::address_of(admin);
        let registry = borrow_global_mut<TokenRegistry>(admin_addr);
        let type_info = type_info::type_of<TokenType>();
        let token_info = TokenInfo {
            name: string::utf8(name),
            symbol: string::utf8(symbol),
            description: string::utf8(description),
            decimals: decimals,
            logo_url: string::utf8(logo_url),
            project_url: string::utf8(project_url),
            delisted: false,
            token_type: type_info,
        };

        assert!(!table::contains(&registry.symbol_to_token_info, token_info.symbol), E_SYMBOL_ALREADY_EXISTS);
        assert!(!table::contains(&registry.type_info_to_symbol, type_info), E_TYPE_ALREADY_EXISTS);
        // add it to table
        table::add(&mut registry.symbol_to_token_info, token_info.symbol, token_info);
        table::add(&mut registry.type_info_to_symbol, type_info, token_info.symbol);
        // add it to the list
        let index = vector::length(&registry.token_info_list);
        vector::push_back(&mut registry.token_info_list, token_info);
        // record index
        table::add(&mut registry.symbol_to_list_idx, token_info.symbol, index);
    }

    public entry fun add_token_script<TokenType>(
        admin: &signer,
        name: vector<u8>,
        symbol: vector<u8>,
        description: vector<u8>,
        decimals: u8,
        logo_url: vector<u8>,
        project_url: vector<u8>,
    ) acquires TokenRegistry {
        add_token<TokenType>(
            admin,
            name,
            symbol,
            description,
            decimals,
            logo_url,
            project_url,
        )
    }

    public fun delist_token(admin: &signer, symbol: vector<u8>) acquires TokenRegistry {
        let admin_addr = signer::address_of(admin);
        let registry = borrow_global_mut<TokenRegistry>(admin_addr);
        let symbol_str = string::utf8(symbol);
        assert!(table::contains(&registry.symbol_to_token_info, symbol_str), E_SYMBOL_DOES_NOT_EXIST);
        let index = *table::borrow(&registry.symbol_to_list_idx, symbol_str);
        let type_info = table::borrow(&registry.symbol_to_token_info, symbol_str).token_type;
        // mark as delisted
        vector::borrow_mut(&mut registry.token_info_list, index).delisted = true;
        // delete from tables
        table::remove(&mut registry.symbol_to_list_idx, symbol_str);
        table::remove(&mut registry.symbol_to_token_info, symbol_str);
        table::remove(&mut registry.type_info_to_symbol, type_info);
    }

    public entry fun delist_token_script(admin: &signer, symbol: vector<u8>) acquires  TokenRegistry {
        delist_token(admin, symbol);
    }

    public fun update_token_info(
        admin: &signer,
        symbol: vector<u8>,
        description: vector<u8>,
        logo_url: vector<u8>,
        project_url: vector<u8>,
    ) acquires TokenRegistry {
        let admin_addr = signer::address_of(admin);
        let registry = borrow_global_mut<TokenRegistry>(admin_addr);
        let symbol_str = string::utf8(symbol);
        assert!(table::contains(&registry.symbol_to_token_info, symbol_str), E_SYMBOL_DOES_NOT_EXIST);
        let index = *table::borrow(&registry.symbol_to_list_idx, symbol_str);
        // update table
        let list_token_info = vector::borrow_mut(&mut registry.token_info_list, index);
        list_token_info.description = string::utf8(description);
        list_token_info.logo_url = string::utf8(logo_url);
        list_token_info.project_url = string::utf8(project_url);
        // update list
        let table_token_info = table::borrow_mut(&mut registry.symbol_to_token_info, symbol_str);
        table_token_info.description = string::utf8(description);
        table_token_info.logo_url = string::utf8(logo_url);
        table_token_info.project_url = string::utf8(project_url);
    }

    public entry fun update_token_info_script(
        admin: &signer,
        symbol: vector<u8>,
        description: vector<u8>,
        logo_url: vector<u8>,
        project_url: vector<u8>,
    ) acquires TokenRegistry {
        update_token_info(
            admin,
            symbol,
            description,
            logo_url,
            project_url,
        );
    }

    #[test_only]
    struct FakeBtc {}

    #[test_only]
    struct FakeEth {}

    #[test(admin=@0x1234)]
    fun test_initialize(admin: &signer){
        assert!(!is_registry_initialized(signer::address_of(admin)), 5);
        initialize(admin);
        assert!(is_registry_initialized(signer::address_of(admin)), 5);
    }

    #[test(admin=@0x1234)]
    #[expected_failure(abort_code = 2)]
    fun test_initialize_twice(admin: &signer){
        initialize(admin);
        initialize(admin);
    }

    #[test_only]
    fun do_add_token<TokenType>(admin: &signer, symbol: vector<u8>) acquires TokenRegistry {
        let name = b"name123";
        let description = b"desc123";
        let logo = b"logo123";
        let project = b"project123";
        let decimals: u8 = 6;
        add_token<TokenType>(
            admin,
            name,
            symbol,
            description,
            decimals,
            logo,
            project,
        );
        let registry = borrow_global<TokenRegistry>(signer::address_of(admin));
        let key = string::utf8(symbol);
        let token_info = table::borrow(&registry.symbol_to_token_info, key);
        assert!(token_info.name == string::utf8(name), 5);
        assert!(token_info.description == string::utf8(description), 5);
        assert!(token_info.logo_url == string::utf8(logo), 5);
        assert!(token_info.project_url == string::utf8(project), 5);
        assert!(token_info.decimals == decimals, 5);
    }

    #[test(admin=@0x1234)]
    #[expected_failure]
    fun test_add_token_before_initialize(admin: &signer) acquires TokenRegistry {
        do_add_token<FakeBtc>(admin, b"BTC");
    }

    #[test(admin=@0x1234)]
    fun test_add_token(admin: &signer) acquires TokenRegistry {
        initialize(admin);
        do_add_token<FakeBtc>(admin, b"BTC");
    }

    #[test(admin=@0x1234)]
    #[expected_failure]
    fun test_add_token_twice(admin: &signer) acquires TokenRegistry {
        initialize(admin);
        do_add_token<FakeBtc>(admin, b"BTC");
        do_add_token<FakeBtc>(admin, b"BTC");
    }

    #[test(admin=@0x1234)]
    #[expected_failure]
    fun test_add_token_same_type(admin: &signer) acquires TokenRegistry {
        initialize(admin);
        do_add_token<FakeBtc>(admin, b"BTC");
        do_add_token<FakeBtc>(admin, b"ETH");
    }

    #[test(admin=@0x1234)]
    #[expected_failure]
    fun test_add_token_same_symbol(admin: &signer) acquires TokenRegistry {
        initialize(admin);
        do_add_token<FakeBtc>(admin, b"BTC");
        do_add_token<FakeEth>(admin, b"BTC");
    }

    #[test(admin=@0x1234)]
    fun test_add_then_delist_then_add(admin: &signer) acquires TokenRegistry {
        initialize(admin);
        do_add_token<FakeBtc>(admin, b"BTC");
        assert!(has_token<FakeBtc>(signer::address_of(admin)), 5);
        delist_token(admin, b"BTC");
        assert!(!has_token<FakeBtc>(signer::address_of(admin)), 5);
        do_add_token<FakeBtc>(admin, b"BTC");
        assert!(has_token<FakeBtc>(signer::address_of(admin)), 5);
    }

    #[test(admin=@0x1234)]
    fun test_update_token(admin: &signer) acquires TokenRegistry {
        initialize(admin);
        do_add_token<FakeBtc>(admin, b"BTC");
        let description = b"description";
        let logo = b"logo";
        let project = b"project";
        update_token_info(
            admin,
            b"BTC",
            description,
            logo,
            project,
        );
        let registry = borrow_global<TokenRegistry>(signer::address_of(admin));
        let key = string::utf8(b"BTC");
        let token_info = table::borrow(&registry.symbol_to_token_info, key);
        assert!(token_info.project_url == string::utf8(project), 5);
        assert!(token_info.description == string::utf8(description), 5);
        assert!(token_info.logo_url == string::utf8(logo), 5);
    }

}
}
