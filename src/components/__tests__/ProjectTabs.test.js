import React from 'react';
import { ProjectTabs } from '../ProjectTabs';
import { createShallow } from '@material-ui/core/test-utils';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

describe('`ProjectTabs`', () => {
  let props = {};
  let mountedTabs;
  const shallow = createShallow();

  function tabs() {
    if (!mountedTabs) mountedTabs = shallow(<ProjectTabs {...props} />);
    return mountedTabs;
  }

  beforeEach(() => {
    props = {
      classes: {
        tabs: ''
      },
      match: {
        match: {
          url: 'test.com'
        }
      },
      projects: [
        {
          name: 'hello'
        },
        {
          name: 'world'
        }
      ]
    };
    mountedTabs = undefined;
  });

  it('should have a `state.currentTab` property', () => {
    expect(tabs().state().currentTab).toBeDefined();
  });

  it('should have a `changeTab` method', () => {
    expect(ProjectTabs.prototype.changeTab).toBeDefined();
  });

  describe('`changeTab`', () => {
    const changeTabSpy = jest.spyOn(ProjectTabs.prototype, 'changeTab');

    afterEach(() => {
      changeTabSpy.mockClear();
    });

    it('should update `currentTab`', () => {
      const ts = tabs().find(Tabs);
      expect(tabs().state().currentTab).toBe(0);
      ts.simulate('change', null, 3);
      expect(tabs().state().currentTab).toBe(3);
      ts.simulate('change', null, 1);
      expect(tabs().state().currentTab).toBe(1);
    });
  });

  describe('`Tabs`', () => {
    it('should receive a `value` prop which is `changeTab`', () => {
      const ts = tabs().find(Tabs);
      expect(ts.props().value).toBe(tabs().state().currentTab);
    });

    it('should receive an `onChange` prop which is `changeTab`', () => {
      const ts = tabs().find(Tabs);
      expect(ts.props().onChange).toEqual(tabs().instance().changeTab);
    });
  });

  it('should render as many `Tab`s as `props.projects`', () => {
    const len = props.projects.length;
    const ts = tabs().find(Tab);
    expect(ts.length).toBe(len);
  });

  describe('`Tab`', () => {
    it('should receive a `to` prop which is `url` + `project.name`', () => {
      const ts = tabs().find(Tab);
      const url = props.match.match.url;
      ts.forEach((t, i) => {
        expect(t.props().to).toBe(url + '/' + props.projects[i].name);
      });
    });

    it('should receive a `label` prop `project.name`', () => {
      const ts = tabs().find(Tab);
      ts.forEach((t, i) => {
        expect(t.props().label).toBe(props.projects[i].name);
      });
    });
  });

  it('should match snapshot', () => {
    expect(tabs()).toMatchSnapshot();
  });
});
