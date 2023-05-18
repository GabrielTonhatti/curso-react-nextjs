import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onButtonClick }) => {
  return (
    <button style={{ fontSize: '60px' }} onClick={onButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
