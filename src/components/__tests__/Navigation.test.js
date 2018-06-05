import React from 'react';
import Navigation from '../Navigation';
import { createShallow } from '@material-ui/core/test-utils';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';

const routes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects/Arcade Game'
  },
  {
    name: 'Contacts',
    path: '/contacts'
  },
  {
    name: 'About',
    path: '/about'
  }
];

describe('`Navigation`', () => {
  let props = {};
  let mountedNav;
  const shallow = createShallow();

  function nav() {
    if (!mountedNav) mountedNav = shallow(<Navigation {...props} />);
    return mountedNav;
  }

  beforeEach(() => {
    props = {
      classes: {
        container: '',
        toolbar: '',
        drawerPaper: '',
        list: '',
        links: ''
      },
      onDrawerSwipe: jest.fn(),
      isOpen: false
    };
    mountedNav = undefined;
  });

  it('should render a `ListItem` for every route', () => {
    const len = routes.length;
    // component renders 2 drawers
    expect(nav().dive().find('.Navigation-links-5').length).toBe(len * 2);
  });

  it('should pass to `ListItem` a `to` prop which is `route.path`', () => {
    const lis = nav().dive().find('.Navigation-links-5');
    const len = routes.length;
    lis.forEach((li, i) => {
      expect(li.props().to).toBe(routes[i % len].path);
    });
  });

  it('should pass to `ListItemText` a `primary` prop which is `route.name`', () => {
    const lits = nav().dive().find(ListItemText);
    const len = routes.length;
    lits.forEach((lit, i) => {
      expect(lit.props().primary).toBe(routes[i % len].name);
    });
  });

  describe('`SwipeableDrawer`', () => {
    it('should receive an `open` prop which is `props.isOpen`', () => {
      const swd = nav().dive().find(SwipeableDrawer);
      expect(swd.props().open).toBe(nav().props().isOpen);
    });

    it('should receive an `onOpen` prop which is `props.onDrawerSwipe`', () => {
      const swd = nav().dive().find(SwipeableDrawer);
      expect(swd.props().onOpen).toEqual(nav().props().onDrawerSwipe);
    });

    it('should receive an `onClose` prop which is `props.onDrawerSwipe`', () => {
      const swd = nav().dive().find(SwipeableDrawer);
      expect(swd.props().onClose).toEqual(nav().props().onDrawerSwipe);
    });

    it('should render the `nav`', () => {
      const swd = nav().dive().find(SwipeableDrawer);
      expect(swd.find('[component="nav"]').length).toBe(1);
    });
  });

  describe('`Drawer`', () => {
    it('should render the `nav`', () => {
      const drw = nav().dive().find(Drawer);
      expect(drw.find({ component: 'nav' }).length).toBe(1);
    });
  });

  it('should match snapshot', () => {
    expect(nav()).toMatchSnapshot();
  });
});
