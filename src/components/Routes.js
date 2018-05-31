import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import Contacts from './Contacts';
import About from './About';
import ProjectTabs from './ProjectTabs';
import Project from './Project';
import { Switch, Route } from 'react-router-dom';

function Routes({ repos, text }) {
  return (
    <Switch>
      <Route
        exact={true}
        path="/portfolio"
        component={Home}
      />
      <Route
        path="/portfolio/contacts"
        component={Contacts}
      />
      <Route
        path="/portfolio/about"
        render={match => (
          <About text={text} />
        )}
      />
      <Route
        path="/portfolio/projects"
        render={match => (
          <Fragment>
            <ProjectTabs
              match={match}
              projects={repos}
            />
            {repos.map(repo => (
              <Route key={repo.name}
                path={`${match.url}projects/${repo.name}`}
                render={match => (
                  <Project
                    project={repo}
                  />
                )}
              />
            ))}
          </Fragment>
        )}
      />
    </Switch>
  );
}

Routes.propTypes = {
  repos: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired
};

export default Routes;
