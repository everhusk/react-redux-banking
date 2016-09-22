import initialState from './initialState';

export default function bankingReducer(state = initialState, action) {

  switch (action.type) {
    case 'WITHDRAW':
      return Object.assign({}, state, {
        withdrawals: [
          ...state.withdrawals,
          {
            amount: action.amount,
            timestamp: action.timestamp
          }
        ],
        balance: state.balance - action.amount
      });

    case 'DEPOSIT':
      return Object.assign({}, state, {
        deposits: [
          ...state.deposits,
          {
            amount: action.amount,
            timestamp: action.timestamp
          }
        ],
        balance: state.balance + action.amount
      });

    default:
      return state;
  }
}
