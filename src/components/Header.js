import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/**
  Render the main header.
  The menu icon is used to open the `SideMenu`.
*/
function Header() {
  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <IconButton
          aria-label="Menu"
        >
          <MenuIcon
            color="secondary"
          />
        </IconButton>
        <Typography
          variant="title"
        >
          Alfio Parisi
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
