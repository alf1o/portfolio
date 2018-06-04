import React from 'react';
import Project from '../Project';
import { createShallow } from '@material-ui/core/test-utils';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';

describe('`Project`', () => {
  let props = {};
  let mountedPrj;
  const shallow = createShallow();

  function project() {
    if (!mountedPrj) mountedPrj = shallow(<Project {...props} />);
    return mountedPrj;
  }

  beforeEach(() => {
    props = {
      classes: {
        card: '',
        avatar: '',
        description: '',
        star: ''
      },
      project: {
        icon: 'T',
        url: 'test.com',
        name: 'test',
        description: 'test description',
        features: ['to', 'test', 'or', 'not', 'to', 'test']
      }
    };
    mountedPrj = undefined;
  });

  it('should render an `Avatar` icon which is `props.project.icon`', () => {
    const avt = project().dive().find(CardHeader).props().avatar;
    expect(avt.props.children).toBe(project().props().project.icon);
  });

  it('should render a `Button` which is a link to `project.url`', () => {
    const btn = project().dive().find(CardHeader).props().action;
    expect(btn.props.href).toBe(project().props().project.url);
  });

  it('should render a `CardHeader` with a `title` of `project.name`', () => {
    const title = project().dive().find(CardHeader).props().title;
    expect(title).toBe(project().props().project.name);
  });

  it('should render a `.description` with a text of `project.description`', () => {
    const desc = project().dive().find('.Project-description-3');
    expect(desc.props().children).toBe(project().props().project.description);
  });

  it('should render a `ListItem` for each `project.features`', () => {
    const ls = project().dive().find(ListItem);
    expect(ls.length).toBe(project().props().project.features.length);
  });

  it('should match snapshot', () => {
    expect(project()).toMatchSnapshot();
  });
});
