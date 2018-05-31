import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Mail from '@material-ui/icons/Mail';
import Work from '@material-ui/icons/Work';
import Code from '@material-ui/icons/Code';
import Link from '@material-ui/icons/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    maxWidth: '900px',
    margin: '0 auto'
  },
  linkIcon: {
    color: theme.palette.primary.dark
  }
});

/**
  Render the contacts view.
*/
function Contacts({ classes }) {
  return (
    <Paper
      className={classes.container}
      elevation={0}
    >
      <Typography
        variant="subheading"
      >
        Thanks for thinking about getting in contact.
      </Typography>
      <Typography>
        You can reach out via:
      </Typography>
      <List>
        <ListItem
          component="a"
          href="https://uk.linkedin.com/in/alfio-parisi-2b3baa13b"
        >
          <ListItemIcon>
            <Work
              className={classes.linkIcon}
            />
          </ListItemIcon>
          <ListItemText
            primary="Linkedin"
          />
          <ListItemIcon>
            <Link
              className={classes.linkIcon}
            />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component="a"
          href="https://github.com/alf1o"
        >
          <ListItemIcon>
            <Code
              className={classes.linkIcon}
            />
          </ListItemIcon>
          <ListItemText
            primary="GitHub"
          />
          <ListItemIcon>
            <Link
              className={classes.linkIcon}
            />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Mail
              className={classes.linkIcon}
            />
          </ListItemIcon>
          <ListItemText primary="Email: alfioparisi.93@gmail.com" />
        </ListItem>
      </List>
    </Paper>
  );
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export { Contacts };
export default withStyles(styles)(Contacts);
