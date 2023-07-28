var xyz = artifacts.require("./xyz.sol");

module.exports = function (deployer) {
    deployer.deploy(xyz);
    
};  // truffle migrate --reset --network ganache        // truffle migrate --reset --network ropsten  