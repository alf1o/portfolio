import React from 'react';
import Home from '../Home';
import { createShallow } from '@material-ui/core/test-utils';

describe('`Home`', () => {
  let props = {};
  let mountedHome;
  const shallow = createShallow();

  function home() {
    if (!mountedHome) mountedHome = shallow(<Home {...props} />);
    return mountedHome;
  }

  beforeEach(() => {
    props = {
      classes: {
        container: '',
        topText: '',
        bottomText: '',
        btn: '',
        btnText: ''
      },
      match: {}
    };
  });

  it('should match snapshot', () => {
    expect(home()).toMatchSnapshot();
  });
});
