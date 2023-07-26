var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function (deployer) {
    deployer.deploy(SimpleStorage);
    
};  // truffle migrate --reset --network ganache        // truffle migrate --reset --network ropsten  