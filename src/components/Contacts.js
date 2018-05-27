import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Mail from '@material-ui/icons/Mail';
import Work from '@material-ui/icons/Work';
import Code from '@material-ui/icons/Code';

/**
  Render the contacts view.
*/
// TODO: each contact should be a `Link`
function Contacts() {
  return (
    <Paper>
      <Typography
        variant="subheading"
      >
        Thanks for thinking about getting in contact.
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="alfioparisi.93@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Code />
          </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItem>
      </List>
    </Paper>
  );
}

export default Contacts;
