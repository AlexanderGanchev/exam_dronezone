import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Logo = ({ className }) => {
  // Render

  return (
    <div className={`logo ${className}`}>
      <span className="logo__logo-title">Drone</span>
      <span className="logo__logo-sub-title">Zone</span>
    </div>
  );
};

// ----------------

// Type of props

Logo.propTypes = {};

// Default value for props

Logo.defaultProps = {};
