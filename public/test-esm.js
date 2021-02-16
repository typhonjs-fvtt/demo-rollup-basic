import * as foundryESM from './foundry-esm.js';

// Output the keys from the script global version of `foundry.js`.
console.log(`Can see foundry script instance from test-esm.js: \n${Object.keys(foundry)}`);

// Output the keys from the ESM import above of `foundry.js`.
console.log(`Can see foundry ESM from test-esm.js: \n${Object.keys(foundryESM)}`);

