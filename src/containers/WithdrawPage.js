import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {
  Divider
} from 'stardust';

const WithdrawPage = (props) => {
  return (
    <div>

      <Divider/>

      <h2 className="ui icon header">
        <div className="content">
          Withdrawals
          <div className="sub header">Your recent withdrawals</div>
        </div>
      </h2>

      <Divider/>

      <table className="ui selectable inverted red table">
        <thead>
          <tr>
            <th>Amount ($)</th>
            <th className="right aligned">Timestamp</th>
          </tr>
        </thead>
        <tbody>
        {props.withdrawals.map(function(withdraw, index){
          return (
            <tr key={index}>
              <td>-{withdraw.amount}</td>
              <td className="right aligned">{withdraw.timestamp}</td>
            </tr>
          );
        })}
        </tbody>
      </table>

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
