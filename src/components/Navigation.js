import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  container: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  }
});

/**
  Render the side menu for navigation.
  Use a swipeable drawer for mobile and a permanent drawer otherwise.
*/
// TODO: gets a list of routes as prop
class Navigation extends Component {

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
    const { classes } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List></List>
      </div>
    );

    return (
      <div className={classes.container}>
        <Hidden
          mdUp={true}
        >
          <SwipeableDrawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onOpen={this.handleDrawerToggle}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden
          smDown={true}
          implementation="css"
        >
          <Drawer
            variant="permanent"
            open={true}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export { Navigation };
export default withStyles(styles)(Navigation);
