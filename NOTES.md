# Branch notes

This branch starts from branch `polkadot-v1.10.1` where we first replaced all reference to the polkadot
git branch in `Cargo.toml` with a fake version `9.9.9` and the use `update-polkadot-sdk-deps.py` script from
zkVerify to update the correct versions.

```sh
mdamico@miklap:~/devel/frontier$ sed -i 's~git = "https://github.com/paritytech/polkadot-sdk", branch = "release-polkadot-v1.10.1"~version="9.9.9"~' Cargo.toml
mdamico@miklap:~/devel/frontier$ python3 ../zkVerify/scripts/update-polkadot-sdk-deps.py --no-check --no-commit release-crates-io-v1.10.0
Temporary cloning Polkadot-SDK branch release-crates-io-v1.10.0 into /tmp/tmpgixwhurw...
...cloning done!
Using commit with hash: f41976a1994f4dcd61afb7578467e574f8777cf5.
Checking zkVerify libraries to update...
sc-basic-authorship is going to be updated (from 9.9.9 to 0.38.0)
sc-block-builder is going to be updated (from 9.9.9 to 0.37.0)
sc-chain-spec is going to be updated (from 9.9.9 to 31.0.0)
sc-cli is going to be updated (from 9.9.9 to 0.40.0)
sc-client-api is going to be updated (from 9.9.9 to 32.0.0)
sc-client-db is going to be updated (from 9.9.9 to 0.39.0)
sc-consensus is going to be updated (from 9.9.9 to 0.37.0)
sc-consensus-aura is going to be updated (from 9.9.9 to 0.38.0)
sc-consensus-grandpa is going to be updated (from 9.9.9 to 0.23.0)
sc-consensus-manual-seal is going to be updated (from 9.9.9 to 0.39.0)
sc-executor is going to be updated (from 9.9.9 to 0.36.0)
sc-keystore is going to be updated (from 9.9.9 to 29.0.0)
sc-network is going to be updated (from 9.9.9 to 0.38.0)
sc-network-common is going to be updated (from 9.9.9 to 0.37.0)
sc-network-sync is going to be updated (from 9.9.9 to 0.37.0)
sc-offchain is going to be updated (from 9.9.9 to 33.0.0)
sc-rpc is going to be updated (from 9.9.9 to 33.0.0)
sc-rpc-api is going to be updated (from 9.9.9 to 0.37.0)
sc-service is going to be updated (from 9.9.9 to 0.39.0)
sc-telemetry is going to be updated (from 9.9.9 to 18.0.0)
sc-transaction-pool is going to be updated (from 9.9.9 to 32.0.0)
sc-transaction-pool-api is going to be updated (from 9.9.9 to 32.0.0)
sc-utils is going to be updated (from 9.9.9 to 17.0.0)
sp-api is going to be updated (from 9.9.9 to 30.0.0)
sp-block-builder is going to be updated (from 9.9.9 to 30.0.0)
sp-blockchain is going to be updated (from 9.9.9 to 32.0.0)
sp-consensus is going to be updated (from 9.9.9 to 0.36.0)
sp-consensus-aura is going to be updated (from 9.9.9 to 0.36.0)
sp-consensus-grandpa is going to be updated (from 9.9.9 to 17.0.0)
sp-core is going to be updated (from 9.9.9 to 32.0.0)
sp-crypto-hashing is going to be updated (from 9.9.9 to 0.1.0)
sp-database is going to be updated (from 9.9.9 to 10.0.0)
sp-externalities is going to be updated (from 9.9.9 to 0.28.0)
sp-genesis-builder is going to be updated (from 9.9.9 to 0.11.0)
sp-inherents is going to be updated (from 9.9.9 to 30.0.0)
sp-io is going to be updated (from 9.9.9 to 34.0.0)
sp-keyring is going to be updated (from 9.9.9 to 35.0.0)
sp-offchain is going to be updated (from 9.9.9 to 30.0.0)
sp-runtime is going to be updated (from 9.9.9 to 35.0.0)
sp-runtime-interface is going to be updated (from 9.9.9 to 27.0.0)
sp-session is going to be updated (from 9.9.9 to 31.0.0)
sp-state-machine is going to be updated (from 9.9.9 to 0.39.0)
sp-std is going to be updated (from 9.9.9 to 14.0.0)
sp-storage is going to be updated (from 9.9.9 to 21.0.0)
sp-timestamp is going to be updated (from 9.9.9 to 30.0.0)
sp-transaction-pool is going to be updated (from 9.9.9 to 30.0.0)
sp-version is going to be updated (from 9.9.9 to 33.0.0)
sp-weights is going to be updated (from 9.9.9 to 31.0.0)
frame-benchmarking is going to be updated (from 9.9.9 to 32.0.0)
frame-executive is going to be updated (from 9.9.9 to 32.0.0)
frame-support is going to be updated (from 9.9.9 to 32.0.0)
frame-system is going to be updated (from 9.9.9 to 32.0.0)
frame-system-benchmarking is going to be updated (from 9.9.9 to 32.0.0)
frame-system-rpc-runtime-api is going to be updated (from 9.9.9 to 30.0.0)
pallet-aura is going to be updated (from 9.9.9 to 31.0.0)
pallet-balances is going to be updated (from 9.9.9 to 33.0.0)
pallet-grandpa is going to be updated (from 9.9.9 to 32.0.0)
pallet-sudo is going to be updated (from 9.9.9 to 32.0.0)
pallet-timestamp is going to be updated (from 9.9.9 to 31.0.0)
pallet-transaction-payment is going to be updated (from 9.9.9 to 32.0.0)
pallet-transaction-payment-rpc is going to be updated (from 9.9.9 to 34.0.0)
pallet-transaction-payment-rpc-runtime-api is going to be updated (from 9.9.9 to 32.0.0)
pallet-utility is going to be updated (from 9.9.9 to 32.0.0)
frame-benchmarking-cli is going to be updated (from 9.9.9 to 36.0.0)
prometheus-endpoint is going to be updated (from 9.9.9 to 0.17.0)
substrate-build-script-utils is going to be updated (from 9.9.9 to 11.0.0)
substrate-frame-rpc-system is going to be updated (from 9.9.9 to 32.0.0)
substrate-test-runtime-client is going to be updated (from 9.9.9 to 0.1.0)
substrate-wasm-builder is going to be updated (from 9.9.9 to 21.0.0)
xcm is going to be updated (from 9.9.9 to 11.0.0)
...checking done!
Updating Cargo.toml file...
...updating done!
```

I've also updated the `rust-toolchain.toml` file to use stable version.

## ATTENTION

In order to make just `cargo` happy on read all metadata information I've also changed the
dependency from `substrate-test-runtime-client` that's a not published crate. In this case 
I've referred (wrongly) to the polkadot branch one.

```toml
substrate-test-runtime-client = { git = "https://github.com/paritytech/polkadot-sdk", branch = "release-crates-io-v1.10.0" }
```

Why this is wrong: because the `substrate-test-runtime-client` use lot of substrate dependency
with the correct version but with also the `path` directive, so it uses the crates from the
git sources and, even if the crates have the same version, the compiler considers all the
types from these crates not the same that the _code under test_ uses.

Ideal could be to create our own repo with a fork of all substrate and polkadot test
package to maintain the crates-io branch: with this new repo we can also move the
tests pakages from zkVerify.

## Test implementation

```sh
> make integration-test
```
