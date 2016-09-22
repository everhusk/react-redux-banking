import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const WithdrawPage = (props) => {
  return (
    <div>
      <h1>Withdrawals:</h1>
      {props.withdrawals.map(function(withdraw, index){
        return <h2 key={index}>-${withdraw.amount} @ {withdraw.timestamp}</h2>;
      })}
    </div>
  );
};

WithdrawPage.propTypes = {
  withdrawals: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    withdrawals: state.account.withdrawals
  };
}

export default connect(
  mapStateToProps
)(WithdrawPage);
