import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles

import './styles.scss';

// ----------------

export const Button = ({
  buttonColor,
  title,
  buttonIcon,
  toggleModalHandler,
}) => {
  // Modify styles

  const modify = classNames({
    [` button--color-${buttonColor}`]: buttonColor,
  });

  // Render

  return (
    <button onClick={toggleModalHandler} className={`button${modify}`}>
      {buttonIcon ? (
        <ReactSVG className="button__icon" src={buttonIcon} />
      ) : null}
      {title}
    </button>
  );
};

// ----------------

// Type of props

Button.propTypes = {
  buttonColor: types.oneOf(['white', 'blue', 'transparent']),
};

// Default value for props

Button.defaultProps = {
  buttonColor: 'blue',
};
