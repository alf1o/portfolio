import React from 'react';
import ActionButton from '../ActionButton';
import { createShallow } from '@material-ui/core/test-utils';
import Message from '@material-ui/icons/Message';
import Work from '@material-ui/icons/Work';
import Code from '@material-ui/icons/Code';
import Mail from '@material-ui/icons/Mail';

describe('`ActionButton`', () => {
  let props = {};
  let mountedBtn;
  const shallow = createShallow();

  function btn() {
    if (!mountedBtn) mountedBtn = shallow(<ActionButton {...props} />);
    return mountedBtn;
  }

  beforeEach(() => {
    props = {
      classes: {
        trigger: '',
        actions: ''
      },
      pos: {
        bottom: 0,
        right: 0
      },
      icon: 'message',
      onClick: jest.fn()
    };
    mountedBtn = undefined;
  });

  describe('when `icon` is `message`', () => {
    it('should have a `.trigger` class', () => {
      expect(btn().dive().hasClass('ActionButton-trigger-1')).toBe(true);
    });

    it('should render `Message`', () => {
      expect(btn().dive().find(Message).length).toBe(1);
    });
  });

  describe('when `icon` is `mail`', () => {
    beforeEach(() => {
      btn().setProps({ icon: 'mail' });
    });

    it('should have an `.actions` class', () => {
      expect(btn().dive().hasClass('ActionButton-actions-2')).toBe(true);
    });

    it('should render `Mail`', () => {
      expect(btn().dive().find(Mail).length).toBe(1);
    });
  });

  describe('when `icon` is `linkedin`', () => {
    beforeEach(() => {
      btn().setProps({ icon: 'linkedin' });
    });

    it('should have an `.actions` class', () => {
      expect(btn().dive().hasClass('ActionButton-actions-2')).toBe(true);
    });

    it('should render `Work`', () => {
      expect(btn().dive().find(Work).length).toBe(1);
    });
  });

  describe('when `icon` is `github`', () => {
    beforeEach(() => {
      btn().setProps({ icon: 'github' });
    });

    it('should have an `.actions` class', () => {
      expect(btn().dive().hasClass('ActionButton-actions-2')).toBe(true);
    });

    it('should render `Code`', () => {
      expect(btn().dive().find(Code).length).toBe(1);
    });
  });

  describe('when `icon` is `unknown`', () => {
    beforeEach(() => {
      btn().setProps({ icon: 'unknown' });
    });

    it('should have an `.actions` class', () => {
      expect(btn().dive().hasClass('ActionButton-actions-2')).toBe(true);
    });

    it('should render `Message`', () => {
      expect(btn().dive().find(Message).length).toBe(1);
    });
  });

  it('should invoke the `onClick` prop when clicked', () => {
    btn().simulate('click');
    expect(btn().props().onClick.mock.calls.length).toBe(1);
  });

  it('should match snapshot', () => {
    expect(btn()).toMatchSnapshot();
  });
});
