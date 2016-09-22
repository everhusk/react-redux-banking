import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bankActions';

class HomePage extends React.Component {

  constructor(props,context){
    super(props,context);
    this.state = {
      amount: this.props.account.balance
    }
    this.handleChange = this.handleChange.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  handleChange(e){
    this.setState({amount:parseInt(e.target.value)});
  }

  deposit(){
    this.props.actions.deposit(this.state.amount);
  }

  withdraw(){
    this.props.actions.withdraw(this.state.amount);
  }

  render(){
    const {account} = this.props.account;
    return (
      <div>
        <h1>Current Bank Balance: ${account.balance}</h1>

        <h2>Enter an amount:</h2>
        <input type="number" onChange={this.handleChange}/><br/>
        <button onClick={this.deposit}>Make Deposit</button>
        <button onClick={this.withdraw}>Make Withdrawal</button>

      </div>
    )
  }
}

HomePage.propTypes = {
  account: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    account: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
