# demo-rollup-basic
Demonstrates a minimal Rollup configuration to bundle shared resources
across client and server code. This is a possible configuration to use
for building `foundry.js` and the server backend from shared code.

An IIFE bundle is produced with the `foundry` namespace for inclusion 
as a global script resource with this issue in mind: https://gitlab.com/foundrynet/foundryvtt/-/issues/4156

In this case both the common resources and client resources are namespaced under `foundry` as one bundle.


An ESM client bundle is created just demonstrate that it could also 
be utilized by ESM script modules, however is not the proposed path forward.

The server bundle is produced in `./dist` and is simply mock / dummy code, 
but shows how the common shared resources can be utilized across client / server 
bundles.

There are two NPM scripts. 
- `build` - Invokes Rollup to build the client and server bundles to `./public` and `./dist`.
  

- `serve` - Uses `http-server` to pop up a web server with the client bundles. By default this is set to localhost:8080.
The index.html simply loads the iife script global version of the mock `foundry.js` that is accessible from the 
`foundry` namespace by all scripts. `test-script.js` logs to the console the keys of the script global foundry namespace. 
`test-esm.js` load an ESM module script and logs the global `foundry` namespace in addition to demonstrating that
the ESM bundle version can be loaded as well logging the keys of the `foundry` import.  