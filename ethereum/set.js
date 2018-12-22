import web3 from './web3';
import compiledSet from './build/set_of_ads.json';

const metamask_provider = new web3.eth.Contract(JSON.parse(compiledSet.interface),'0x29969157170B6F1d16Ed0C7A5eC5b0CF479Cbbc0');

export default metamask_provider; 