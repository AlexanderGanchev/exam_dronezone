import types from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles

import './styles.scss';

// ----------------
export const ButtonDown = ({ className, buttonDown }) => {
  const scrollTo = (top) =>
    window.scrollTo({
      behavior: 'smooth',
      top,
    });

  // Render

  return (
    <div
      className={`button-down ${className}`}
      onClick={() => scrollTo(540, 0)}
    >
      <ReactSVG className="button-down__icon-down" src={buttonDown} />
      <p className="button-down__text-down">scrool down</p>
    </div>
  );
};

// ----------------

// Type of props

ButtonDown.propTypes = {
  className: types.string,
};

// Default props

ButtonDown.defaultProps = {
  className: '',
};
