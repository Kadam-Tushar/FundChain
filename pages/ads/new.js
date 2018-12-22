import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import set from '../../ethereum/set';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class adNew extends Component {
  state = {
    totalMoney:'',
    minimumContribution: '',
    investor_return :'',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await set.methods
        .gen_ad(this.state.minimumContribution,this.state.totalMoney,this.state.investor_return)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Ad</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
             <label>Total money</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.totalMoney}
              onChange={event =>
                this.setState({ totalMoney: event.target.value })}
            />
              <label>What would investor get ?</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.investor_return}
              onChange={event =>
                this.setState({ investor_return: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default adNew;
