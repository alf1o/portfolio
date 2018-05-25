import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex'
  },
  gridList: {
    flex: 1
  },
  project: {
    // width: '100%',
    height: '100%',
    border: '1px solid black'
  }
};
/**
  Render a grid list of projects.
  Each project is retrieved from GitHub.
*/
// TODO: somehow `GridList` gets an inline style of `margin: -2px` so we need to
// pass `margin: auto 0` inline to override that.
// Same for `ListSubheader`
// TODO: `Button` renders a `Link` to <a href={repo.url}>View Code</a>
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
            <div className={classes.project} />
            <GridListTileBar
              title={repo.name}
              titlePosition="top"
              subtitle={<span>created: {repo.date}</span>}
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
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
