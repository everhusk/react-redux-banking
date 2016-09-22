import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const DepositPage = (props) => {
  return (
    <div>
      <h1>Deposits:</h1>
      {props.deposits.map(function(deposit, index){
        return <h2 key={ index }>+${deposit.amount} @ {deposit.timestamp}</h2>;
      })}
    </div>
  );
};

DepositPage.propTypes = {
  deposits: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    deposits: state.account.deposits
  };
}

export default connect(
  mapStateToProps
)(DepositPage);
