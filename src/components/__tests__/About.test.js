import React from 'react';
import { About } from '../About';
import { createShallow } from '@material-ui/core/test-utils';

describe('`About`', () => {
  let props = {};
  let mountedAbout;
  const shallow = createShallow();

  function about() {
    if (!mountedAbout) mountedAbout = shallow(<About {...props} />);
    return mountedAbout;
  }

  beforeEach(() => {
    props = {
      classes: {
        container: {},
        imgContainer: {},
        img: {},
        textContainer: {},
        text: {}
      },
      text: 'Example\n text'
    }
  });

  it('should render as many `p.text` as line breaks in `props.text` + 1', () => {
    const lines = props.text.split('\n').length;
    const ps = about().find({ component: 'p' }).length;
    expect(ps).toBe(lines);
  });

  it('should match snapshot', () => {
    expect(about()).toMatchSnapshot();
  });
});
