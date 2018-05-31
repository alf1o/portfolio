import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  container: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      width: '100vw'
    }
  },
  list: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  },
  links: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      paddingRight: 0,
      textAlign: 'center'
    }
  }
});

const routes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects/Arcade Game'
  },
  {
    name: 'Contacts',
    path: '/contacts'
  },
  {
    name: 'About',
    path: '/about'
  }
];

/**
  Render the side menu for navigation.
  Use a swipeable drawer for mobile and a permanent drawer otherwise.
*/
// TODO: styles for active link
function Navigation({ classes, onDrawerSwipe, isOpen }) {
  const drawer = (
    <List
      className={classes.list}
    >
      {routes.map(route => (
        <ListItem key={route.name}
          component={NavLink}
          to={route.path}
          className={classes.links}
        >
          <ListItemText primary={route.name} />
        </ListItem>
      ))}
    </List>
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
          <div className={classes.toolbar} />
          <Divider />
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      <Hidden
        smDown={true}
        implementation="css"
      >
        <Drawer
          anchor="top"
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
