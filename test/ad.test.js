const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 =  require('web3');
const web3  = new Web3(ganache.provider());
const compiledSet  = require ("../ethereum/build/set_of_ads.json");

const compiledAd  = require ("../ethereum/build/ad.json");


let accounts,set,Adsaddr,ad;

beforeEach (async ()=> {
accounts = await web3.eth.getAccounts();
set = await  new  web3.eth.Contract(JSON.parse(compiledSet.interface)).deploy({data:compiledSet.bytecode}).send({from:accounts[0],gas:'1000000'});
await set.methods.gen_ad('2','20','20% profit').send({
    from : accounts[0],
    gas : '1000000'
});
 const returnedAdd = await set.methods.get_set().call();
 //console.log(returnedAdd);
 Adsaddr = returnedAdd[0];

 ad = await new web3.eth.Contract(JSON.parse(compiledAd.interface),Adsaddr);

// console.log(ad);


});

describe ('Addresses Assign ? ',()=> {
it('deploys set and adds ',()=>{
    assert.ok(set.options.address);
    assert.ok(ad.options.address);
});

it('Creator set ? ',async ()=>{
    const cret = await ad.methods.creator().call();

    assert.equal(accounts[0],cret); 
});

it('requires Min  ? ',async ()=>{
    try{
        await ad.methods.invest_money().send({
            value :1,
            from : accounts[1]
        });
        assert(false);
    }
    catch(err){
        assert(err); 
    }
});

// it('Allows money to send ',async ()=>{
//     const resultOfInvesting = await ad.methods.no_of_investors().call();
//     assert(resOfInvesting);
//     await ad.methods.invest_money().send({
//         value:'3',
//         from : accounts[1],
//         gas : '1000000'

//     });
//      resultOfInvesting = await ad.methods.no_of_investors().call();
//     assert(resOfInvesting);
// });

});

