import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  tabs: {
    backgroundColor: theme.palette.background.paper
  }
});

/**
  Render the tabs for projects navigation.
*/
// TODO: fix click
class ProjectTabs extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(_, value) {
    this.setState({ currentTab: value });
  }

  render() {
    const { classes, projects } = this.props;
    const { currentTab } = this.state;
    return (
      <AppBar
        position="static"
      >
        <Tabs
          value={currentTab}
          onChange={this.changeTab}
          scrollable={true}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
        >
          {projects.map(project => (
            <Tab key={project.name}
              component={Link}
              to={project.name}
              label={
                project.name
              }
            />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}

export { ProjectTabs };
export default withStyles(styles)(ProjectTabs);
