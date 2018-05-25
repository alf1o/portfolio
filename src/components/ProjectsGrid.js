import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Project from './Project';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex' // so we can center the list with `margin: auto`
  },
  gridList: {
    flex: 1
  }
};
/**
  Render a grid list of projects.
  Each project is retrieved from GitHub.
*/
// TODO: somehow `GridList` gets an inline style of `margin: -2px` so we need to
// pass `margin: auto 0` inline to override that.
// Same for `ListSubheader`
// NB: have to render `GridListTile` here rather than in `Project`.
function ProjectsGrid({ classes, repos }) {
  return (
    <Paper
      className={classes.container}
    >
      <GridList
        cols={1}
        spacing={1}
        className={classes.gridList}
        style={{ margin: 'auto 0' }}
      >
        <GridListTile
          key="Subheader"
          cols={1}
          style={{ height: 'auto' }}
        >
          <ListSubheader
            component="div"
          >
            Projects
          </ListSubheader>
        </GridListTile>
        {repos.map(repo => (
          <GridListTile key={repo.id}>
            <Project
              project={repo}
            />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
}

ProjectsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};

export { ProjectsGrid };
export default withStyles(styles)(ProjectsGrid);
