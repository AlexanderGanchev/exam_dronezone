import React from 'react';

import './styles.scss';

// ----------------

export const DronesList = ({ item }) => {
  return (
    <div className="drones-list">
      {item.map(({ number, text }) => {
        return (
          <div className="drones-item drones-list__drones-item">
            <p className="drones-list__number">{number}</p>
            <p className="drones-list__text">{text}</p>;
          </div>
        );
      })}
    </div>
  );
};
// ----------------

// Type of props

DronesList.propTypes = {};

// Default value for props

DronesList.defaultProps = {};
