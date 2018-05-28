import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import ProjectTabs from './ProjectTabs';
import Project from './Project';
import Navigation from './Navigation';
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    zIndex: 1,
    width: '100%',
    display: 'flex'
  },
  tabsContainer: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 240px)' // 240px is the drawer width
    }
  }
});

// TODO: fix components width
class App extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired
  };

  render() {
    const { classes, repos } = this.props;
    return (
      <Fragment>
        <Header />
        <Paper
          className={classes.container}
        >
          <Navigation />
          <Paper
            className={classes.tabsContainer}
          >
            <ProjectTabs projects={repos} />
            {repos.map(repo => (
              <Project key={repo.name}
                project={repo}
              />
            ))}
          </Paper>
        </Paper>
      </Fragment>
    );
  }
}

export { App };
export default withRoot(withStyles(styles)(App));
