import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { SectionTitle } from '../../../../components/SectionTitle';
import { DronesList } from './components/dronesList';
import { dronesItem } from './data';

import imageDrones from './../../../../assets/images/drone2.png';

// Styles

import './styles.scss';

// ----------------

export const SectionDrones = () => {
  return (
    <div className="drones">
      <ContentContainer>
        <div className="drones__drones-image-wrapper">
          <img
            className="drones__drones-image"
            src={imageDrones}
            alt="logo-img"
          />
        </div>
        <div className="drones__section-title-wrapper">
          <p className="drones__section-title">Nature From The Air</p>
          <p className="drones__section-subtitle">
            Mauris consequat libero metus, nec ultricies sem efficitur quis.
            Integer bibendum eget metus ac accumsan. Integer sit amet lacus
            egestas, semper est quis, viverra.
          </p>
        </div>
        <DronesList item={dronesItem} />
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionDrones.propTypes = {
  prop: types.string,
};

// Default value for props

SectionDrones.defaultProps = {};
