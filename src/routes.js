import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './containers/HomePage';
import WithdrawPage from './containers/WithdrawPage';
import DepositPage from './containers/DepositPage';
import NotFoundPage from './containers/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/withdrawals" component={WithdrawPage}/>
    <Route path="/deposits" component={DepositPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
