import React from 'react';
import { Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path='/home' component={Home} />
      </div>
    );
  }
}

export default Routes;
