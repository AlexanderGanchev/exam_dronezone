import types from 'prop-types';
import React from 'react';

//Components

import GoogleMap from './components/GoogleMap';
// Styles

import './styles.scss';

// ----------------

export const SectionMap = () => {
  return (
    <div className="map">
      <GoogleMap />
    </div>
  );
};

// ----------------

// Type of props

SectionMap.propTypes = {
  prop: types.string,
};

// Default value for props

SectionMap.defaultProps = {};
