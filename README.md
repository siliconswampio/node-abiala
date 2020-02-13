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

```shell script
npm i @eosrio/node-abieos --save
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

Check the `examples` folder for implementation examples

### Building

env setup instructions soon
```shell script
git clone https://github.com/eosrio/node-abieos.git
cd node-abieos
npm run build
```
