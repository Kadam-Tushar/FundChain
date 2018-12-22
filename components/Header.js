import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <div>
    
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <Menu inverted style={{ marginTop: '0px' , height:'70px',font:'20px'}}>
      
    <Link route="/">
    <a className="item">FundChain</a>
    </Link>
      <Menu.Menu >
      <Link route="/ads/new">
    <a className="item">Ads</a>
    </Link>
      
      <Menu.Item>+</Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
      <Link route="/">
    <a className="item">Login</a>
    </Link>
    <Link route="/">
    <a className="item">New Account</a>
    </Link>
      </Menu.Menu>

      
    </Menu>
    <div className="jumbotron">
  <h1>Funding Website</h1>
  <p>This is some text.</p> 
</div>
    </div>
  );
};
