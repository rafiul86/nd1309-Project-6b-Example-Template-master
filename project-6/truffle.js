const HDWalletProvider = require('truffle-hdwallet-provider');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby : {
      provider : function(){
        return new HDWalletProvider("decade reduce donkey bottom uncle electric practice sun giggle predict palace mango", "https://rinkeby.infura.io/v3/3442a1296d614f0fb389d044457a9160")
      },
      network_id :4,
      gas : 4500000,
      price : 10000000000
    },
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};