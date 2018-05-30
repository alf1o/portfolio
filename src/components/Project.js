import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
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
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  }
});

/**
  Render a single project.
*/
// TODO: open link icon is a `Link`
function Project({ classes, project }) {
  return (
    <Card
      className={classes.card}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="project"
          >
            {project.icon}
          </Avatar>
        }
        action={
          <IconButton>
            <OpenInNew />
          </IconButton>
        }
        title={project.name}
      >
      </CardHeader>
      <CardContent>
        <Typography
          component="p"
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
                <StarIcon />
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
