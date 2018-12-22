const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require("web3");
const compiledSet = require('./build/set_of_ads.json');

const provider = new HDWalletProvider(
   'tray expire wall burden blur sausage prosper whisper magnet immune assume luxury',
   'https://rinkeby.infura.io/v3/167d46097ac8446190da258da673fa66' 
);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ',accounts[0]);

    const res = await new web3.eth.Contract(JSON.parse(compiledSet.interface))
                    .deploy({data:compiledSet.bytecode,arguments:['Hi there']})
                    .send({gas :'1000000',from:accounts[0]});

    console.log("deployed to ",res.options.address);    


};
deploy();