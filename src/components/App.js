import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import ProjectTabs from './ProjectTabs';
import Project from './Project';
import Navigation from './Navigation';
import ButtonsContainer from './ButtonsContainer';
import { Route } from 'react-router-dom';
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
    height: '100%'
  }
});

// TODO: fix components width
class App extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle() {
    this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));
  }

  render() {
    const { classes, repos } = this.props;
    const { mobileOpen } = this.state;
    return (
      <Fragment>
        <Header
          onMenuClick={this.handleDrawerToggle}
        />
        <ProjectTabs projects={repos} />
        <Paper
          className={classes.container}
        >
          <Navigation
            onDrawerSwipe={this.handleDrawerToggle}
            isOpen={mobileOpen}
          />
          <Paper
            className={classes.tabsContainer}
          >
            {repos.map(repo => (
              <Route key={repo.name}
                path={`/${repo.name}`}
                render={match => (
                  <Project
                    project={repo}
                  />
                )}
              />
            ))}
          </Paper>
        </Paper>
        <ButtonsContainer />
      </Fragment>
    );
  }
}

export { App };
export default withRoot(withStyles(styles)(App));
