import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import profilePic from '../imgs/profile_pic-min.jpg';

const styles = theme => ({
  container: {
    margin: '1% auto 50px auto',
    maxWidth: '900px'
  },
  imgContainer: {
    float: 'left',
    padding: theme.spacing.unit,
    marginRight: '10px',
    textAlign: 'center'
  },
  img: {
    margin: 'auto',
    marginBottom: '5px',
    width: '22vmin',
    height: '22vmin'
  },
  textContainer: {
    margin: '0 3%'
  },
  text: {
    lineHeight: 1.6,
    marginBottom: '15px',
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.fontSize + 2
    }
  }
});

/**
  Render an avatar image and some background text.
*/
function About({ classes, text }) {
  return (
    <Paper
      elevation={0}
      className={classes.container}
    >
      <Paper
        className={classes.imgContainer}
        elevation={0}
      >
        <Avatar
          alt="Alfio's profile picture"
          src={profilePic}
          className={classes.img}
        />
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
      <Paper
        className={classes.textContainer}
        elevation={0}
      >
        {text.split('\n').map((line, i) => (
          <Typography key={i}
            component="p"
            className={classes.text}
          >
            {line}
          </Typography>
        ))}
      </Paper>
    </Paper>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export { About };
export default withStyles(styles)(About);
