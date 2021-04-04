require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture strong cruise maze clump inside light army genuine'; 
let testAccounts = [
"0xa6439a3ecd4ee2dfbba6d1e399a7f20647a2ed404a367bad4b4f86eb020ff528",
"0xf1f3c5ed694976641fee9eee470f3cb507d9477292edb76b8aa2df53c994dac8",
"0xf8e37a05d057eb610a9c8fce9931333ce942f94ed2c9adaf60941a46d14219ae",
"0x42974bad475b3dd4ff47c18674bab218a122d80cd047f5d122c89abc578bcad8",
"0xc707929e172bd33f3f27510c44980fb3bb172c8b241bb31aab79bd4cf254c62f",
"0xa3fbaf88917747aae30c7da5959edbe742f08d9cb9d8a8507d9da96ab3a86714",
"0xa959c1e3f0f426a5bb5f4651ae3a7f6aa49f9b036984e0af40d07f6b12415e61",
"0x1882b2084d563048cb466b0336dfdb8087868e3468c74d92896fca94ae0b511a",
"0xe4b96bee5fd5c793c17b9fee5efd982382fe1f848690202693b7687723d05d8c",
"0xc813f739ed51328203517b0776c386dc03ce8b6ae82e84ceff4861e56691c424"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
