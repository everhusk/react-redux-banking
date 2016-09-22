import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Account</IndexLink>
      {' | '}
      <Link to="/withdrawals">Withdrawals</Link>
      {' | '}
      <Link to="/deposits">Deposits</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
