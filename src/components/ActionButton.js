import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Message from '@material-ui/icons/Message';
import Work from '@material-ui/icons/Work';
import Code from '@material-ui/icons/Code';
import Mail from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  trigger: {
    position: 'absolute',
    backgroundColor: theme.palette.primary.main
  },
  actions: {
    position: 'absolute',
    transition: 'bottom, right 300ms ease-out',
    backgroundColor: '#fff'
  }
});

function getIcon(icon) {
  switch(icon) {
    case 'message':
      return <Message color="secondary" />;
    case 'mail':
      return <Mail color="primary" />
    case 'linkedin':
      return <Work color="primary" />
    case 'github':
      return <Code color="primary" />
    default:
      return <Message color="secondary" />;
  }
}

/**
  Render a button which will open a way of contanct.
*/
function ActionButton({ classes, pos, icon, onClick }) {
  return (
    <Button
      className={
        icon === 'message' ? classes.trigger : classes.actions
      }
      style={{ bottom: pos.bottom, right: pos.right }}
      variant="fab"
      onClick={onClick}
    >
      {getIcon(icon)}
    </Button>
  );
}

ActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
  pos: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export { ActionButton };
export default withStyles(styles)(ActionButton);
