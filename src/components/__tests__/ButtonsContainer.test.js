import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import { createShallow } from '@material-ui/core/test-utils';
import ActionButton from '../ActionButton';

describe('`ButtonsContainer`', () => {
  let props = {};
  let mountedBtns;
  const shallow = createShallow();
  const defaultPos = { bottom: 20, right: 15 };

  function btns() {
    if (!mountedBtns) mountedBtns = shallow(<ButtonsContainer {...props} />);
    return mountedBtns;
  }

  beforeEach(() => {
    props = {};
    mountedBtns = undefined;
  });

  it('should pass `pos`, `icon` and `onClick` to each `ActionButton`', () => {
    const actions = btns().find(ActionButton);
    actions.forEach(action => {
      expect(action.props().pos).toBeDefined();
      expect(action.props().icon).toBeDefined();
      expect(action.props().onClick).toBeDefined();
    });
  });

  it('should have a `state.btnsOpen` property', () => {
    expect(btns().state().btnsOpen).toBeDefined();
  });

  describe('`btnsOpen` is `false`', () => {
    beforeEach(() => {
      btns().setState({ btnsOpen: false });
    });

    it('should render `ActionButton`s with the `defaultPos`', () => {
      const actions = btns().find(ActionButton);
      actions.forEach(action => {
        expect(action.props().pos).toEqual(defaultPos);
      });
    });
  });

  it('should have a `toggleBtns` method', () => {
    expect(ButtonsContainer.prototype.toggleBtns).toBeDefined();
  });

  it('should pass `toggleBtns` to each `ActionButton`', () => {
    const actions = btns().find(ActionButton);
    const toggleBtns = btns().instance().toggleBtns;
    actions.forEach(action => {
      expect(action.props().onClick).toEqual(toggleBtns);
    });
  });

  describe(`toggleBtns`, () => {
    const toggleBtnsSpy = jest.spyOn(ButtonsContainer.prototype, 'toggleBtns');
    afterEach(() => {
      toggleBtnsSpy.mockClear();
    });

    it('should toggle `btnsOpen`', () => {
      expect(btns().state().btnsOpen).toBe(false);
      toggleBtnsSpy.call(btns().instance());
      expect(btns().state().btnsOpen).toBe(true);
      toggleBtnsSpy.call(btns().instance());
      expect(btns().state().btnsOpen).toBe(false);
    });
  });

  it('should match snapshot', () => {
    expect(btns()).toMatchSnapshot();
  });
});
