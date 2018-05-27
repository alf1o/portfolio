import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ProjectTabs from './ProjectTabs';
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
        <ProjectTabs projects={repos} />
      </Fragment>
    );
  }
}

export { App };
export default withRoot(App);
