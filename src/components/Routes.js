import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import Contacts from './Contacts';
import About from './About';
import ProjectTabs from './ProjectTabs';
import Project from './Project';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';

function Routes({ repos, text }) {
  return (
    <Switch>
      <Route
        exact={true}
        path="/"
        component={Home}
      />
      <Route
        path="/contacts"
        component={Contacts}
      />
      <Route
        path="/about"
        render={match => (
          <About text={text} />
        )}
      />
      <Route
        path="/projects"
        render={match => (
          <Fragment>
            <ProjectTabs
              match={match}
              projects={repos}
            />
            {repos.map(repo => (
              <Route key={repo.name}
                path={`/projects/${repo.name}`}
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
      <Route
        component={NotFound}
      />
    </Switch>
  );
}

Routes.propTypes = {
  repos: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired
};

export default Routes;
