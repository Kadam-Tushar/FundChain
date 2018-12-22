import web3 from './web3';
import ad from './build/ad.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(ad.interface), address);
};

