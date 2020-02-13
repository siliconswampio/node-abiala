declare namespace abieos {
    function string_to_name(name_string: string): BigInteger;

    function json_to_hex(contract_name: string, type: string, json: string, abi: string): string;

    function hex_to_json(contract_name: string, type: string, hex: string): string;

    function bin_to_json(contract_name: string, type: string, buffer: Buffer): string;

    function load_abi(contract_name: string, abi: string): boolean;

    function load_abi_hex(contract_name: string, abihex: string): boolean;

    function get_type_for_action(contract_name: string, action_name: string): string;

    function get_type_for_table(contract_name: string, table_name: string): string;

    function delete_contract(contract_name: string): boolean;
}

export = abieos;
