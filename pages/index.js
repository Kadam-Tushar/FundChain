import React from 'react';
import {Card,Button } from 'semantic-ui-react';
import set from '../ethereum/set';
import Layout from '../components/Layout';
import { Link } from '../routes';

class ListOfstart_ups extends React.Component {
    static async getInitialProps() {
        const adsAddresses  = await set.methods.get_set().call();
        return { adsAddresses };
    }
    renderAds(){
        const items= this.props.adsAddresses.map(address=>{
            return {
                header:address,
                description: <Link route={`/ads/${address}`}>
                <a className="item">View</a> 
                </Link>,
                fluid:true
            };
        });
        return <Card.Group items={items}/>;
    }

    render(){
        
        return (
          <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
        
        <h3>Currently hosted Start-ups</h3>
        
        <Link route="/ads/new">
    <a className="item"><Button
    style={{ marginTop: '0px' , height:'50px',}}
            floated ="right"
	        content="Create Ad"
	        icon="add circle"
            primary
            
        /></a>
    </Link>
        
        {this.renderAds()} 
        
        
        </div>
        </Layout>
        ); 
    }
   


}
export default ListOfstart_ups;