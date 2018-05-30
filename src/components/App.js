import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Navigation from './Navigation';
import ButtonsContainer from './ButtonsContainer';
import Routes from './Routes';
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
    repos: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired
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
    const { classes, repos, text } = this.props;
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
            <Routes
              repos={repos}
              text={text}
            />
          </Paper>
        </Paper>
        <ButtonsContainer />
      </Fragment>
    );
  }
}

export { App };
export default withRoot(withStyles(styles)(App));
