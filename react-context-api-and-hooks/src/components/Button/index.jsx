import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button style={{ fontSize: '60px' }} disabled={disabled} onClick={onButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
