import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/ad';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    type: '',
    description: '',
    price:'',
    quantity:'',
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    const { type,description, price, quantity } = this.state;

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .gen_RFM(type,description, web3.utils.toWei(price, 'ether'), quantity,false)
        .send({ from: accounts[0] });

      Router.pushRoute(`/ads/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Link route={`/ads/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Type</label>
            <Input
              value={this.state.type}
              onChange={event =>
                this.setState({ type: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Describ</label>
            <Input
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>price</label>
            <Input
              value={this.state.price}
              onChange={event =>
                this.setState({ price: event.target.value })}
            />
          </Form.Field>

            <Form.Field>
            <label>quantity</label>
            <Input
              value={this.state.quantity}
              onChange={event =>
                this.setState({ quantity: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
