import React from 'react';
import PropTypes from 'prop-types';
import Contacts from './Contacts';
import About from './About';
import ProjectTabs from './ProjectTabs';
import Project from './Project';
import { Switch, Route } from 'react-router-dom';

function Routes({ repos, text }) {
  return (
    <Switch>
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
        path="/"
        render={match => (
          <div>
            <ProjectTabs projects={repos} />
            {repos.map(repo => (
              <Route key={repo.name}
                path={`/${repo.name}`}
                render={match => (
                  <Project
                    project={repo}
                  />
                )}
              />
            ))}
          </div>
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
