import types from 'prop-types';
import React from 'react';

// Components

import VideoCard from '../../../../../../components/VideoCard';
import { SectionTitle } from '../../../../../../components/SectionTitle';
import { Button } from '../../../../../../components/Button';

// Styles

import './styles.scss';

// ----------------

export const PortfolioBlockLeft = ({ className }) => {
  return (
    <div className={`portfolio-block ${className}`}>
      <div className="portfolio-block__video--left">
        <VideoCard url="https://www.youtube.com/watch?v=icZotxynzJI" />
      </div>
      <div className="portfolio-block__info--left">
        <SectionTitle
          title="Nature From The Air"
          subtitle="Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan."
        />
        <Button title="Ask For Price" />
      </div>
    </div>
  );
};

// ----------------

// Type of props

PortfolioBlockLeft.propTypes = {
  prop: types.string,
};

// Default value for props

PortfolioBlockLeft.defaultProps = {};
