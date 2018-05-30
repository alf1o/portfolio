import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    marginTop: '1%',
    marginBottom: '50px'
  },
  imgContainer: {
    float: 'left',
    padding: theme.spacing.unit,
    marginRight: '10px',
    textAlign: 'center'
  },
  img: {
    margin: 'auto',
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
// TODO: image
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
          alt=""
          src=""
          srcSet=""
          sizes=""
          className={classes.img}
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
