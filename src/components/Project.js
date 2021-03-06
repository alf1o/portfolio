import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import OpenInNew from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    width: '100vw',
    height: '100%',
    lineHeight: 1.6,
    maxWidth: '900px',
    [theme.breakpoints.up('md')]: {
      margin: '5px auto 0 auto'
    }
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  },
  description: {
    marginBottom: theme.spacing.unit,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.fontSize + 1
    }
  },
  star: {
    color: theme.palette.primary.dark
  }
});

/**
  Render a single project.
*/
function Project({ classes, project }) {
  return (
    <Card
      className={classes.card}
      elevation={0}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="project"
            className={classes.avatar}
          >
            {project.icon}
          </Avatar>
        }
        action={
          <Button
            color="primary"
            href={project.url}
            target="_blank"
            rel="noopener"
          >
            <OpenInNew />
          </Button>
        }
        title={project.name}
      >
      </CardHeader>
      <CardContent>
        <Typography
          component="p"
          className={classes.description}
        >
          {project.description}
        </Typography>
        <Typography
          component="p"
          variant="body2"
        >
          Features:
        </Typography>
        <List>
          {project.features.map(feature => (
            <ListItem key={feature}>
              <ListItemIcon>
                <StarIcon
                  className={classes.star}
                />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

export { Project };
export default withStyles(styles)(Project);
