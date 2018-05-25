import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  project: {
    // width: '100%',
    height: '100%',
    border: '1px solid black'
  }
};

/**
  Render a single project (GitHub repo).
*/
// TODO: `Button` renders a `Link` to <a href={repo.url}>View Code</a>
function Project({ classes, project }) {
  return (
    <Fragment>
      <div className={classes.project} />
      <GridListTileBar
        title={project.name}
        subtitle={<span>created: {project.date}</span>}
        actionIcon={
          <IconButton>
            <InfoIcon />
          </IconButton>
        }
      />
    </Fragment>
  );
}

Project.proptypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

export { Project };
export default withStyles(styles)(Project);
