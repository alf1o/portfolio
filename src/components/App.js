import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import ProjectTabs from './ProjectTabs';
import Project from './Project';
import Contacts from './Contacts';
import About from './About';
import Navigation from './Navigation';
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    zIndex: 1,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  }
};

// TODO: fix components width
class App extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired
  };

  render() {
    const { classes, repos } = this.props;
    return (
      <Paper
        className={classes.container}
      >
        <Header />
        <Navigation />
        <About />
        <Contacts />
        <ProjectTabs projects={repos} />
        {repos.map(repo => (
          <Project key={repo.name}
            project={repo}
          />
        ))}
      </Paper>
    );
  }
}

export { App };
export default withRoot(withStyles(styles)(App));
