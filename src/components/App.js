import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import ProjectTabs from './ProjectTabs';
import Project from './Project';
import Navigation from './Navigation';
import ButtonsContainer from './ButtonsContainer';
import Contacts from './Contacts';
import About from './About';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  container: {
    zIndex: 1,
    width: '100%'
  },
  routesContainer: {
    width: '100%',
    height: '100%'
  }
});

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
        <Paper
          className={classes.container}
        >
          <Navigation
            onDrawerSwipe={this.handleDrawerToggle}
            isOpen={mobileOpen}
          />
          <Paper
            className={classes.routesContainer}
          >
            <Switch>
              <Route
                path="/contacts"
                component={Contacts}
              />
              <Route
                path="/about"
                component={About}
              />
              <Route
                path="/"
                render={match => (
                  <div>
                  <ProjectTabs projects={repos} />
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
                  </div>
                )}
              />
            </Switch>
          </Paper>
        </Paper>
        <ButtonsContainer />
      </Fragment>
    );
  }
}

export { App };
export default withRoot(withStyles(styles)(App));
