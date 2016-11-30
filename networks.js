var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
    name: 'livenet',
    magic: hex('faceb5e9'),
    addressVersion: 0x3d,
    privKeyVersion: 0x80,
    P2SHVersion: 0x7b,
    hkeyPublicVersion: 0x0488b21e,
    hkeyPrivateVersion: 0x0488ade4,
    genesisBlock: {
      hash: hex('0ecfdfbf02cfea31e6ca18fde777796e52afb0618d584bf9369889c35c030000'),
      merkle_root: hex('986b677d7d6f568006a8a897efb712eefb8219efa42038ca36c479ebe93fd573'),
      height: 0,
      nonce: 1524017540,
      version: 1,
      prev_hash: buffertools.fill(new Buffer(32), 0),
      timestamp: 1415208967,
      bits: 0x1d00ffff,
    },
    dnsSeeds: [
		'104.236.26.26'
    ],
    defaultClientPort: 3764
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0x0c210a17'),
  addressVersion: 0x41,
  privKeyVersion: 0xef,
  P2SHVersion: 0x7f,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
