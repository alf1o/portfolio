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
// TODO: style links
function Contacts() {
  return (
    <Paper>
      <Typography
        variant="subheading"
      >
        Thanks for thinking about getting in contact.
      </Typography>
      <Typography>
        You can reach out via:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText
            primary={
              <a href="https://uk.linkedin.com/in/alfio-parisi-2b3baa13b">
                Linkedin
              </a>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Code />
          </ListItemIcon>
          <ListItemText
            primary={
              <a href="https://github.com/alf1o">
                GitHub
              </a>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="alfioparisi.93@gmail.com" />
        </ListItem>
      </List>
    </Paper>
  );
}

export default Contacts;
