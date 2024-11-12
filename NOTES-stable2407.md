# Branch notes

Based on the branch 'stable2407' from https://github.com/polkadot-evm/frontier/ where we first replaced all reference to the polkadot
git branch in `Cargo.toml` with a fake version `9.9.9` and the use `update-polkadot-sdk-deps.py` script from
zkVerify to update the correct versions.

## 1. Replace the polkadot git branch with a fake version in `Cargo.toml`:

MacOS:
```bash
sed -i '' -e 's~git = "https://github.com/paritytech/polkadot-sdk", branch = "stable2407"~version = "9.9.9"~' Cargo.toml 
```

Linux:
```bash
sed -i 's~git = "https://github.com/paritytech/polkadot-sdk", branch = "stable2407"~version = "9.9.9"~' Cargo.toml 
```

## 2 Update the dependencies with the correct versions:

```bash
python3 ../zkVerify/scripts/update-polkadot-sdk-deps.py --no-check --no-commit stable2407
```

Script output:
```bash
Checking zkVerify libraries to update...
sc-basic-authorship is going to be updated (from 9.9.9 to 0.44.0)
sc-block-builder is going to be updated (from 9.9.9 to 0.42.0)
sc-chain-spec is going to be updated (from 9.9.9 to 37.0.0)
sc-cli is going to be updated (from 9.9.9 to 0.46.0)
sc-client-api is going to be updated (from 9.9.9 to 37.0.0)
sc-client-db is going to be updated (from 9.9.9 to 0.44.0)
sc-consensus is going to be updated (from 9.9.9 to 0.43.0)
sc-consensus-aura is going to be updated (from 9.9.9 to 0.44.0)
sc-consensus-grandpa is going to be updated (from 9.9.9 to 0.29.1)
sc-consensus-manual-seal is going to be updated (from 9.9.9 to 0.45.0)
sc-executor is going to be updated (from 9.9.9 to 0.40.0)
sc-keystore is going to be updated (from 9.9.9 to 33.0.0)
sc-network is going to be updated (from 9.9.9 to 0.44.0)
sc-network-common is going to be updated (from 9.9.9 to 0.43.0)
sc-network-sync is going to be updated (from 9.9.9 to 0.43.0)
sc-offchain is going to be updated (from 9.9.9 to 39.0.0)
sc-rpc is going to be updated (from 9.9.9 to 39.0.0)
sc-rpc-api is going to be updated (from 9.9.9 to 0.43.0)
sc-service is going to be updated (from 9.9.9 to 0.45.0)
sc-telemetry is going to be updated (from 9.9.9 to 24.0.0)
sc-transaction-pool is going to be updated (from 9.9.9 to 37.0.0)
sc-transaction-pool-api is going to be updated (from 9.9.9 to 37.0.0)
sc-utils is going to be updated (from 9.9.9 to 17.0.0)
sp-api is going to be updated (from 9.9.9 to 34.0.0)
sp-block-builder is going to be updated (from 9.9.9 to 34.0.0)
sp-blockchain is going to be updated (from 9.9.9 to 37.0.1)
sp-consensus is going to be updated (from 9.9.9 to 0.40.0)
sp-consensus-aura is going to be updated (from 9.9.9 to 0.40.0)
sp-consensus-grandpa is going to be updated (from 9.9.9 to 21.0.0)
sp-core is going to be updated (from 9.9.9 to 34.0.0)
sp-crypto-hashing is going to be updated (from 9.9.9 to 0.1.0)
sp-database is going to be updated (from 9.9.9 to 10.0.0)
sp-externalities is going to be updated (from 9.9.9 to 0.29.0)
sp-genesis-builder is going to be updated (from 9.9.9 to 0.15.0)
sp-inherents is going to be updated (from 9.9.9 to 34.0.0)
sp-io is going to be updated (from 9.9.9 to 38.0.0)
sp-keyring is going to be updated (from 9.9.9 to 39.0.0)
sp-offchain is going to be updated (from 9.9.9 to 34.0.0)
sp-runtime is going to be updated (from 9.9.9 to 39.0.2)
sp-runtime-interface is going to be updated (from 9.9.9 to 28.0.0)
sp-session is going to be updated (from 9.9.9 to 35.0.0)
sp-state-machine is going to be updated (from 9.9.9 to 0.43.0)
sp-std is going to be updated (from 9.9.9 to 14.0.0)
sp-storage is going to be updated (from 9.9.9 to 21.0.0)
sp-timestamp is going to be updated (from 9.9.9 to 34.0.0)
sp-transaction-pool is going to be updated (from 9.9.9 to 34.0.0)
sp-version is going to be updated (from 9.9.9 to 37.0.0)
sp-weights is going to be updated (from 9.9.9 to 31.0.0)
frame-benchmarking is going to be updated (from 9.9.9 to 37.0.0)
frame-executive is going to be updated (from 9.9.9 to 37.0.0)
frame-support is going to be updated (from 9.9.9 to 37.0.1)
frame-system is going to be updated (from 9.9.9 to 37.1.0)
frame-system-benchmarking is going to be updated (from 9.9.9 to 37.0.0)
frame-system-rpc-runtime-api is going to be updated (from 9.9.9 to 34.0.0)
pallet-aura is going to be updated (from 9.9.9 to 36.0.0)
pallet-balances is going to be updated (from 9.9.9 to 38.0.0)
pallet-grandpa is going to be updated (from 9.9.9 to 37.0.0)
pallet-sudo is going to be updated (from 9.9.9 to 37.0.0)
pallet-timestamp is going to be updated (from 9.9.9 to 36.0.1)
pallet-transaction-payment is going to be updated (from 9.9.9 to 37.0.0)
pallet-transaction-payment-rpc is going to be updated (from 9.9.9 to 40.0.0)
pallet-transaction-payment-rpc-runtime-api is going to be updated (from 9.9.9 to 37.0.0)
pallet-utility is going to be updated (from 9.9.9 to 37.0.1)
frame-benchmarking-cli is going to be updated (from 9.9.9 to 42.0.1)
prometheus-endpoint is going to be updated (from 9.9.9 to 0.17.0)
substrate-build-script-utils is going to be updated (from 9.9.9 to 11.0.0)
substrate-frame-rpc-system is going to be updated (from 9.9.9 to 38.0.0)
substrate-test-runtime-client is going to be updated (from 9.9.9 to 2.0.0)
substrate-wasm-builder is going to be updated (from 9.9.9 to 24.0.0)
xcm is going to be updated (from 9.9.9 to 14.1.0)
...checking done!
Updating Cargo.toml file...
...updating done!
```


## ATTENTION

`substrate-test-runtime-client` is not published, so leave the definition pointing to a git source.
Why this is wrong: because the `substrate-test-runtime-client` use lot of substrate dependency
with the correct version but with also the `path` directive, so it uses the crates from the
git sources and, even if the crates have the same version, the compiler considers all the
types from these crates not the same that the _code under test_ uses.

```toml
substrate-test-runtime-client = { git = "https://github.com/paritytech/polkadot-sdk", branch = "release-crates-io-v1.10.0" }
```


## Test implementation

```sh
> make integration-test
```