import React, { Component, Fragment } from 'react';
import Header from './Header';
import ProjectsGrid from './ProjectsGrid';
import withRoot from '../withRoot';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ProjectsGrid />
      </Fragment>
    );
  }
}

export { App };
export default withRoot(App);
