// example of a thunk using the redux-thunk middleware
export function deposit(amount) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: 'DEPOSIT',
      timestamp: Date(),
      amount: Math.abs(amount)
    });
  };
}
export function withdraw(amount) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: 'WITHDRAW',
      timestamp: Date(),
      amount: Math.abs(amount)
    });
  };
}
