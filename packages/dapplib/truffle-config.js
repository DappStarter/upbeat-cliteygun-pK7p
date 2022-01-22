require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift random random company grace sleep tail system'; 
let testAccounts = [
"0x15c8ab6350e5379e3c1e24ccf4174af571dbfed8b3c7afa5d8961fcd34374546",
"0x04b89d71d46f8031088fa8a188f048e9e0308be033d481bbf51da5fb7e9f6cbf",
"0x5d76f0fcb8ac4762563a2a601f815628bee50a9e9f776819fdfe1988fe0b58f5",
"0xc5e2e0bb98a797ee69f886c7389848b25e6cfb28c963c7340235fcc4b744a299",
"0x5205cb1f2745b53563dfbbcf28d647c9b60a9ed43f350ae55f8f96a1a8a84a12",
"0xad4111bdaa75594ddd708d3d04faccc8101d87d544a12fea6b9468e8f77acc74",
"0x03370e14ec317cc50ae198bd9e1aa7af543f1e8319592b13368ee4e257bcb463",
"0x83b415cf40275aac968f690427a9d7368186db35ad62b5cd900ed4289d924089",
"0x658804faade07317a3efa0794fcb030825e87c901c7a2165fa082fd85899e2b7",
"0xd3230fc9ca14833962ae0195e4c6ac0f9a8354a2aba9a2fa54e647bef9949482"
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
            version: '^0.8.0'
        }
    }
};

