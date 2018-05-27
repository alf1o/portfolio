import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import withRoot from '../withRoot';

class App extends Component {

  static propTypes = {
    repos: PropTypes.array.isRequired
  };

  render() {
    const { repos } = this.props;
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export { App };
export default withRoot(App);
