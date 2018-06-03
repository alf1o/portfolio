import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    padding: '10%',
    height: '100%'
  },
  text: {
    marginBottom: '15%'
  }
};

function NotFound({ classes }) {
  return (
    <Paper
      className={classes.container}
    >
      <Typography
        variant="display1"
        className={classes.text}
      >
        Ooops...
      </Typography>
      <Typography
        variant="display2"
        className={classes.text}
      >
        404
      </Typography>
      <Typography
        variant="title"
        className={classes.text}
      >
        You are being redirected...
      </Typography>
      <Redirect
        to="/"
      />
    </Paper>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export { NotFound };
export default withStyles(styles)(NotFound);
