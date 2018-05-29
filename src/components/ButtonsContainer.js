import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

/**
  Container for the action buttons.
*/
class ButtonsContainer extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired
  };

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
    const { classes } = this.props;
    const { btnsOpen } = this.state;
    const defaultPos = { bottom: 20, right: 15 };
    return (
      <div>
        <ActionButton
          pos={
            btnsOpen
            ? { bottom: 85, right: 7 }
            : defaultPos
          }
          icon="mail"
          onClick={this.toggleBtns}
        /><ActionButton
          pos={
            btnsOpen
            ? { bottom: 73, right: 72 }
            : defaultPos
          }
          icon="linkedin"
          onClick={this.toggleBtns}
        /><ActionButton
          pos={
            btnsOpen
            ? { bottom: 9, right: 83 }
            : defaultPos
          }
          icon="github"
          onClick={this.toggleBtns}
        />
        <ActionButton
          pos={defaultPos}
          icon="message"
          onClick={this.toggleBtns}
        />
      </div>
    );
  }
}

export { ButtonsContainer };
export default withStyles(styles)(ButtonsContainer);
