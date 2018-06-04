import React from 'react';
import Routes from '../Routes';
import { createMount } from '@material-ui/core/test-utils';
import Home from '../Home';
import Contacts from '../Contacts';
import About from '../About';
import ProjectTabs from '../ProjectTabs';
import { MemoryRouter } from 'react-router-dom';

describe('`Routes`', () => {
  let props = {};
  let mountedRoutes;
  const mount = createMount();

  function routes(path) {
    if (!mountedRoutes) mountedRoutes = mount(
      <MemoryRouter initialEntries={[path]}>
        <Routes {...props} />
      </MemoryRouter>
    );
    return mountedRoutes;
  }

  beforeEach(() => {
    props = {
      repos: [],
      text: 'Example'
    };
    mountedRoutes = undefined;
  });

  it('should render `Home` at the index path', () => {
    expect(routes('/').find(Home).length).toBe(1);
    expect(routes().find(Contacts).length).toBe(0);
    expect(routes().find(About).length).toBe(0);
    expect(routes().find(ProjectTabs).length).toBe(0);
  });

  it('should render `Contacts` at the /contacts path', () => {
    expect(routes('/contacts').find(Home).length).toBe(0);
    expect(routes().find(Contacts).length).toBe(1);
    expect(routes().find(About).length).toBe(0);
    expect(routes().find(ProjectTabs).length).toBe(0);
  });

  it('should render `About` at the /about path', () => {
    expect(routes('/about').find(Home).length).toBe(0);
    expect(routes().find(Contacts).length).toBe(0);
    expect(routes().find(About).length).toBe(1);
    expect(routes().find(ProjectTabs).length).toBe(0);
  });

  it('should render `ProjectTabs` at the /projects path', () => {
    expect(routes('/projects').find(Home).length).toBe(0);
    expect(routes().find(Contacts).length).toBe(0);
    expect(routes().find(About).length).toBe(0);
    expect(routes().find(ProjectTabs).length).toBe(1);
  });
});
