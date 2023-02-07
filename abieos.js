if (process.platform === "linux") {
  const abieos = require("./dist/abieos.node");
  module.exports = {
    json_to_hex: (contract_name, type, json) => {
      const data = abieos.json_to_hex(
        contract_name,
        type,
        typeof json === "object" ? JSON.stringify(json) : json
      );
      if (data === "PARSING_ERROR") {
        throw new Error("failed to parse data");
      } else {
        return data;
      }
    },
    string_to_name: abieos.string_to_name,
    hex_to_json: (contract_name, type, hex) => {
      console.log("-------------------HEX_TO_JSON-------------------");
      const data = abieos.hex_to_json(contract_name, type, hex);
      if (data) {
        try {
          return JSON.parse(data);
        } catch (e) {
          throw new Error("failed to parse json string: " + data);
        }
      } else {
        throw new Error("failed to parse hex data");
      }
    },
    bin_to_json: (contract_name, type, buffer) => {
      console.log("-------------------BIN_TO_JSON-------------------");
      console.log({ contract_name, type, buffer });
      const data = abieos.bin_to_json(contract_name, type, buffer);
      console.log("DATA: ", data);
      if (data[0] === "{" || data[0] === "[") {
        try {
          console.log(
            "-------------------FINISH-BIN_TO_JSON-------------------"
          );
          return JSON.parse(data);
        } catch (e) {
          console.log("FAILED-BIN_TO_JSON: ", e.message);
          throw new Error("json parse error");
        }
      } else {
        throw new Error(data);
      }
    },
    load_abi: abieos.load_abi,
    load_abi_hex: abieos.load_abi_hex,
    get_type_for_action: (contract_name, action_name) => {
      const result = abieos.get_type_for_action(contract_name, action_name);
      if (result === "NOT_FOUND") {
        throw new Error(
          "action " + action_name + " not found on contract " + contract_name
        );
      } else {
        return result;
      }
    },
    get_type_for_table: (contract_name, table_name) => {
      const result = abieos.get_type_for_table(contract_name, table_name);
      if (result === "NOT_FOUND") {
        throw new Error(
          "table " + table_name + " not found on contract " + contract_name
        );
      } else {
        return result;
      }
    },
    delete_contract: abieos.delete_contract,
  };
} else {
  module.exports = null;
}
