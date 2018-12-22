const  path = require('path');
const fs = require('fs-extra');
const solc = require('solc');


const buidPath = path.resolve(__dirname,'build');
fs.removeSync(buidPath);
 
const gbhPath = path.resolve(__dirname, 'contracts','gbh.sol');

const source  = fs.readFileSync(gbhPath,'utf8');

const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buidPath);

for (let contract  in output ){
    fs.outputJsonSync( path.resolve(buidPath,contract.replace(":",'')+ '.json'),output[contract]);
}