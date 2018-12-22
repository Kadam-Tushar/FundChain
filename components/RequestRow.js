import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/ad';

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.vote_yes(this.props.id).send({
      from: accounts[0]
    });
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.deploys_rfm(this.props.id).send({
      from: accounts[0]
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.vote_cnt > 1;

    return (
      <Row
        disabled={request.status}
        positive={readyToFinalize && !request.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{request.item_name}</Cell>
        <Cell>{web3.utils.fromWei(request.item_price, 'ether')}</Cell>
        
        
        <Cell>
          {request.status ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.status ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Deploy
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
