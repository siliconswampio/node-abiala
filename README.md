# node-abieos

Node.js native binding for [abieos](https://github.com/EOSIO/abieos), with some improvements:

- Contracts can be directly updated on the map
- Added `abieos_delete_contract`
- Avoid throwing error on _extra data_ (should be handled by the application)

Made with ♥ by [EOS Rio](https://eosrio.io/)

----
**Only Linux is supported for now, import will be null on others**

- Typescript typings included
- Prebuilt binary included (Clang 9.0.0 required to build)

### Install

```
npm install --save eosrio/node-abieos#1.0.1
```

### Usage

CommonJS
```js
const nodeAbieos = require('node-abieos');
```

ES Modules
```typescript
import * as nodeAbieos from "node-abieos";
```

Basic Example
```js

// abort if not on linux
if(!nodeAbieos) {
    console.log('platform not supported');
    process.exit();
}

// Load initial abi with types on contract "0"
const base_abi = fs.readFileSync('./eosio.json').toString();
if (nodeAbieos.load_abi("0", base_abi)) {
    console.log('abi loaded');
} else {
    console.log('error loading abi')
}
```

### Building

env setup instructions soon
```bash
node-gyp rebuild
```

### License

[MIT](./LICENSE)
