import React from 'react';
import { Contacts } from '../Contacts';
import { shallow } from 'enzyme';

describe('`Contacts`', () => {
  let props = {};
  let mountedContacts;

  function contacts() {
    if (!mountedContacts) mountedContacts = shallow(<Contacts {...props} />);
    return mountedContacts;
  }

  beforeEach(() => {
    props = {
      classes: {
        container: {},
        linkIcon: {}
      }
    };
    mountedContacts = undefined;
  });


  it('should match snapshot', () => {
    expect(contacts()).toMatchSnapshot();
  });
});
