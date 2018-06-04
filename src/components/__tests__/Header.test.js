import React from 'react';
import Header from '../Header';
import { createShallow } from '@material-ui/core/test-utils';
import IconButton from '@material-ui/core/IconButton';

describe('`Header`', () => {
  let props = {};
  let mountedHeader;
  const shallow = createShallow();

  function header() {
    if (!mountedHeader) mountedHeader = shallow(<Header {...props} />);
    return mountedHeader;
  }

  beforeEach(() => {
    props = {
      onMenuClick: jest.fn()
    };
    mountedHeader = undefined;
  });

  it('should pass `onMenuClick` to `IconButton`', () => {
    expect(header().find(IconButton).props().onClick).toEqual(props.onMenuClick);
  });

  it('should match snapshot', () => {
    expect(header()).toMatchSnapshot();
  });
});
