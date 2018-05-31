import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    height: '100%',
    textAlign: 'center',
    padding: '3vmax',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  topText: {
    marginBottom: '5%',
    marginTop: '-12%'
  },
  bottomText: {
    marginBottom: '5%'
  },
  btn: {
    margin: '0 auto'
  }
};

function Home({ classes }) {
  return (
    <Paper
      className={classes.container}
    >
      <Typography
        variant="display2"
        className={classes.topText}
      >
        Welcome
      </Typography>
      <Typography
        variant="display1"
        className={classes.bottomText}
      >
        to my portfolio site
      </Typography>
      <Button
        component={Link}
        to="/projects/Arcade Game"
        variant="raised"
        color="primary"
        className={classes.btn}
      >
        Explore
      </Button>
    </Paper>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export { Home };
export default withStyles(styles)(Home);
