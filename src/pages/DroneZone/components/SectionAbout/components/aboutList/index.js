import React from 'react';
import { ReactSVG } from 'react-svg';

import './styles.scss';

// ----------------

export const AboutList = ({ item }) => {
  return (
    <div className="about-list">
      {item.map(({ icon, title, subtitle }) => {
        return (
          <div className="about-list__list-item">
            <ReactSVG className="about-list__icon" src={icon} />
            <p className="about-list__title">{title}</p>
            <p className="about-list__subtitle">{subtitle}</p>;
          </div>
        );
      })}
    </div>
  );
};
// ----------------

// Type of props

AboutList.propTypes = {};

// Default value for props

AboutList.defaultProps = {};
