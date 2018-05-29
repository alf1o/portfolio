import React, { Component } from 'react';
import ActionButton from './ActionButton';

/**
  Container for the action buttons.
*/
class ButtonsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      btnsOpen: false
    };
    this.toggleBtns = this.toggleBtns.bind(this);
  }

  toggleBtns() {
    this.setState(prevState => ({ btnsOpen: !prevState.btnsOpen }));
  }

  render() {
    const { btnsOpen } = this.state;
    const defaultPos = { bottom: 20, right: 15 };
    return (
      <div>
        <a href="mailto:alfioparisi.93@gmail.com">
          <ActionButton
            pos={
              btnsOpen
              ? { bottom: 85, right: 7 }
              : defaultPos
            }
            icon="mail"
            onClick={this.toggleBtns}
          />
        </a>
        <a href="https://uk.linkedin.com/in/alfio-parisi-2b3baa13b">
          <ActionButton
            pos={
              btnsOpen
              ? { bottom: 73, right: 72 }
              : defaultPos
            }
            icon="linkedin"
            onClick={this.toggleBtns}
          />
        </a>
        <a href="https://github.com/alf1o">
          <ActionButton
            pos={
              btnsOpen
              ? { bottom: 9, right: 83 }
              : defaultPos
            }
            icon="github"
            onClick={this.toggleBtns}
          />
        </a>
        <ActionButton
          pos={defaultPos}
          icon="message"
          onClick={this.toggleBtns}
        />
      </div>
    );
  }
}

export default ButtonsContainer;
