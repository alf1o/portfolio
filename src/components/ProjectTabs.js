import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  tabs: {
    backgroundColor: theme.palette.background.paper
  }
});

/**
  Render the tabs for projects navigation.
*/
// TODO: a `Tab` should be a `Link`
class ProjectTabs extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
  };

  render() {
    const { classes, projects } = this.props;
    return (
      <AppBar
        position="static"
      >
        <Tabs
          value={0}
          onChange={Function.prototype}
          scrollable={true}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
        >
          {projects.map(project => (
            <Tab key={project.name}
              label={project.name}
            />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}

export { ProjectTabs };
export default withStyles(styles)(ProjectTabs);
