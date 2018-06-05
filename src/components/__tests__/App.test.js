import React from 'react';
import { App } from '../App';
import { createShallow } from '@material-ui/core/test-utils';
import Header from '../Header';
import Navigation from '../Navigation';
import Routes from '../Routes';

describe('`App`', () => {
  let props = {};
  let mountedApp;
  const shallow = createShallow();

  function app() {
    if (!mountedApp) mountedApp = shallow(<App {...props} />);
    return mountedApp;
  }

  beforeEach(() => {
    props = {
      classes: {
        container: '',
        routesContainer: ''
      },
      repos: [],
      text: 'Test text'
    };
    mountedApp = undefined;
  });

  it('should have a `state.mobileOpen` property', () => {
    expect(app().state().mobileOpen).toBeDefined();
  });

  it('should have an `handleDrawerToggle` method', () => {
    expect(App.prototype.handleDrawerToggle).toBeDefined();
  });

  it('should pass `handleDrawerToggle` to `Header`', () => {
    const header = app().find(Header);
    expect(header.props().onMenuClick).toEqual(app().instance().handleDrawerToggle);
  });

  it('should pass `handleDrawerToggle` to `Navigation`', () => {
    const nav = app().find(Navigation);
    expect(nav.props().onDrawerSwipe).toEqual(app().instance().handleDrawerToggle);
  });

  it('should pass `mobileOpen` to `Navigation`', () => {
    const nav = app().find(Navigation);
    expect(nav.props().isOpen).toBe(app().state().mobileOpen);
  });

  it('should pass `repos` to `Routes`', () => {
    const rts = app().find(Routes);
    expect(rts.prop('repos')).toEqual(app().instance().props.repos);
  });

  it('should pass `repos` to `Routes`', () => {
    const rts = app().find(Routes);
    expect(rts.prop('text')).toBe(app().instance().props.text);
  });

  describe('`handleDrawerToggle`', () => {
    const hDTSpy = jest.spyOn(App.prototype, 'handleDrawerToggle');
    afterEach(() => {
      hDTSpy.mockClear();
    });

    it('should toggle `mobileOpen`', () => {
      expect(app().state().mobileOpen).toBe(false);
      hDTSpy.call(app().instance());
      expect(app().state().mobileOpen).toBe(true);
      hDTSpy.call(app().instance());
      expect(app().state().mobileOpen).toBe(false);
    });
  });

  it('shoud match snapshot', () => {
    expect(app()).toMatchSnapshot();
  });
});
