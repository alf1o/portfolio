import React, { Component, Fragment } from 'react';
import Header from './Header';
import withRoot from '../withRoot';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export { App };
export default withRoot(App);
