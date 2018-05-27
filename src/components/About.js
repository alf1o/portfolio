import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  imgContainer: {
    float: 'left',
    padding: theme.spacing.unit,
    marginRight: '10px'
  }
});

/**
  Render an avatar and some background text.
*/
// TODO: text
function About({ classes }) {
  return (
    <Paper>
      <Paper
        className={classes.imgContainer}
      >
        <Avatar
          alt=""
          src=""
          srcSet=""
          sizes=""
        >
          A
        </Avatar>
        <Typography
          variant="caption"
        >
          Alfio Parisi
        </Typography>
        <Typography
          variant="caption"
        >
          London, UK
        </Typography>
      </Paper>
      <Paper>
        <Typography
          component="p"
        >
          I am from Ischia, an island in the South of Italy.
        </Typography>
        <Typography
          component="p"
        >
          Came to London by the end of 2016.
        </Typography>
        <Typography
          component="p"
        >
          Started coding around that time too.
        </Typography>
        <Typography
          component="p"
        >
          Took the first Udacity course in March 2017.
        </Typography>
        <Typography
          component="p"
        >
          Took the second Udacity course in November 2017.
        </Typography>
      </Paper>
    </Paper>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export { About };
export default withStyles(styles)(About);
