import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
function Navigation({ classes, onDrawerSwipe, isOpen }) {
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Projects" />
        </ListItem>
      </List>
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
          open={isOpen}
          onOpen={onDrawerSwipe}
          onClose={onDrawerSwipe}
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

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerSwipe: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export { Navigation };
export default withStyles(styles)(Navigation);