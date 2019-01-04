/*
Higher-Order Components allows to:
- reuse code
- render hijacking
- prop manipulation
- abstract state
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>These is some {props.info}</p>
  </div>
);

const withAdminWarnings = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private data. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You must log in to see the info!</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarnings(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="more detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="more detail" />, document.getElementById('app'));
